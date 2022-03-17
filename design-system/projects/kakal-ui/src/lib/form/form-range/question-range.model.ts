import { QuestionBase } from '../models/question.model';
import { Question } from '../services/form.service';

export interface Range<T = any> {
  start?: T;
  end?: T;
}

export class QuestionRangeModel extends QuestionBase {
  public questions: Question[];

  constructor(options: {
    key: string;
    value?: Range<number> | null;
    questions: Question[];
  }) {
    super(options);
    this.key = options.key;
    this.controlType = 'range';
    this.value = options.value || null;
    this.questions = options.questions;
  }
}
