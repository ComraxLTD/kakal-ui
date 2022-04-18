import { ValidatorFn } from '@angular/forms';
import {
  QuestionBase,
} from './question.model';
import { ControlType, InputGrid } from './question.types';

export class QuestionTextModel extends QuestionBase {

  constructor(options?: {
    key: string;
    label?: string;
    value?: any;
    controlType?: ControlType;
    gridProps?: InputGrid;
    icon?: string;
    validations?: ValidatorFn[];
    disabled?: boolean;
    cleave?: {};
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.controlType = options.controlType;
    this.gridProps = options.gridProps || super.gridProps;
    this.icon = options.icon = '';
    this.validations = options.validations || [];
    this.disabled = options.disabled;
    this.cleave = options.cleave || {};
  }
}
