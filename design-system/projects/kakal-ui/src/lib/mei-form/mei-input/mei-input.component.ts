import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormControlStatus, Validators } from '@angular/forms';
import { Palette } from '../../../styles/theme';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, map, Observable, startWith } from 'rxjs';
import { MessageService } from '../mei-services/message.service';
import { KklFormActions, KklFormChangeEvent } from '../models/kkl-form-events';
import { Appearance, ControlType, GridProps } from '../models/control.types';

@Component({
  selector: 'kkl-input',
  templateUrl: './mei-input.component.html',
  styleUrls: ['./mei-input.component.scss']
})
export class MeiInputComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() key!: string;
  @Input() controlType!: ControlType;
  @Input() label!: string;
  @Input() placeHolder!: string;
  @Input() appearance: Appearance;
  @Input() theme!: Palette;
  @Input() index!: number;
  @Input() gridProps!: GridProps;
  @Input() icon!: string;
  @Input() format!: string;
  @Input() debounce!: number;

  error$: BehaviorSubject<string>;
  color$: Observable<Palette>;

  @Output() focusChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();
  @Output() valueChanged: EventEmitter<KklFormChangeEvent> = new EventEmitter();

  constructor(
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.error$ = new BehaviorSubject<string>('');
    this.color$ = this.setColor$();
    this.control.valueChanges.pipe(
      startWith(''),
      distinctUntilChanged(),
      debounceTime(this.debounce? this.debounce : 300),
    ).subscribe(a => this.onValueChanged());

    this.setValidationsAndIcons();
  }

  private setValidationsAndIcons() {
    switch (this.controlType) {
      case 'email':
        if(!this.icon){
          this.icon = 'email';
        }
        if(!this.placeHolder){
          this.placeHolder = 'דוא"ל';
        }
        if(!this.control.hasValidator(Validators.email) && !this.format) {
          this.control.addValidators(Validators.email);
        }
        break;
      case 'time':
        if(!this.icon){
          this.icon = 'time';
        }
        break;
      case 'phone':
        if(!this.icon){
          this.icon = 'phone';
        }
        break;
      default:
        break;
    }
    if(this.format) {
      if(!this.control.hasValidator(Validators.pattern(this.format))) {
        this.control.addValidators(Validators.pattern(this.format));
      }
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
      this.control,
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


  updateNum(val: string) {
    if(val === '+') {
      this.control.setValue(this.control.value+1);
    } else {
      this.control.setValue(this.control.value-1);
    }
  }

  // EVENTS SECTION
  onFocus() {
    this.focusChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.FOCUS_IN,
    });
  }

  onValueChanged() {
    this.valueChanged.emit({
      key: this.key,
      value: this.control.value,
      action: KklFormActions.VALUE_CHANGED,
    });
  }

}
