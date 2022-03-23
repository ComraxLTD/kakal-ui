import { ValidatorFn } from '@angular/forms';
import { QuestionBase } from './question.model';
import { GridProps } from './question.types';


export class QuestionToggleModel extends QuestionBase {


  constructor(options?: {
    key: string;
    label?: string;
    gridProps?: GridProps;
    icon?: string;
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.controlType = 'toggle';
    this.gridProps = options.gridProps;
    this.validations = options.validations;
  }
}
