import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';
import { Palette } from '../../../styles/theme';
import { FilterType } from '../../filters/filters.types';

export interface GridProps {
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

export interface Clave {
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

// export type QuestionType =
//   | 'default'
//   | 'group'
//   | 'upload'
//   | 'select'
//   | 'custom'
//   | 'date'
//   | 'dateRange'
//   | 'checkbox'
//   | 'radio'
//   | 'textEditor'
//   | 'currency';

export type Appearance = 'none' | MatFormFieldAppearance;

export abstract class QuestionBase {
  public key: string;
  public theme?: Palette;
  public label?: string;
  public placeHolder?: string;
  public value?: any | undefined;
  public appearance?: Appearance;
  // public type?: QuestionType;
  public format?: { type: string; args?: any };
  public selector?: string;
  public controlType?: ControlType;
  public gridProps?: GridProps;
  public icon?: string;
  public validations?: ValidatorFn[];
  public disabled?: boolean;
  public control?: AbstractControl | FormControl;
  public cleave?: {};
  public localFilter?: boolean;
  public filterType?: FilterType;

  constructor(options: {
    key: string;
    value?: any;
    label?: string;
    placeHolder?: string;
    appearance?: Appearance;
    // type?: QuestionType;
    format?: { type: string; args?: any };
    selector?: string;
    controlType?: ControlType;
    disabled?: boolean;
    gridProps?: GridProps;
    icon?: string;
    validations?: ValidatorFn[];
    control?: AbstractControl | FormControl;
    cleave?: {};
    localFilter?: boolean;
    filterType?: FilterType;
  }) {
    this.key = options.key || '';
    this.value = options.value;
    this.label = options.label || '';
    this.placeHolder = options.placeHolder || '';
    this.appearance = options.appearance || 'outline';
    // this.type = options.type || 'default';
    this.format = options.format;
    this.selector = options.selector;
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
    this.control = options.control || null;
    this.cleave = options.cleave || {};
    this.localFilter = options.localFilter;
    this.filterType = options.filterType || FilterType.SEARCH;
  }
}
