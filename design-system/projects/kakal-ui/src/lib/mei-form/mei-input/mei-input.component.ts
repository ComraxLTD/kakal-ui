import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormControlStatus } from '@angular/forms';
import { Palette } from '../../../styles/theme';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map, Observable, startWith } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { FormInputService } from '../mei-services/form-input.service';
import { FormActions, FormChangeEvent } from '../models/form-events';
import { Appearance, ControlType, GridProps } from '../models/question.types';

@Component({
  selector: 'mei-input',
  templateUrl: './mei-input.component.html',
  styleUrls: ['./mei-input.component.scss']
})
export class MeiInputComponent implements OnInit {
  @Input() control!: FormControl | AbstractControl;
  @Input() key!: string;
  @Input() controlType!: ControlType;
  @Input() label!: string;
  @Input() placeHolder!: string;
  @Input() appearance!: Appearance;
  @Input() theme!: Palette;
  @Input() index!: number;
  @Input() gridProps!: GridProps;
  @Input() icon!: string;
  @Input() debounce!: number;

  cleave!: {};
  error$: BehaviorSubject<string>;
  color$: Observable<Palette>;

  @Output() focusChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(
    private messageService: MessageService,
    private formInputService: FormInputService
  ) {}

  ngOnInit(): void {
    this.invalidate();

    this.error$ = new BehaviorSubject<string>('');
    this.color$ = this.setColor$();
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 500),
      filter( value => (typeof value === 'string' && value !== ''))
    ).subscribe(a => this.onValueChanged());

    this.setProps();
  }

  private invalidate() {
    if (!this.control) {
      throw new Error('kkl-form-input must get control');
    }
    if (
      (this.controlType === 'sum' || this.controlType === 'cleave') &&
      !this.cleave
    ) {
      throw new Error('kkl-form-input missing cleave object');
    }
  }

  private setProps() {
    const controlCheck = this.formInputService.getInputProps(this.controlType);

    for (const property in controlCheck) {
      if (property === 'validation')
        this.control.setValidators(controlCheck[property]);
      if (property === 'icon') this.icon = controlCheck[property];
      if (property === 'cleave') this.cleave = controlCheck[property];
      if (property === 'placeHolder') this.placeHolder = controlCheck[property];
      if (property === 'controlType') this.controlType = controlCheck[property];
    }
  }

  private setColor$() {
    const startStatus: FormControlStatus = this.control.disabled
      ? 'DISABLED'
      : 'VALID';

    return this.control.statusChanges.pipe(
      startWith(startStatus),
      map((status: FormControlStatus) => {
        let color: Palette = 'primary';

        switch (status) {
          case 'DISABLED':
            color = 'disable';
            break;
          case 'INVALID':
            if (this.control.touched) {
              color = 'warn';
            }
            break;
          default:
            color;
            break;
        }

        return color;
      })
    );
  }

  private setErrorMessage() {
    const error = this.messageService.getErrorMessage(
      this.control as FormControl,
      this.placeHolder
    );

    this.error$.next(error);
    if (error && this.control.touched) {
      this.control.updateValueAndValidity();
    }
  }

  validate() {
    this.setErrorMessage();
  }


  // EVENTS SECTION
  onFocus() {
    this.focusChanged.emit({
      key: this.key,
      value: this.control.value,
      action: FormActions.FOCUS_IN,
    });
  }

  onValueChanged() {
    this.valueChanged.emit({
      key: this.key,
      value: this.control.value,
      action: FormActions.VALUE_CHANGED,
    });
  }

  onValueChangedInput(event) {
    this.checkDigits(event);
  }

  private checkDigits(val: string) {
    const twoDigits: string[] = ['02', '03', '04', '08', '09'];
    const threeDigits: string[] = ['05', '07'];
    if (val.length > 1) {
      const str = val.charAt(0) !== '+' ? val.substring(0, 2) : val.substring(1,3);
      delete this.cleave['delimiter'];
      const [two, three] = [twoDigits.includes(str), threeDigits.includes(str)];
      if (!two && !three) {
        this.cleave = {
          ...this.cleave,
          blocks: [0, 14],
          // delimiter: '+',
        }
      }
      if (three) this.cleave = {
        ...this.cleave,
        blocks: [3, 3, 4],
        delimiter: '-',
      }
      if (two) this.cleave = {
        ...this.cleave,
        blocks: [2, 3, 4],
        delimiter: '-',
      }
    }
  }

}
