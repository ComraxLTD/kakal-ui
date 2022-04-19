import { MatFormFieldAppearance } from '@angular/material/form-field';

export interface FormGrid {
  variant?: 'flex' | 'grid';
  layout?: 'column' | 'row';
  cols?: number;
  rows?: number;
  rowHeight?: number;
  gutter?: number;
  button?: ButtonGrid;
}

export interface ButtonGrid {
  label?: string;
  cols?: number;
  skip?: number;
  align?: 'start' | 'center' | 'end';
}

export interface InputGrid {
  cols?: number;
  rows?: number;
  offset?: number | 'none';
  skip?: number;
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
  | 'select'
  | 'multiSelect'
  | 'calendar'
  | 'checkbox'
  | 'checkboxGroup'
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
  | 'autocomplete'
  | 'toggle'
  | 'email'
  | 'phone'
  | 'group'
  | 'texteditor'
  | 'cleave';

export type Appearance = 'none' | MatFormFieldAppearance;

export declare type ValidationMessage = {
  [key: string]: (errors?, placeHolder?) => string;
};

// export type InputTypes = { Appearance; ControlType; Cleave; InputGrid };
