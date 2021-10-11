import { ValidatorFn } from '@angular/forms';

export interface GridProps {
  cols?: number;
  rows?: number;
  offset?: number;
  gutter?: number;
  fullWidth?: boolean;
}

export type ControlType =
  | 'text'
  | 'password'
  | 'number'
  | 'textarea'
  | 'select'
  | 'calender'
  | 'radio'
  | 'date'
  | 'group'
  | 'custom'
  | 'autocomplete';

export type QuestionType = 'default' | 'group' | 'custom';

export abstract class QuestionBaseModel<T> {
  public value?: T | undefined;
  public key: string;
  public label: string;
  public type?: QuestionType;
  public controlType?: ControlType;
  public gridProps?: GridProps;
  public icon?: string;
  public customRef?: string;
  public validations?: ValidatorFn[];
  public disabled?: boolean;
  constructor(options: {
    value?: T;
    key?: string;
    label?: string;
    type?: QuestionType;
    controlType?: ControlType;
    disabled?: boolean;
    gridProps?: GridProps;
    icon?: string;
    customRef?: string;
    validations?: ValidatorFn[];
  }) {
    this.key = options.key || '';
    this.value = options.value;
    this.label = options.label || '';
    this.type = options.type || 'default';
    this.controlType = options.controlType || 'text';
    this.disabled = this.disabled || false;
    this.validations = options.validations || [];
    this.gridProps = options.gridProps || {
      cols: 1,
      rows: 1,
      gutter: 0,
      offset: 0,
      fullWidth: false,
    };
    this.icon = options.icon || '';
    this.customRef = options.customRef || '';
  }
}
