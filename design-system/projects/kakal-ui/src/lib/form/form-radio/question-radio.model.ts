import { ValidatorFn } from '@angular/forms';
import {  QuestionBase } from '../models/question.model';
import { GridProps } from '../models/question.types';

export interface RadioOption {
  label: string;
  checked?: boolean;
}

export class QuestionRadioModel extends QuestionBase {
  public options?: RadioOption[];

  constructor(options?: {
    key: string;
    label?: string;
    gridProps?: GridProps;
    icon?: string;
    validations?: ValidatorFn[];
    options?: RadioOption[];
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.controlType = 'radio';
    this.gridProps = options.gridProps;
    this.validations = options.validations;
    this.options = options.options;
  }
}
