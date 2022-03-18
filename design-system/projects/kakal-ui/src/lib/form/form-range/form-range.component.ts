import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  skip,
  take,
  filter,
  takeUntil,
  Subject,
  Observable,
  tap,
  map,
  merge,
} from 'rxjs';
import { FilterRange } from '../../filters/filters.types';
import { QuestionGroupModel } from '../models/form.types';
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

  public rangeGroup: QuestionGroupModel;
  public disabled: boolean;

  private range: Range | null;

  private destroy: Subject<void>;

  @Output() rangeChange: EventEmitter<FilterRange<number> | null> =
    new EventEmitter();

  ngOnInit(): void {
    this.destroy = new Subject();
    this.rangeGroup = this.seRangeGroup(this.questions);
  }

  OnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }

  private _onChange: (v: Range | null) => void = (value: Range | null) => {};

  // ControlValueAccessor interface methods
  writeValue(value: Range | null) {
    this.range = value;

    if (value) {
      this.rangeGroup.formGroup.setValue(value), { emitEvent: false };
    } else {
      this.rangeGroup.formGroup.setValue(
        { start: null, end: null },
        { emitEvent: false }
      );
    }

    this._emitChangeEvent();
  }

  registerOnChange(fn: (v: Range | null) => void): void {
    const true$ = this.rangeGroup.formGroup.valueChanges.pipe(
      filter((range) => range.end !== '' || range.start !== ''),
      takeUntil(this.destroy)
    );
    const false$ = this.rangeGroup.formGroup.valueChanges.pipe(
      filter((range) => range.end === '' && range.start === ''),
      map((range) => null),
      takeUntil(this.destroy)
    );

    merge(true$, false$).pipe(skip(1), takeUntil(this.destroy)).subscribe(fn);
  }

  registerOnTouched(fn: Function) {}

  private _emitChangeEvent() {
    this._onChange(this.range);
    this.rangeChange.emit(this.range);
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    if (isDisabled) {
      this.rangeGroup.formGroup.disable();
    } else {
      this.rangeGroup.formGroup.enable();
    }
  }

  public seRangeGroup(questions: Question[]): QuestionGroupModel {
    const group = this.formService.createQuestionGroup<FilterRange<number>>({
      key: 'range',
      questions,
    });

    return group;
  }

  public onValueChanged() {
    const range = this.rangeGroup.formGroup.value;

    if (range.end === '' && range.start === '') {
      this.range = null;
      this._emitChangeEvent();
    }

    if (range.end || range.start) {
      this.range = range;

      this._emitChangeEvent();
    }
  }
}
