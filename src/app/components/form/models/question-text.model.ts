import { ValidatorFn } from '@angular/forms';
import { GridProps, QuestionBaseModel, QuestionType } from './question-base.model';

export class QuestionTextModel extends QuestionBaseModel<string> {

  constructor(options?: {
    key: string;
    label: string;
    type?: string;
    gridProps?: GridProps
    icon?: string;
    validations?: ValidatorFn[]
  }
  ) {
    super(options)
    this.key = options.key
    this.label = options.label
    this.type = options.type
    this.gridProps = options.gridProps || super.gridProps
    this.icon = options.icon
    this.controlType = QuestionType.TEXT
    this.validations = options.validations
  }


}
