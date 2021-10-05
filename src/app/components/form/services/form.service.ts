import {
  QuestionSelectModel,
  SelectOption,
} from '../models/question-select.model';
import { Injectable } from '@angular/core';
import { QuestionTextareaModel } from '../models/question-textarea.model';
import { QuestionCalendar } from '../models/question-calendar';
import { QuestionTextModel } from '../models/question-text.model';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuestionGroupModel } from '../models/question-group.model';
import { QuestionBaseModel, QuestionType } from '../models/question-base.model';
import { QuestionNumberModel } from '../models/question-number.model';

export type QuestionBase = QuestionBaseModel<string | number | Date>;
export type Question =
  | QuestionSelectModel
  | QuestionTextModel
  | QuestionCalendar
  | QuestionTextareaModel
  | QuestionNumberModel
  | QuestionGroupModel;

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  public getFieldControl(question): FormControl {
    return this.fb.control(this.setFieldControl(question));
  }

  private setFieldControl(question: QuestionBase) {
    const { value, validations } = question;
    return [value || '', validations];
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
      switch (question.controlType) {
        case QuestionType.TEXT:
          return new QuestionTextModel(question);
          break;
        case QuestionType.NUMBER:
          question = new QuestionNumberModel(question);
          break;
        case QuestionType.SELECT:
          question = new QuestionSelectModel(question);
          break;
        case QuestionType.TEXTAREA:
          question = new QuestionTextareaModel(question);
          break;
        case QuestionType.CALENDER:
          question = new QuestionCalendar(question);
          break;
      }

      return question;
    });
  }

  public setQuestion(
    controlType: QuestionType,
    options: { key: string; label: string; options?: SelectOption[] }
  ) {
    switch (controlType) {
      case QuestionType.TEXT:
        return new QuestionTextModel(options);

      case QuestionType.NUMBER:
        return new QuestionNumberModel(options);

      case QuestionType.SELECT:
        return new QuestionSelectModel(options);

      case QuestionType.TEXTAREA:
        return new QuestionTextareaModel(options);

      case QuestionType.CALENDER:
        return new QuestionCalendar(options);
      default:
        return new QuestionTextModel(options);
    }
  }
}
