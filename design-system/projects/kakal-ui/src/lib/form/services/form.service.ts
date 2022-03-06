import { Injectable } from '@angular/core';
import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';

import { QuestionBase } from '../models/question.model';
import { QuestionTextareaModel } from '../models/question-textarea.model';
import { QuestionTextModel } from '../models/question-text.model';
import { QuestionSelectModel } from '../models/question-select.model';
import {
  GroupOptions,
  QuestionGroupModel,
} from '../models/question-group.model';
import { QuestionNumberModel } from '../models/question-number.model';
import { QuestionAutocompleteModel } from '../models/question-autocomplete';
import { QuestionRadioModel } from '../form-radio/question-radio.model';
import { QuestionSumModel } from '../models/question-sum.model';
import { QuestionCurrencyModel } from '../form-currency/question-currency.model';
import { QuestionDateModel } from '../form-date/question-date.model';
import { QuestionFileModel } from '../models/question-file.model';

export type ControlTemplate = [
  state: any,
  validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
];

export type Question =
  | QuestionBase
  | QuestionSelectModel
  | QuestionTextModel
  | QuestionRadioModel
  | QuestionFileModel
  | QuestionDateModel
  | QuestionCurrencyModel
  | QuestionSumModel
  | QuestionTextareaModel
  | QuestionNumberModel
  | QuestionAutocompleteModel
  | QuestionGroupModel
  ;

export interface QuestionGroup {
  key?: string;
  questions: Question[];
  model?: any;
  options?: GroupOptions;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) { }

  // method which create a control template for FormBuilder
  private setFieldControl(question: Question): ControlTemplate {
    return [
      { value: question?.value, disabled: question?.disabled },
      question?.validations || [],
    ];
  }

  // method which create inner FormGroup instance
  private setGroupControl(control: QuestionGroupModel): FormGroup {
    const { questions } = control;
    return this.fb.group(this.setGroup(questions));
  }

  // method which create a template of to create a FormGroup instance with FormBuilder
  private setGroup(questions: Question[]): Object {
    return questions
      .map((question: Question) => question)
      .reduce((acc, control: Question) => {
        let template;
        const { key } = control;

        if (control instanceof QuestionBase) {
          template = this.setFieldControl(control);
          if (control.controlType === 'currency') {
          }
        }

        if (control instanceof QuestionGroupModel) {
          template = this.setGroupControl(control);
        }
        return {
          ...acc,
          [key]: template,
        };
      }, {});
  }

  // method which create a questions array
  public setQuestionList(questions: Question[]): Question[] {
    return questions.map((question: Question) => {
      return this.setQuestion(question);
    });
  }

  // method which return single FormControl instance
  public getFieldControl(question: Question): FormControl {
    const template = this.setFieldControl(question);
    return this.fb.control(template[0], template[1]);
  }

  private setQuestionKeyFromModel(model: Object, questions: Question[]) {
    const keys = Object.keys(model);
    return questions.map((question: Question, i) => {
      return {
        ...question,
        key: keys[i],
      };
    });
  }

  private activator<T extends any>(type: { new(): T }): T {
    return new type();
  }

  // method which return QuestionGroupModel instance
  public createQuestionGroup<T = any>(
    config: QuestionGroup
  ): QuestionGroupModel<T> {
    let { key, questions, options, model } = config;

    if (model) {
      questions = this.setQuestionKeyFromModel(model, questions);
    }
    questions = this.setQuestionList(questions);

    return new QuestionGroupModel<T>({
      ...options,
      key,
      label: '' || options?.label,
      questions,
      formGroup: this.setFormGroup(questions, options?.validations),
      controls: this.setQuestionsAsGroup(questions),
    });
  }

  public createFormArray(arr) {
    return this.fb.array(arr);
  }

  public setQuestionGroup(group: QuestionGroupModel): QuestionGroupModel {
    return this.createQuestionGroup({
      key: group.key,
      questions: group.questions,
      options: { ...group },
    });
  }

  // method which create a FormGroup angular instance
  private setFormGroup(
    questions: Question[],
    validator?: ValidatorFn | ValidatorFn[]
  ): FormGroup {
    const template = this.setGroup(questions) as {
      [key: string]: any;
    };

    const formGroup: FormGroup = this.fb.group(template, { validator });
    return formGroup;
  }

  // method which create a question instance
  public setQuestion(question: Question): Question {
    const questionsMap = {
      select: (question) => new QuestionSelectModel(question),
    };

    switch (question.controlType) {
      case 'group':
        const { key, type, gridProps, label } = question;
        return this.createQuestionGroup({
          key,
          questions: question['questions'],
          model: question['model'],
          options: {
            label,
            type,
            gridProps,
          },
        });

      case 'number':
        return new QuestionNumberModel(question);
      case 'sum':
        return new QuestionSumModel(question);
      case 'currency':
        const cq = question as QuestionCurrencyModel;
        return new QuestionCurrencyModel(cq);
      case 'select':
        return new QuestionSelectModel(question);
      case 'file':
        const fq = question as QuestionFileModel;
        return new QuestionFileModel(fq);
      case 'radio':
        return new QuestionRadioModel(question);
      case 'textarea':
        return new QuestionTextareaModel(question);

      case 'date':
        const dq = question as QuestionDateModel;
        return new QuestionDateModel(dq);
      case 'autocomplete':
        return new QuestionAutocompleteModel(question);
      default:
        return new QuestionTextModel(question);
    }
  }

  // create questions object for row instance to render to kkl-form {}
  public setQuestionsAsGroup(questions: Question[]): Object {
    return questions
      .map((question: Question) => question)
      .reduce((acc, control: Question) => {
        const { key } = control;
        return {
          ...acc,
          [key]: control,
        };
      }, {});
  }
}
