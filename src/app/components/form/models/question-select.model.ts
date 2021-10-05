import { ValidatorFn } from '@angular/forms';
import { GridProps, QuestionBaseModel, QuestionType } from "./question-base.model";

export interface SelectOption {
  label: string;
  value: any;
}

export class QuestionSelectModel extends QuestionBaseModel<string>{

  public options?: SelectOption[];
  public onSelectChange?: Function

  constructor(options?: {

    key: string,
    label: string,
    validations?: ValidatorFn[],
    gridProps?: GridProps
    icon?: string;
    options?: SelectOption[]
    onSelectChange?: Function
  }) {
    super(options)
    this.type = 'select'
    this.controlType = QuestionType.SELECT
    this.options = options.options || []
    this.icon = this.icon || 'select'
    this.onSelectChange = options.onSelectChange || (() => console.log('select'))
  }
}
