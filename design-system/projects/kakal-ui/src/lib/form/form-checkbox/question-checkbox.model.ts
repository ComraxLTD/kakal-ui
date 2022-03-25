import { QuestionBase } from '../models/question.model';

export interface CheckboxOption {
  label: string;
  checked?: boolean;
}

export class QuestionCheckboxModel extends QuestionBase {
  public labelPosition?: string;
  public group?: boolean;

  constructor(options?: {
    key: string;
    label?: string;
    value?: boolean;
    group?: boolean;
    labelPosition?: string;
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label;
    this.value = options.value;
    this.group = options.group || false;
    this.controlType = 'checkbox';
    this.labelPosition = options.labelPosition || 'after';
  }
}
