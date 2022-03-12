import { ValidatorFn } from '@angular/forms';
import { SelectOption } from '../models/question-select.model';
import { GridProps, QuestionBase } from '../models/question.model';
import { CurrencyModel } from './form-currency.model';

export interface CurrencyOptions {
  label: string;
  value: number;
}

export class QuestionCurrencyModel extends QuestionBase {
  // symbol of currency
  public default: CurrencyOptions;

  constructor(options: {
    key: string;
    label?: string;
    default?: CurrencyOptions;
    gridProps?: GridProps;
    value?: CurrencyModel;
    disabled?: boolean;
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.default = options.default || { label: '', value: 0 };
    this.type = 'currency';
    this.controlType = 'currency';
    this.gridProps = options.gridProps;
    this.value = options.value || { sum: 0, currency: this.default };
    this.validations = options.validations || [];
    this.disabled = options.disabled || false;
  }
}
