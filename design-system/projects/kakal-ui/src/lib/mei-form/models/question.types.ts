import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface GridProps {
  variant?: 'flex' | 'grid';
  layout?: 'column' | 'row';
  cols?: number;
  rows?: number;
  offset?: number;
  gutter?: number;
  buttonCols?: number;
  fullWidth?: boolean;
  flex?: {
    width?: number;
    align?: string;
  };
}

export interface Cleave {
  numeral: boolean;
  creditCard: boolean;
  phone: boolean;
  prefix: boolean;
  time: boolean;
}

export type ControlType =
  | 'text'
  | 'password'
  | 'number'
  | 'textarea'
  | 'calendar'
  | 'radio'
  | 'date'
  | 'dateRange'
  | 'time'
  | 'range'
  | 'counter'
  | 'group'
  | 'custom'
  | 'sum'
  | 'upload'
  | 'currency'
  | 'toggle'
  | 'email'
  | 'phone'
  | 'group'
  | 'texteditor'
  | 'cleave'

  | 'checkbox'
  | 'autocomplete'
  | 'select';

export type Appearance = 'none' | MatFormFieldAppearance;

// export type InputTypes = { Appearance; ControlType; Cleave; GridProps };
