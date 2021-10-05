import { ValidatorFn } from "@angular/forms";
import { GridProps, QuestionBaseModel, QuestionType } from "./question-base.model";

export class QuestionNumberModel extends QuestionBaseModel<number>{
  constructor(options?: {
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
    this.type = 'number'
    this.controlType = QuestionType.NUMBER
    this.gridProps = options.gridProps
    this.validations = options.validations
  }

}
