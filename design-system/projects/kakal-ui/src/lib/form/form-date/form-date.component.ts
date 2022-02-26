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
import { QuestionDateModel } from './question-date.model';
import { FormOption } from '../models/form-data-source.model';

import { map, Observable, startWith } from 'rxjs';

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
  @Input() public question: QuestionDateModel;

  @Input() public range: boolean;
  @Input() public placeHolder: string;
  @Input() public maxDate: Date;
  @Input() public minDate: Date;
  @Input() public index: number;

  public message$: Observable<string>;
  public cleave = { date: true, datePattern: ['d', 'm', 'Y'] };

  @Output() public dateEvent: EventEmitter<MatDatepickerInputEvent<Date>> =
    new EventEmitter();
  @Output() start: EventEmitter<MatDatepickerInputEvent<Date>> =
    new EventEmitter();
  @Output() end: EventEmitter<MatDatepickerInputEvent<Date>> =
    new EventEmitter();

  @Output() rangeFormEmit: EventEmitter<any> = new EventEmitter();
  rangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output() focus: EventEmitter<FormOption> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    
    if (this.question) {
      this.placeHolder = this.question.label || this.question.placeHolder;
      this.range = this.question.range;
    }
    this.control = this.control || new FormControl();
    
    this.message$ = this.setErrorMessage$();
    this.rangeFormEmit.emit(this.rangeForm);
  }

  private getFormOption(): FormOption {
    const formOption: FormOption = {
      key: this.question?.key,
      control: this?.control,
      index: this?.index,
    };

    return formOption;
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
    this.control.setValue(event.value['_d']);
    this.dateEvent.emit(event.value['_d']);
  }

  public rangeDateChange(event: MatDatepickerInputEvent<Date>, type: string) {
    if (event.value) {
      if (type === 'start') {
        this.rangeForm.controls['start'].setValue(event.value['_d']);
        this.start.emit(event.value['_d']);
      } else {
        this.rangeForm.controls['end'].setValue(event.value['_d']);
        this.end.emit(event.value['_d']);
      }
      if(this.control)this.control.setValue(this.rangeForm.value);
    }
  }

  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
