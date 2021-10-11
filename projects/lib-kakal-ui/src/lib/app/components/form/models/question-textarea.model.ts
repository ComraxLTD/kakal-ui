import { ValidatorFn } from "@angular/forms";
import { GridProps, QuestionBaseModel } from "./question-base.model";

export class QuestionTextareaModel extends QuestionBaseModel<string>{


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
    this.type = 'textarea'
    this.controlType = 'textarea'
    this.label = options.label
    this.gridProps = options.gridProps
    this.icon = options.icon
    this.validations = options.validations
  }

}
