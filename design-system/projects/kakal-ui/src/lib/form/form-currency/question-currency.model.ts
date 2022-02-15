import { ValidatorFn } from '@angular/forms';
import { GridProps, QuestionBaseModel } from '../models/question.model';
import { CurrencyModel } from './form-currency.model';

export class QuestionCurrencyModel extends QuestionBaseModel<CurrencyModel> {
  // symbol of currency
  public default: string;

  constructor(options: {
    key?: string;
    label?: string;
    default?: string;
    gridProps?: GridProps;
    value?: CurrencyModel;
    disabled?: boolean;
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.default = options.default || '₪';
    this.type = 'currency';
    this.controlType = 'currency';
    this.gridProps = options.gridProps;
    this.value = options.value || { sum: 0, currency: this.default };
    this.validations = options.validations || [];
    this.disabled = options.disabled || false;
  }
}
