import { QuestionBase } from '../models/question.model';

export interface CheckboxOption {
  id: number;
  label: string;
  value?: string;
  checked?: boolean;
}

export class QuestionCheckboxModel extends QuestionBase {
  public labelPosition?: string;
  public group?: boolean;

  constructor(options?: {
    key: string;
    value?: CheckboxOption | CheckboxOption[];
    labelPosition?: string;
  }) {
    super(options);
    this.key = options.key;
    this.value = options.value;
    this.controlType = 'checkbox';
    this.labelPosition = options.labelPosition || 'after';
  }
}
