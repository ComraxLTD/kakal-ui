import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { skip, take, filter, takeUntil, Subject } from 'rxjs';
import { FilterRange } from '../../filters/filters.types';
import { FormService, Question } from '../services/form.service';
import { Range } from './question-range.model';

@Component({
  selector: 'kkl-form-range',
  templateUrl: './form-range.component.html',
  styleUrls: ['./form-range.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormRangeComponent,
      multi: true,
    },
  ],
  host: {
    class: 'kkl-form-range',
    '[class.kkl-disabled]': 'disabled',
  },
  inputs: ['disabled'],
})
export class FormRangeComponent implements OnInit, ControlValueAccessor {
  @Input() questions: Question[];

  constructor(private formService: FormService) {}

  public formGroup: FormGroup;
  public disabled: boolean;

  private range: Range | null;

  private destroy: Subject<void>;

  @Output() rangeChange: EventEmitter<FilterRange<number> | null> =
    new EventEmitter();

  ngOnInit(): void {
    this.destroy = new Subject();
    this.formGroup = this.setAmountGroup(this.questions);
  }

  private _onChange: (v: Range | null) => void = (value: Range | null) => {};

  // ControlValueAccessor interface methods
  writeValue(value: Range | null) {
    if (!value) {
      this.formGroup.reset();
      return;
    }

    this.range = value;
    this._emitChangeEvent();
  }

  registerOnChange(fn: (v: Range | null) => void): void {
    this._onChange = fn;
  }

  registerOnTouched(fn: Function) {}

  public _onChangeEvent(event: Event) {
    event.stopPropagation();

    this._emitChangeEvent();
  }

  private _emitChangeEvent() {
    this._onChange(this.range);
    this.rangeChange.emit(this.range);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();

    }
  }

  public setAmountGroup(questions: Question[]): FormGroup {
    const group = this.formService.createQuestionGroup<FilterRange<number>>({
      key: 'amount',
      questions,
    });

    this.questions = group.questions;

    return group.formGroup;
  }

  public onValueChanged() {
    this.formGroup.valueChanges
      .pipe(skip(1), take(1), takeUntil(this.destroy))
      .subscribe((range: FilterRange<number>) => {
        this.range = range;

        if (range.end === null) {
          this.range = null;
        }

        this._emitChangeEvent();
      });
  }
}
