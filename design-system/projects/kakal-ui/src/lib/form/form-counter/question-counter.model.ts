import { QuestionBase } from '../models/question.model';


export class QuestionCounterModel extends QuestionBase {

  constructor(options: {
    key: string;
    value? : number
  }) {
    super(options);
    this.key = options.key;
    this.controlType = 'counter';
    this.value = options.value || null;
  }
}
