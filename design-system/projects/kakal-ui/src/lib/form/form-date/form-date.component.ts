import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormControlStatus, FormGroup } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';

import { MessageService } from '../services/message.service';

import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { Appearance } from '../models/question.model';
import { FormChangeEvent } from '../models/form.options';
import { FormActions } from '../models/form.actions';
import { Range } from '../form-range/question-range.model';

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YY',
  },
  display: {
    dateInput: 'DD/MM/YY',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'kkl-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'he-HE' },
  ],
})
export class FormDateComponent implements OnInit {
  @Input() public control: FormControl;
  @Input() public key: string;
  @Input() public range: boolean;
  @Input() public placeHolder: string;
  @Input() public label: string;
  @Input() public maxDate: Date;
  @Input() public minDate: Date;
  @Input() public index: number;
  @Input() public appearance: Appearance;

  // MatFormFieldAppearance
  public message$: Observable<string>;

  private destroy: Subject<void>;

  @Output() public dateEvent: EventEmitter<MatDatepickerInputEvent<Date>> =
    new EventEmitter();

  @Output() readonly dateChanged: EventEmitter<FormChangeEvent<Date>> =
    new EventEmitter();

  @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.destroy = new Subject();

    this.message$ = this.setErrorMessage$();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  private setFormChangeEvent(props: {
    value: any;
    action: FormActions;
  }): FormChangeEvent {
    const { value, action } = props;
    const formChangeEvent: FormChangeEvent = {
      key: this?.key,
      control: this?.control,
      index: this?.index,
      value,
      action,
    };

    return formChangeEvent;
  }

  private setErrorMessage$() {
    return this.control.statusChanges.pipe(
      startWith('VALID' as FormControlStatus),
      map((status: FormControlStatus) => {
        if (this.control.touched) {
          const message = this.messageService.getErrorMessage(this.control, '');

          return message;
        }
        return null;
      })
    );
  }

  public onDateChange(event: MatDatepickerInputEvent<Date>): void {
    const formChangeEvent = this.setFormChangeEvent({
      value: event.value['_d'],
      action: FormActions.DATE_CHANGED,
    });

    this.dateChanged.emit(formChangeEvent);
  }
  public onDateInput(event: MatDatepickerInputEvent<Date>): void {
    const formChangeEvent = this.setFormChangeEvent({
      value: event.value['_d'],
      action: FormActions.DATE_CHANGED,
    });

    console.log(formChangeEvent)
    // this.dateChanged.emit(formChangeEvent);
  }

  public onFocus(): void {
    const formChangeEvent = this.setFormChangeEvent({
      value: true,
      action: FormActions.FOCUS_CHANGED,
    });
    this.focus.emit(formChangeEvent);
  }
}
