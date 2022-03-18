import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlStatus,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
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
  selector: 'kkl-form-date-range',
  templateUrl: './form-date-range.component.html',
  styleUrls: ['./form-date-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormDateRangeComponent,
      multi: true,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'he-HE' },
  ],
})
export class FormDateRangeComponent implements OnInit, ControlValueAccessor {
  @Input() public key: string;
  @Input() public label: string;
  @Input() public placeHolder: string;
  @Input() public maxDate: Date;
  @Input() public minDate: Date;
  @Input() public index: number;
  @Input() public appearance: Appearance;

  // MatFormFieldAppearance
  public message$: Observable<string>;

  private destroy: Subject<void>;

  @Output() public dateEvent: EventEmitter<MatDatepickerInputEvent<Date>> =
    new EventEmitter();

  public dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    console.log('work');
    this.destroy = new Subject();

    // if (this.control.value) {
    //   if (this.control.value.start || this.control.value.end)
    //     this.rangeForm.setValue(this.control.value);
    // }
    this.message$ = this.setErrorMessage$();

    // this.listenToControlReset();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  writeValue(value: Range): void {
    if (value) {
      console.log(value);
      this.dateRange.setValue(value);
    }

    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.dateRange.disable();
    } else {
      this.dateRange.enable();
    }
    // throw new Error('Method not implemented.');
  }

  // private listenToControlReset() {
  //   return this.control.valueChanges
  //     .pipe(takeUntil(this.destroy))
  //     .subscribe((value) => {
  //       if (!value) {
  //         this.rangeForm.reset();
  //       }
  //     });
  // }

  private getFormOption(): FormChangeEvent {
    const FormChangeEvent: FormChangeEvent = {
      key: this?.key,
      index: this?.index,
    };

    return FormChangeEvent;
  }

  private setErrorMessage$() {
    return this.dateRange.statusChanges.pipe(
      startWith(this.dateRange.status),
      map((status: FormControlStatus) => {
        if (this.dateRange.touched) {
          // const message = this.messageService.getErrorMessage(this.control, '');
          // return message;
        }
        return null;
      })
    );
  }

  public onDateChange(event: MatDatepickerInputEvent<Date>): void {
    // this.control.setValue(event.value['_d']);
    this.dateEvent.emit(event.value['_d']);
  }

  public rangeDateChange(event: MatDatepickerInputEvent<Date>, type: string) {
    // if (event.value) {
    //   if (type === 'start') {
    //     this.rangeForm.controls['start'].setValue(event.value['_d']);
    //   } else {
    //     this.rangeForm.controls['end'].setValue(event.value['_d']);
    //   }
    //   if (this.control) this.control.setValue(this.rangeForm.value);
    //   this.dateEvent.emit(this.rangeForm.value);
    // }
  }

  public onFocus() {
    this.focus.emit(this.getFormOption());
  }
}
