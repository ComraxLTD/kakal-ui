import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Palette } from '../../../styles/theme';
import { FilterType } from '../../filters/filters.types';

import {
  Appearance,
  InputGrid,
  ControlType,
  FormGrid,
  ValidationMessage,
} from './question.types';

export abstract class QuestionBase {
  public key: string;
  public theme?: Palette;
  public label?: string;
  public placeHolder?: string;
  public value?: any | undefined;
  public appearance?: Appearance;
  public format?: { type: string; args?: any };
  public selector?: string;
  public controlType?: ControlType;
  public gridProps?: InputGrid | FormGrid;
  public icon?: string;
  public validations?: ValidatorFn[];
  public disabled?: boolean;
  public errors?: ValidationMessage | null;

  constructor(options: {
    key: string;
    value?: any;
    label?: string;
    placeHolder?: string;
    appearance?: Appearance;
    format?: { type: string; args?: any };
    selector?: string;
    controlType?: ControlType;
    disabled?: boolean;
    gridProps?: InputGrid;
    icon?: string;
    validations?: ValidatorFn[];
    control?: AbstractControl | FormControl;
    errors?: ValidationMessage | null;
  }) {
    this.key = options.key || '';
    this.value = options.value;
    this.label = options.label || '';
    this.placeHolder = options.placeHolder || '';
    this.appearance = options.appearance || 'outline';
    this.format = options.format;
    this.selector = options.selector;
    this.controlType = options.controlType || 'text';
    this.disabled = this.disabled || false;
    this.validations = options.validations || [];
    this.gridProps = options.gridProps || {
      cols: 1,
      rows: 1,
      offset: 0,
      fullWidth: false,
    };
    this.icon = options.icon || '';
    this.errors = options.errors || null;
  }
}
