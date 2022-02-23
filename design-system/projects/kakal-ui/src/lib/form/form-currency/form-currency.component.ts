import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { QuestionCurrencyModel } from './question-currency.model';
import { QuestionGroupModel } from '../models/question-group.model';
import { CurrencyModel } from './form-currency.model';
import { SelectOption } from '../models/question-select.model';

import { Question } from '../services/form.service';
import { CurrencyService } from './form-currency.service';
import {
  BehaviorSubject,
  debounceTime,
  map,
  Observable,
  startWith,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'kkl-form-currency',
  templateUrl: './form-currency.component.html',
  styleUrls: ['./form-currency.component.scss'],
})
export class FormCurrencyComponent implements OnInit {
  @Input() public question: QuestionCurrencyModel;
  @Input() public control: FormControl;
  @Input() public index: number;

  public currencyGroupSubject: BehaviorSubject<
    QuestionGroupModel<CurrencyModel>
  >;

  public currencyGroup$: Observable<QuestionGroupModel<CurrencyModel>>;

  public currencyQuestion: Question[] = [
    {
      key: 'currency',
      label: '',
      controlType: 'select',
      appearance: 'none',
      icon: 'keyboard_arrow_down',
    },
    {
      key: 'sum',
      cleave: { numeral: true },
      controlType: 'cleave',
      label: '',
    },
  ];

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    if (!this.control) {
      throw new Error('form-currency must get control as input');
    }
    if (!this.question) {
      throw new Error('form-currency must get question as input');
    }

    this.currencyGroupSubject = new BehaviorSubject<QuestionGroupModel>(
      this.currencyService.setCurrencyGroup({
        key: 'currency',
        questions: this.setCurrencyQuestion(
          this.currencyQuestion,
          this.control
        ),
      })
    );
    this.currencyGroup$ = this.setCurrencyGroupWithQuestions();
  }

  private setCurrencyQuestion(questions: Question[], control: FormControl) {
    return questions.map((question: Question) => {
      console.log(question);
      console.log(question.key);

      const value =
        question?.key === ''
          ? this.control.value[question.key] || 0
          : 13000001;

      const validations =
        question.key === 'sum' ? this.question?.validations : [];

      return {
        ...question,
        disabled: this.control.disabled,
        value,
        validations,
      } as Question;
    });
  }

  private setCurrencyGroupWithQuestions(): Observable<QuestionGroupModel> {
    return this.currencyService.getCurrencies$().pipe(
      switchMap((questions: SelectOption[]) => {
        return this.currencyGroupSubject.asObservable().pipe(
          map((currencyGroup: QuestionGroupModel) => {
            if (!this.control.disabled) {
              currencyGroup.questions[0]['options'] = questions;
            }
            return currencyGroup;
          }),
          switchMap((currencyGroup: QuestionGroupModel) => {
            return this.setControlValue(currencyGroup);
          })
        );
      })
    );
  }

  private setControlValue(
    currencyGroup: QuestionGroupModel
  ): Observable<QuestionGroupModel<any>> {
    return currencyGroup.formGroup.valueChanges.pipe(
      startWith(currencyGroup.getValue()),
      debounceTime(400),
      map((value: CurrencyModel) => {
        if (value) {
          const { sum } = value;
          this.control.setValue({
            ...value,
            sum: this.setSumAsNumber(sum as string),
          });
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
