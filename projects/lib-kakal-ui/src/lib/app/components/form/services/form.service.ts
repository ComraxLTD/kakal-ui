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
import { QuestionGroupModel } from '../models/question-group.model';
import { QuestionBaseModel, QuestionType } from '../models/question-base.model';
import { QuestionNumberModel } from '../models/question-number.model';
import { QuestionAutocompleteModel } from '../models/question-autocomplete';
import {
  QuestionSelectModel,
  SelectOption,
} from '../models/question-select.model';

export type ControlTemplate = [
  state: any,
  validatorOrOpts?: ValidatorFn | AbstractControlOptions | ValidatorFn[],
  asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[]
]
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

  public getFieldControl(question): FormControl {
    const template = this.setFieldControl(question);
    return this.fb.control(template[0], template[1]);
  }

  private setFieldControl(question: QuestionBase): ControlTemplate {
    const { value, validations } = question;
    return [value || '', [...validations]];
  }

  private setGroupControl(control: QuestionGroupModel) {
    const { questions } = control;
    return this.fb.group(this.setGroup(questions));
  }

  private setGroup(questions: Question[]): { [x: string]: any } {
    return questions
      .map((question) => question)
      .reduce((acc, control) => {
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

  public setFormGroup(questions: Question[]): FormGroup {
    const template = this.setGroup(questions);
    return this.fb.group(template);
  }

  public setForm(form: QuestionGroupModel[]) {
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

  public setQuestionList(questions: Question[]): Question[] {
    return questions.map((question: Question) => {
      return this.setQuestion(question.controlType, { ...question });
    });
  }

  public setQuestion(
    controlType: QuestionType,
    options: { key: string; label: string; options?: SelectOption[] }
  ) {
    switch (controlType) {
      case 'text':
        return new QuestionTextModel(options);

      case 'number':
        return new QuestionNumberModel(options);

      case 'select':
        return new QuestionSelectModel(options);

      case 'textarea':
        return new QuestionTextareaModel(options);

      case 'calender':
        return new QuestionCalendar(options);

      case 'autocomplete':
        return new QuestionAutocompleteModel(options);
      default:
        return new QuestionTextModel(options);
    }
  }
}
