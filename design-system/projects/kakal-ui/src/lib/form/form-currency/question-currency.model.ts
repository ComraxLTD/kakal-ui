import { ValidatorFn } from '@angular/forms';
import {
  QuestionSelectModel,
  SelectOption,
} from '../form-select/question-select.model';
import { GridProps } from '../models/question.types';

export interface Currency {
  currency?: SelectOption;
  sum?: string | number;
}

export class QuestionCurrencyModel extends QuestionSelectModel {
  // symbol of currency
  public default: SelectOption;

  constructor(options: {
    key: string;
    label?: string;
    default?: SelectOption;
    gridProps?: GridProps;
    value?: Currency;
    disabled?: boolean;
    options?: SelectOption[];
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.value = options.value || null;
    this.options = options.options;
    this.default = options.default || null;
    this.controlType = 'currency';
    this.gridProps = options.gridProps;
    this.validations = options.validations || [];
    this.disabled = options.disabled || false;
  }
}
