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
import {
  GroupOptions,
  QuestionGroupModel,
} from '../models/question-group.model';
import { QuestionSumModel } from '../models/question-sum.model';
import { QuestionNumberModel } from '../models/question-number.model';

import { QuestionSelectModel } from '../form-select/question-select.model';
import { QuestionAutocompleteModel } from '../form-autocomplete/question-autocomplete';
import { QuestionRadioModel } from '../form-radio/question-radio.model';
import { QuestionCurrencyModel } from '../form-currency/question-currency.model';
import { QuestionDateModel } from '../form-date/question-date.model';
import { QuestionCheckboxModel } from '../form-checkbox/question-checkbox.model';
import { QuestionCheckboxGroup } from '../form-checkbox-group/question-checkbox-group.model';
import { QuestionUploadModel } from '../form-upload/question-upload.model';
import { QuestionCounterModel } from '../form-counter/question-counter.model';
import { QuestionRangeModel } from '../form-range/question-range.model';

import { OptionMap } from '../models/form.types';

export type ControlTemplate = [
  state: any,
  validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
];

export type Question =
  | QuestionBase
  | QuestionSelectModel
  | QuestionCounterModel
  | QuestionRangeModel
  | QuestionTextModel
  | QuestionRadioModel
  | QuestionUploadModel
  | QuestionDateModel
  | QuestionCurrencyModel
  | QuestionSumModel
  | QuestionTextareaModel
  | QuestionNumberModel
  | QuestionAutocompleteModel
  | QuestionCheckboxModel
  | QuestionCheckboxGroup
  | QuestionGroupModel;

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
  constructor(private fb: FormBuilder) {}

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

  private activator<T extends any>(type: { new (): T }): T {
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

  public setQuestionsWithOptions(
    questions: Question[],
    optionsMap: OptionMap
  ): Question[] {
    return questions.map((q: Question) =>
      optionsMap[q.key] === undefined ? q : { ...q, options: optionsMap[q.key] }
    );
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
    switch (question.controlType) {
      case 'group':
        const { key, gridProps, label } = question;
        return this.createQuestionGroup({
          key,
          questions: question['questions'],
          model: question['model'],
          options: {
            label,
            controlType: 'group',
            gridProps,
          },
        });

      case 'number':
        return new QuestionNumberModel(question);
      case 'sum':
        return new QuestionSumModel(question);
      case 'currency':
        return new QuestionCurrencyModel(question as QuestionCurrencyModel);
      case 'range':
        return new QuestionRangeModel(question as QuestionRangeModel);
      case 'select':
        return new QuestionSelectModel(question as QuestionSelectModel);
      case 'multiSelect':
        return new QuestionSelectModel(question as QuestionSelectModel);
      case 'upload':
        const fq = question as QuestionUploadModel;
        return new QuestionUploadModel(fq);
      case 'counter':
        return new QuestionCounterModel(question as QuestionCounterModel);
      case 'radio':
        return new QuestionRadioModel(question);
      case 'checkbox':
        return new QuestionCheckboxModel(question as QuestionCheckboxModel);
      case 'checkboxGroup':
        return new QuestionCheckboxGroup(question as QuestionCheckboxGroup);

      case 'textarea':
        return new QuestionTextareaModel(question);
      case 'date':
        return new QuestionDateModel(question as QuestionDateModel);
      case 'autocomplete':
        return new QuestionAutocompleteModel(
          question as QuestionAutocompleteModel
        );
      default:
        return new QuestionTextModel(question);
    }
  }

  // create questions object for row instance to render to kkl-form {}
  public setQuestionsAsGroup(questions: Question[]): {
    [key: string]: Question;
  } {
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
