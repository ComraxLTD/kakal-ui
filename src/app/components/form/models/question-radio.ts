import { ValidatorFn } from "@angular/forms";
import { GridProps, QuestionBaseModel, QuestionType } from "./question-base.model";
import { SelectOption } from "./question-select.model";

export class QuestionRadio extends QuestionBaseModel<string>{

  public options?: SelectOption[];

  constructor(options?: {
    key: string;
    label: string;
    gridProps?: GridProps
    icon?: string;
    validations?: ValidatorFn[],
    options?: SelectOption[]

  }
  ) {
    super(options)
    this.key = options.key
    this.label = options.label
    this.type = 'radio'
    this.controlType = QuestionType.RADIO
    this.gridProps = options.gridProps
    this.validations = options.validations
    this.options = options.options
  }

}
