import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter, MatDateFormats, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatCalendar } from '@angular/material/datepicker';
import { Subject, takeUntil } from 'rxjs';
import { RadioOption } from '../../form-radio/question-radio.model';
import { FormCalendarService } from '../form-calendar.service';

@Component({
  selector: 'kkl-form-calendar-header',
  templateUrl: './form-calendar-header.component.html',
  styleUrls: ['./form-calendar-header.component.scss'],
  providers:[{
    provide:NG_VALUE_ACCESSOR,
    multi:true,
    useExisting:FormCalendarHeaderComponent
  }]
})
export class FormCalendarHeaderComponent<D> implements OnInit {

  private _destroyed = new Subject<void>();
  customDateRange!:FormControl |AbstractControl

  @Input() control: FormControl = new FormControl();
  @Input()  key: string = 'sleepingPlace';
  @Input() options: RadioOption[] = [
    { label: 'בקתה', checked: false },
    { label: 'מיטות', checked: false },
    { label: 'אוהלים', checked: false },
  ];

  constructor(private formCalendarService:FormCalendarService,
    private _calendar: MatCalendar<D>,
    private _dateAdapter: DateAdapter<D>,
    @Inject(MAT_DATE_FORMATS) private _dateFormats: MatDateFormats,
    cdr: ChangeDetectorRef
  ) {
    _calendar.stateChanges
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => cdr.markForCheck());
  }

ngOnInit(): void {
  this.customDateRange=this.formCalendarService.dateRange.controls.sleepingPlace
    
}

  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }

  get periodLabel() {
    return this._dateAdapter
      .format(
        this._calendar.activeDate,
        this._dateFormats.display.monthYearLabel
      )
      .toLocaleUpperCase();
  }

  previousClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
  }

  nextClicked(mode: 'month' | 'year') {
    this._calendar.activeDate =
      mode === 'month'
        ? this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1)
        : this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
  }
}
