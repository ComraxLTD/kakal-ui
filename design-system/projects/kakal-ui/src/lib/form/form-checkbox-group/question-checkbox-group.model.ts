import { QuestionCheckboxModel } from '../form-checkbox/question-checkbox.model';

export interface CheckboxOption {
  label: string;
  value: any;
  checked?: boolean;
}

export class QuestionCheckboxGroup extends QuestionCheckboxModel {
  public options: CheckboxOption[];

  constructor(options?: {
    key: string;
    options: CheckboxOption[];
    label?: string;
    value?: boolean;
    labelPosition?: string;
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.value = options.value;
    this.controlType = 'checkboxGroup';
    this.options = options.options || [];
    this.labelPosition = options.labelPosition || 'after';
  }
}
