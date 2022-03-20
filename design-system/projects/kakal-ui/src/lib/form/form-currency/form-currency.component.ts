import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  ValidatorFn,
} from '@angular/forms';

import { QuestionGroupModel } from '../models/question-group.model';
import {
  QuestionSelectModel,
  SelectOption,
} from '../models/question-select.model';

import { FormService, Question } from '../services/form.service';
import {
  BehaviorSubject,
  debounceTime,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { Currency, QuestionCurrencyModel } from './question-currency.model';
import { FormChangeEvent } from '../models/form.options';

@Component({
  selector: 'kkl-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FormCurrencyComponent,
      multi: true,
    },
  ],
})
export class FormCurrencyComponent implements OnInit, ControlValueAccessor {
  @Input() public question: QuestionCurrencyModel;
  @Input() public value: Currency;
  @Input() public options: SelectOption[];
  @Input() public default: SelectOption;
  @Input() public index: number;
  @Input() public validations: ValidatorFn[];
  public currencyGroupSubject: BehaviorSubject<QuestionGroupModel<Currency>>;

  public currencyGroup: QuestionGroupModel<Currency>;

  public questions: Question[] = [
    {
      key: 'sum',
      cleave: { numeral: true },
      controlType: 'cleave',
      label: '',
    },
    {
      key: 'currency',
      label: '',
      controlType: 'select',
      appearance: 'none',
    },
  ];

  private _currency: Currency;

  @Output() change: EventEmitter<Currency> = new EventEmitter();

  constructor(private formService: FormService) {}

  private _onChange: (v: Currency | null) => void = (
    value: Currency | null
  ) => {};

  private _onTouched: () => void = () => {};

  ngOnInit(): void {
    this.currencyGroup = this.formService.createQuestionGroup<Currency>({
      questions: this.initQuestions(this.questions, this.options),
    });
  }

  private initQuestions(questions: Question[], options: SelectOption[]) {
    const newQuestions = [...questions];
    const index: number = questions.findIndex(
      (q) => q.controlType === 'select'
    );

    const value = options.find((option) => option.label === '₪');

    newQuestions[index] = {
      ...questions[index],
      options,
      value,
    } as QuestionSelectModel;

    return newQuestions;
  }

  writeValue(value: Currency): void {
    if (value) {
      const valueForm = this.currencyGroup.getValue();
      this.currencyGroup.formGroup.setValue(
        {
          currency: value.currency || valueForm.currency,
          sum: Number(value?.sum),
        },
        { emitEvent: false }
      );
    } else {
      this.currencyGroup.formGroup.setValue(
        { sum: null, currency: null },
        { emitEvent: false }
      );
    }
    // throw new Error('Method not implemented.');
  }
  registerOnChange(fn: (v: Currency | null) => void): void {
    this._onChange = fn;
    // throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    // throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled
      ? this.currencyGroup.formGroup.disable()
      : this.currencyGroup.formGroup.enable();
  }

  private setSumAsNumber(sum: string): number {
    if (typeof sum === 'string' && sum.includes(',')) {
      sum = sum.split(',').reduce((acc, val) => acc + val);
    }
    return Number(sum);
  }

  public onValueChanged(event: FormChangeEvent) {
    const currencyValue = this.currencyGroup.formGroup.value;
    const { value } = event;
    this._currency = { ...currencyValue, sum: this.setSumAsNumber(value) };
    this._emitChangeEvent(this._currency);
  }

  public onSelectChanged(event: FormChangeEvent) {
    const currencyValue = this.currencyGroup.formGroup.value;
    const { value } = event;
    this._currency = { ...currencyValue, currency: value };
    this._emitChangeEvent(this._currency);
  }

  private _emitChangeEvent(value: Currency) {
    this._onChange(value);
    this.change.emit(value);
  }
}
