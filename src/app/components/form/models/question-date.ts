import { ValidatorFn } from '@angular/forms';
import { QuestionBaseModel, QuestionType, GridProps } from './question-base.model';

export class QuestionDate extends QuestionBaseModel<Date> {


  constructor(options: {
    key: string;
    label: string;
    gridProps?: GridProps
    icon?: string;
    validations?: ValidatorFn[]
  }
  ) {
    super(options)
    this.key = options.key
    this.label = options.label
    this.type = 'date';
    this.controlType = QuestionType.DATE;
    this.gridProps = options.gridProps
    this.icon = this.icon
    this.validations = options.validations
  }

}
