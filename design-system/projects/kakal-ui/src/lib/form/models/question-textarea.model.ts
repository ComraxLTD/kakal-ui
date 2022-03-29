import { ValidatorFn } from '@angular/forms';
import {  QuestionBase } from './question.model';
import { InputGrid } from './question.types';

export class QuestionTextareaModel extends QuestionBase {
  constructor(options: {
    key: string;
    label?: string;
    gridProps?: InputGrid;
    icon?: string;
    validations?: ValidatorFn[];
    disabled?: boolean;
  }) {
    super(options);
    this.key = options.key;
    this.controlType = 'textarea';
    this.label = options.label;
    this.gridProps = options.gridProps;
    this.icon = options.icon;
    this.validations = options.validations;
    this.disabled = options.disabled;
  }
}
