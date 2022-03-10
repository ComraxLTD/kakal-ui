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

import { map, Observable, startWith } from 'rxjs';
import { Appearance } from '../models/question.model';
import { FormOption } from '../models/form.options';

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
  @Input() public maxDate: Date;
  @Input() public minDate: Date;
  @Input() public index: number;
  @Input() public appearance: Appearance;
  // MatFormFieldAppearance
  public message$: Observable<string>;

  @Output() public dateEvent: EventEmitter<MatDatepickerInputEvent<Date>> =
    new EventEmitter();

  rangeForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output() focus: EventEmitter<FormOption> = new EventEmitter();

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.control = this.control || new FormControl();
    if (this.control.value) {
      if (this.control.value.start || this.control.value.end) this.rangeForm.setValue(this.control.value)
    }
    this.message$ = this.setErrorMessage$();
  }

  private getFormOption(): FormOption {
    const formOption: FormOption = {
      key: this?.key,
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
      } else {
        this.rangeForm.controls['end'].setValue(event.value['_d']);
      }
      if (this.control) this.control.setValue(this.rangeForm.value);


      this.dateEvent.emit(this.rangeForm.value);
    }
  }

  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
