import { MessageService } from './../services/message.service';
import { AbstractControl, FormControl, FormControlStatus, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Palette } from '../../../styles/theme';
import { BehaviorSubject, Observable, of, Subject, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormInputService } from './form-input.service';
import { FormChangeEvent } from '../models/form.options';
import { FormActions } from '../models/form.actions';
import { ControlType, Appearance, InputGrid } from '../models/question.types';

@Component({
  selector: 'kkl-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
})
export class FormInputComponent implements OnInit {
  @Input() control!: FormControl | AbstractControl;
  @Input() public key!: string;
  @Input() public controlType!: ControlType;
  @Input() public label!: string;
  @Input() public placeHolder!: string;
  @Input() public appearance!: Appearance;
  @Input() public theme!: Palette;
  @Input() public index!: number;
  @Input() public cleave!: {};
  @Input() public gridProps!: InputGrid;
  @Input() public icon!: string;
  public error$: BehaviorSubject<string>;
  public color$: Observable<Palette>;

  @Output() focusChanged: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<FormChangeEvent> = new EventEmitter();

  public value: string;

  constructor(
    private messageService: MessageService,
    private formInputService: FormInputService
  ) { }

  ngOnInit(): void {
    this.invalidate();
    this.error$ = new BehaviorSubject<string>('');
    this.color$ = this.setColor$();

    this.setProps();
  }

  checkDigits(val: string) {
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
          delimiter: '+',
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

  public validate() {
    this.setErrorMessage();
  }

  private getFormOption(props: {
    value: any;
    action: FormActions;
  }): FormChangeEvent {
    const { value, action } = props;
    const FormChangeEvent: FormChangeEvent = {
      key: this.key,
      control: this.control as FormControl,
      index: this.index,
      value,
      value$: of(value),
      action,
    };

    return FormChangeEvent;
  }

  // EVENTS SECTION
  public onFocus() {
    this.focusChanged.emit(
      this.getFormOption({ value: true, action: FormActions.FOCUS_CHANGED })
    );
  }

  public onValueChanged(value: string) {
    if (value === this.value) return;
    this.checkDigits(value);
    this.value = value;
    const FormChangeEvent: FormChangeEvent = this.getFormOption({
      value,
      action: FormActions.VALUE_CHANGED,
    });

    this.valueChanged.emit(FormChangeEvent);
  }
}
