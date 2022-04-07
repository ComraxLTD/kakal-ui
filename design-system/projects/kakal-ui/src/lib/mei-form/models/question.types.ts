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
  | 'time'

  | 'calendar'
  | 'radio'
  | 'date'
  | 'dateRange'
  | 'counter'
  | 'sum'
  | 'upload'
  | 'currency'
  | 'toggle'
  | 'email'
  | 'phone'
  | 'texteditor'

  | 'checkbox'
  | 'autocomplete'
  | 'select'

  | 'cleave';

export type Appearance = 'none' | MatFormFieldAppearance;

// export type InputTypes = { Appearance; ControlType; Cleave; GridProps };
