import { FilterRange } from '../../filters/filters.types';
import { QuestionBase } from '../models/question.model';
import { Question } from '../services/form.service';

export class QuestionRangeModel extends QuestionBase {
  public questions: Question[];

  constructor(options: {
    key: string;
    value?: FilterRange<number>;
    questions: Question[];
  }) {
    super(options);
    this.key = options.key;
    this.controlType = 'range';
    this.value = options.value || { start: 0, end: 0 };
    this.questions = options.questions;
  }
}
