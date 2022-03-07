import { ValidatorFn } from '@angular/forms';
import { QuestionBase, GridProps } from '../models/question.model';

export class QuestionDateModel extends QuestionBase {
  public maxDate?: Date;
  public minDate?: Date;
  public range?:boolean;
  constructor(options: {
    key: string;
    label?: string;
    gridProps?: GridProps;
    icon?: string;
    value?: Date;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    validations?: ValidatorFn[];
    range?:boolean;
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
    this.range = options.range || false;
  }
}
