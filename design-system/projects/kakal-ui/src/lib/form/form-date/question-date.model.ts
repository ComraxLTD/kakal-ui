import { ValidatorFn } from '@angular/forms';
import { QuestionBaseModel, GridProps } from '../models/question.model';

export class QuestionDateModel extends QuestionBaseModel<Date> {
  public maxDate?: Date;
  public minDate?: Date;

  constructor(options: {
    key?: string;
    label?: string;
    gridProps?: GridProps;
    icon?: string;
    value?: Date;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    validations?: ValidatorFn[];
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.value = options.value || null;
    this.disabled = options.disabled;
    this.type = 'date';
    this.controlType = 'date';
    this.gridProps = options.gridProps;
    this.icon = this.icon;
    this.minDate = options.minDate;
    this.maxDate = options.maxDate;
    this.validations = options.validations || [];
  }
}
