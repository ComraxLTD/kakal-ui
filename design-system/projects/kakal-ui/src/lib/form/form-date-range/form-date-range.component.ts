import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormControlStatus,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatCalendarCellClassFunction, MatDatepickerInputEvent } from '@angular/material/datepicker';
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
  @Input() public dates: any[];
  month: number;

  // MatFormFieldAppearance
  public message$: Observable<string>;

  private destroy: Subject<void>;

  private range: Range<Date>;

  public dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  @Output() readonly dateRangeChanged: EventEmitter<FormChangeEvent<Range<Date>>> =
    new EventEmitter();

  @Output() focus: EventEmitter<FormChangeEvent> = new EventEmitter();
  @Output() monthChanged: EventEmitter<number> = new EventEmitter();
  constructor(private messageService: MessageService) { }

  private _onChange: (v: Range | null) => void = (value: Range | null) => { };

  ngOnInit(): void {
    this.destroy = new Subject();

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

      if (!this.month) {
        this.month = date._i.month + 1;
        this.monthChanged.emit(this.month);
      }
      if (this.month !== date._i.month + 1) {
        this.month = date._i.month + 1;
        this.monthChanged.emit(this.month);
      }
      return this.changeMonth(date);
    };
  };
  changeMonth(date: any) {
    const [filtered] = this.dates.filter(item => this.compareDates(item.date, date._d));
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
      const cells = Array.from(document.querySelectorAll<HTMLDivElement>('.mat-calendar .mat-calendar-body-cell-content'));
      const [cell] = cells.filter(cell => +cell.outerText == object.date.getDate()) as HTMLDivElement[];
      if (object.occupancy) cell.innerHTML =
        `
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
    const [filter] = this.dates.filter(item => this.compareDates(item.date, date._d));
    return filter?.occupancy ? true : false;
  }

}