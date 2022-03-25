import { CheckboxOption, QuestionCheckboxModel } from '../form-checkbox/question-checkbox.model';



export class QuestionCheckboxGroup extends QuestionCheckboxModel {
  public label?: string;

  constructor(options?: {
    key: string;
    label?: string;
    value?: CheckboxOption | CheckboxOption[];
    labelPosition?: string;
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.value = options.value;
    this.controlType = 'checkboxGroup';
    this.labelPosition = options.labelPosition || 'after';
  }
}
