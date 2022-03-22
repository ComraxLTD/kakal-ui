import { QuestionBase } from '../models/question.model';

export class QuestionCounterModel extends QuestionBase {
  constructor(options: { key: string; value?: number; icon?: string }) {
    super(options);
    this.key = options.key;
    this.controlType = 'counter';
    this.value = options.value || null;
    this.icon = options.icon || 'medal';
  }
}
