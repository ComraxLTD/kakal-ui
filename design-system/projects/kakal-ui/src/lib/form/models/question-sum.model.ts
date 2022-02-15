import { ValidatorFn } from '@angular/forms';
import { QuestionTextModel } from './question-text.model';
import { GridProps } from './question.model';

export class QuestionSumModel extends QuestionTextModel {
  constructor(options: {
    key?: string;
    label?: string;
    gridProps?: GridProps;
    icon?: string;
    value?: any;
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.value = options.value;
    this.controlType = 'cleave';
    this.cleave = { numeral: true };
    this.gridProps = options.gridProps;
    this.icon = this.icon;
    this.validations = options.validations;
  }
}
