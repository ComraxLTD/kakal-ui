import { AfterViewInit, ChangeDetectorRef,ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlStatus,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  MatCalendarCellClassFunction,
  MatDatepickerInputEvent,
  MatDateRangePicker,
} from '@angular/material/datepicker';
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

import { FormChangeEvent, FormActions } from '../models/form.types';
import { Range } from '../form-range/question-range.model';
import { map, Observable, startWith, Subject } from 'rxjs';
import { MY_FORMATS } from '../form-date/form-date.component';
import { Appearance } from '../models/question.types';
import { FormCalendarHeaderComponent } from './form-calendar-header/form-calendar-header.component';
import { FormCalendarService } from './form-calendar.service';
import { ElementRef } from 'react';
import { MatDateRangePickerInput } from '@angular/material/datepicker/date-range-picker';
@Component({
  selector: 'kkl-form-calendar',
  templateUrl: './form-calendar.component.html',
  styleUrls: ['./form-calendar.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormCalendarComponent,
      multi: true,
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'he-HE' },
  ]
})
export class FormCalendarComponent implements OnInit, ControlValueAccessor {
  occupiedDates!:any[]
  @ViewChild('picker') picker:FormCalendarHeaderComponent<Date>
  @Input() public key: string;
  @Input() public label: string;
  @Input() public placeHolder: string;
  @Input() public maxDate: Date;
  @Input() public minDate: Date;
  @Input() public index: number;
  @Input() public appearance: Appearance;
  @Input()
  set dates(dates: any[]) {
    this.occupiedDates=dates
    console.log('setter');
    
    this.cd.detectChanges()
  }
  
  get dates(): any[] {
    console.log('getter');
    return this.occupiedDates;
  }

  // public dates: any[];
  month: number;

  // date range custom variables
  customDateRange!: FormGroup;
  formCalendarHeader = FormCalendarHeaderComponent;

  // MatFormFieldAppearance
  public message$: Observable<string>;

  private destroy: Subject<void>;

  private range: Range<Date>;

  public dateRange!: FormGroup;

  @Output() readonly dateRangeChanged: EventEmitter<
    FormChangeEvent<Range<Date>>
  > = new EventEmitter();

  @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() monthChanged: EventEmitter<number> = new EventEmitter();
  constructor(
    private formCalendarService: FormCalendarService,
    private messageService: MessageService,
    private cd:ChangeDetectorRef
  ) {}

  private _onChange: (v: Range | null) => void = (value: Range | null) => {};



  ngOnInit(): void {
    console.log('ngoninit from claendar');
    
    this.destroy = new Subject();
    this.dateRange = this.formCalendarService.dateRange;
    this.message$ = this.setErrorMessage$();
  }

  ngOnDestroy() {
    this.destroy.next();
  }

  writeValue(value: Range): void {
    if (value) {
      this.dateRange.setValue(value);
    } else {
      this.dateRange.setValue({ start: null, end: null });
    }

    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: (v: Range | null) => void): void {
    this._onChange = fn;
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

  public rangeDateChanged(event: MatDatepickerInputEvent<Date>, type: string) {
    const date = event.value;

    if (date) {
      this.dateRange.patchValue({ [type]: date });
      this.range = this.dateRange.value;
    }

    this._emitChangeEvent();
  }

  private setChangeEvent() {
    return {
      key: this.key,
      value: { ...this.range, type: 'date' },
      index: this.index,
      action: FormActions.DATE_RANGE_CHANGED,
    } as FormChangeEvent<Range<Date>>;
  }

  private _emitChangeEvent() {
    this._onChange(this.range);
    this.dateRangeChanged.emit(this.setChangeEvent());
  }

  // DATES DATA LOGIC

  dateClass(): MatCalendarCellClassFunction<Date> {
    
    return (date: any) => {
      // console.log(date);
      
      // if (!this.month) {
        // this.month = date._i.month + 1;
        // this.monthChanged.emit(this.month);
      // }
      // if (this.month !== date._i.month + 1) {
      //   console.log(date,this.month);
      //   this.month = date._i.month + 1;
      //   this.monthChanged.emit(this.month);
      // }
      return this.changeMonth(date);
    };
  }
  changeMonth(date: any) {
    
    const [filtered] = this.occupiedDates.filter((item) =>
      this.compareDates(item.date, date._d)
    );
    if (filtered) {
      // if (filtered?.disabled) return 'disabled';
      this.changeInnerContent(filtered);
      return 'primary';
    }
  }
  compareDates(first: Date, second: any) {
    if (first.getFullYear() !== second.getFullYear()) return false;
    if (first.getMonth() !== second.getMonth()) return false;
    if (first.getDate() !== second.getDate()) return false;
    return true;
  }

  changeInnerContent(object: any) {

    setTimeout(() => {
      const cells = Array.from(
        document.querySelectorAll<HTMLDivElement>(
          '.mat-calendar .mat-calendar-body-cell-content'
        )
      );

      const [cell] = cells.filter(
        (cell) => +cell.outerText == object.date.getDate()
      ) as HTMLDivElement[];
      if (object.occupancy)
        cell.innerHTML = `
      <div fxLayout='column'>
      <div>
      ${cell.innerText}
      </div>
      <div fxLayout='row' class='occupancy'>
      ${object.occupancy} פנוי
      </div>

      </div>
      `;
    });
  }

  myFilter = (date: any): boolean => {
    const [filter] = this.occupiedDates.filter((item) =>
      this.compareDates(item.date, date._d)
    );
    return filter?.occupancy ? true : false;
  };
}
