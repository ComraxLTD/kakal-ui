import { Injectable } from '@angular/core';
import { QuestionTextareaModel } from '../models/question-textarea.model';
import { QuestionCalendar } from '../models/question-calendar';
import { QuestionTextModel } from '../models/question-text.model';
import {
  AbstractControlOptions,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
} from '@angular/forms';
import {
  GroupOptions,
  QuestionGroupModel,
} from '../models/question-group.model';
import { QuestionBaseModel, ControlType } from '../models/question.model';
import { QuestionNumberModel } from '../models/question-number.model';
import { QuestionAutocompleteModel } from '../models/question-autocomplete';
import { QuestionSelectModel } from '../models/question-select.model';

export type ControlTemplate = [
  state: any,
  validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
];

export type QuestionBase = QuestionBaseModel<string | number | Date>;

export type Question =
  | QuestionSelectModel
  | QuestionTextModel
  | QuestionCalendar
  | QuestionTextareaModel
  | QuestionNumberModel
  | QuestionAutocompleteModel
  | QuestionGroupModel;

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  private setFieldControl(question: QuestionBase): ControlTemplate {
    const { value, validations } = question;
    return [value || '', validations];
  }

  public getFieldControl(question: Question): FormControl {
    const template = this.setFieldControl(question);
    return this.fb.control(template[0], template[1]);
  }

  private setGroupControl(control: QuestionGroupModel): FormGroup {
    const { questions } = control;
    return this.fb.group(this.setGroup(questions));
  }

  private setGroup(questions: Question[]): { [x: string]: ControlTemplate } {
    return questions
      .map((question: Question) => question)
      .reduce((acc, control: Question) => {
        let template;
        const { key } = control;

        if (control instanceof QuestionBaseModel) {
          template = this.setFieldControl(control);
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

  // method which return QuestionGroupModel instance
  public createQuestionGroup(config: {
    key: string;
    questions: Question[];
    options?: GroupOptions;
  }): QuestionGroupModel {
    const { key, questions, options } = config;
    console.log(this.setQuestionList(questions));
    return new QuestionGroupModel({
      ...options,
      key,
      label: '' || options?.label,
      questions: this.setQuestionList(questions),
      formGroup: this.setFormGroup(questions),
    });
  }

  // method which return FormGroup instance
  public setFormGroup(questions: Question[]): FormGroup {
    const template = this.setGroup(this.setQuestionList(questions));
    return this.fb.group(template);
  }

  // method which return FormGroup instance with multiple FormGroup
  public setForm(form: QuestionGroupModel[]): FormGroup {
    const template = form
      .map((group: QuestionGroupModel) => group)
      .reduce((acc, group) => {
        const { key } = group;

        return {
          ...acc,
          [key]: this.setFormGroup(group.questions),
        };
      }, {});

    return this.fb.group(template);
  }

  // method which return array of Question instance
  public setQuestionList(questions: Question[]): Question[] {
    return questions.map((question: Question) => {
      return this.setQuestion(question);
    });
  }

  // method which return class Question instance
  public setQuestion(question: Question) {
    switch (question.controlType) {
      case 'number':
        return new QuestionNumberModel(question);

      case 'select':
        return new QuestionSelectModel(question);

      case 'textarea':
        return new QuestionTextareaModel(question);

      case 'calendar':
        return new QuestionCalendar(question);

      case 'autocomplete':
        return new QuestionAutocompleteModel(question);
      default:
        return new QuestionTextModel(question);
    }
  }

  // method which return object of key : question
  public setQuestionGroup(questions: Question[]): { [x: string]: Question } {
    return questions
      .map((question: Question) => question)
      .reduce((acc, control: Question) => {
        const { key } = control;
        return {
          ...acc,
          [key]: this.setQuestion(control),
        };
      }, {});
  }
}
