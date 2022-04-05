import { ValidatorFn } from '@angular/forms';
import { QuestionBase } from '../models/question.model';
import { Appearance, ControlType, InputGrid } from '../models/question.types';

export interface SelectOption {
  label: string;
  value: any;
  selected?: boolean;
  disabled?: boolean;
}

export class QuestionSelectModel extends QuestionBase {
  public options?: SelectOption[];
  public multi?: boolean;

  constructor(options?: {
    key: string;
    label?: string;
    appearance?: Appearance;
    validations?: ValidatorFn[];
    controlType?: ControlType;
    gridProps?: InputGrid;
    options?: SelectOption[];
    icon?: string;
    multi?: boolean;
    value?: any;
  }) {
    super(options);
    this.controlType = 'select';
    this.options = options.options || [];
    this.icon = options.icon || 'keyboard_arrow_down';
    this.multi = options.multi || options.controlType === 'multiSelect';
    this.value = options.value;
  }
}
