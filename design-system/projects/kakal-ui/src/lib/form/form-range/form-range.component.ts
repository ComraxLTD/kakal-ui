import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { FilterRange } from '../../filters/filters.types';
import { QuestionGroupModel } from '../models/form.types';
import { FormService, Question } from '../services/form.service';
import { Range } from './question-range.model';
import { FormChangeEvent, FormActions } from '../models/form.types';
import { skip, filter, takeUntil, Subject, map, merge } from 'rxjs';

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
    {
      provide: NG_VALIDATORS,
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
export class FormRangeComponent
  implements OnInit, ControlValueAccessor, Validator
{
  @Input() key: string;
  @Input() label: string;
  @Input() index: number;
  @Input() questions: Question[];

  constructor(private formService: FormService) {}

  public rangeGroup: QuestionGroupModel;
  public disabled: boolean;

  private range: Range | null;

  private destroy: Subject<void>;

  // @Output() rangeChange: EventEmitter<FilterRange<number> | null> =
  @Output() public rangeChanged: EventEmitter<FormChangeEvent<Range<number>>> =
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
  private _onTouched: () => void = () => {};

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

  registerOnTouched(fn: () => void): void {
    this._onTouched = fn;
  }

  private setChangeEvent() {
    return {
      key: this.key,
      value: { ...this.range, type: 'number' },
      index: this.index,
      event: FormActions.VALUE_CHANGED,
    } as FormChangeEvent;
  }

  private _emitChangeEvent() {
    this._onChange(this.range);
    this.rangeChanged.emit(this.setChangeEvent());
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
      key: this.key,
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

  private strToInt(value) {
    if (value?.includes(',')) {
      value = value.split(',').reduce((acc, val) => acc + val);
    }

    return Number(value);
  }

  validate(control: AbstractControl): ValidationErrors {
    const range = this.rangeGroup.formGroup.value;
    const { start, end } = range;

    if (this.strToInt(end) >= this.strToInt(start)) return null;

    const error = {
      range: {
        message: 'start cent be grater then end',
        actual: this.range,
      },
    };
    this.rangeGroup.formGroup.setErrors(error);

    return error;
  }
  registerOnValidatorChange?(fn: () => void): void {
    // throw new Error('Method not implemented.');
  }
}
