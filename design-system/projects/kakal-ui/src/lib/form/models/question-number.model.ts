import { ValidatorFn } from "@angular/forms";
import {  QuestionBase } from "./question.model";
import { InputGrid } from "./question.types";

export class QuestionNumberModel extends QuestionBase{
  constructor(options?: {
    key: string;
    label?: string;
    gridProps?: InputGrid
    icon?: string;
    validations?: ValidatorFn[]
  }
  ) {
    super(options)
    this.key = options.key
    this.label = options.label
    this.controlType = 'number'
    this.gridProps = options.gridProps
    this.validations = options.validations
  }

}
