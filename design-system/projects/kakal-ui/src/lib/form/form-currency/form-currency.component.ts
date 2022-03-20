import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private formService: FormService) {}

  private _onChange: (v: Currency | null) => void = (
    value: Currency | null
  ) => {};

  ngOnInit(): void {
    this.currencyGroup = this.formService.createQuestionGroup<Currency>({
      questions: this.initQuestions(this.questions, this.options),
    });

    // this.currencyGroupSubject = new BehaviorSubject<QuestionGroupModel>(
    //   this.currencyService.setCurrencyGroup({
    //     key: 'currency',
    //     questions: this.setCurrencyQuestion(
    //       this.currencyQuestion,
    //       this.control
    //     ),
    //   })
    // );
    // this.currencyGroup$ = this.setCurrencyGroupWithQuestions();
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

  private setCurrencyQuestion(questions, control: FormControl) {
    return questions.map((question) => {
      const { sum, currency } = control.value;
      let value: any;

      if (question.key === 'sum') value = sum ? sum : 0;
      else value = currency ? currency : { label: '', value: 0 };

      const validations = question.key === 'sum' ? this.validations : [];

      return {
        ...question,
        // disabled: this.control.disabled,
        value,
        validations,
      } as Question;
    });
  }

  // private setCurrencyGroupWithQuestions(): Observable<QuestionGroupModel> {
  //   return this.currencyService.getCurrencies$().pipe(
  //     switchMap((questions: SelectOption[]) => {
  //       return this.currencyGroupSubject.asObservable().pipe(
  //         map((currencyGroup: QuestionGroupModel) => {
  //           if (!this.control.disabled) {
  //             currencyGroup.questions[0]['options'] = questions;
  //           }
  //           return currencyGroup;
  //         }),
  //         switchMap((currencyGroup: QuestionGroupModel) => {
  //           return this.setControlValue(currencyGroup);
  //         })
  //       );
  //     })
  //   );
  // }

  private setControlValue(
    currencyGroup: QuestionGroupModel
  ): Observable<QuestionGroupModel<any>> {
    return currencyGroup.formGroup.valueChanges.pipe(
      startWith(currencyGroup.getValue()),
      debounceTime(400),
      map((value: Currency) => {
        if (value) {
          const { sum } = value;
          // this.control.setValue({
          //   ...value,
          //   sum: this.setSumAsNumber(sum as string),
          // });
        }

        return currencyGroup;
      })
    );
  }

  private setSumAsNumber(sum: string): number {
    if (typeof sum === 'string' && sum.includes(',')) {
      sum = sum.split(',').reduce((acc, val) => acc + val);
    }
    return Number(sum);
  }
}
