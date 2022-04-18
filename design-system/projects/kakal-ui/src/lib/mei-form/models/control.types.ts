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


export type ControlType =
  | 'text'
  | 'password'
  | 'number'
  | 'textarea'
  | 'time'
  | 'email'
  | 'phone'
  | 'sum'
  | 'format'
  | 'date'
  | 'dateRange'
  | 'autocomplete'
  | 'select'
  | 'counter'
  | 'radio'
  | 'toggle'
  | 'checkbox'
  | 'currency'
  | 'texteditor'
  | 'range'
  | 'costum'


  | 'upload';

export type Appearance = 'none' | MatFormFieldAppearance;

// export type InputTypes = { Appearance; ControlType; Cleave; GridProps };
