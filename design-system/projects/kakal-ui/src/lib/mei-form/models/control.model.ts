import { ValidatorFn } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Palette } from '../../../styles/theme';
import { Appearance, ControlType, GridProps } from './control.types';
import { KklSelectOption } from './kkl-select.model';

export interface ControlBase {
  key: string;
  label?: string;
  placeHolder?: string;
  value?: any | undefined;
  controlType?: ControlType;

  //for use in form creation
  validations?: ValidatorFn[];
  disabled?: boolean;

  // only for datepicker
  maxDate?: Date;
  minDate?: Date;

  //for select and autocomplete
  options?: KklSelectOption[] |  BehaviorSubject<KklSelectOption[]> | string;
  //for input and autocomplete
  debounce?: number;
  //for input
  format?: string;
  //for input and autocomplete
  icon?: string;
  //for select and autocomplete
  multi?: boolean;
  //for autocomplete
  withButton?: boolean;

  theme?: Palette;
  appearance?: Appearance;
  gridProps?: GridProps;
  //for autocomplete
  panelWidth?: boolean;

  queryChanged?: Function;
  selectChanged?: Function;
  openedChange?: Function;
  valueChanged?: Function;
  focusChanged?: Function;




  // constructor(options: {
  //   key: string;
  //   value?: any;
  //   label?: string;
  //   placeHolder?: string;
  //   appearance?: Appearance;
  //   format?: string;
  //   selector?: string;
  //   controlType?: ControlType;
  //   disabled?: boolean;
  //   gridProps?: GridProps;
  //   icon?: string;
  //   options?: KklSelectOption[] |  BehaviorSubject<KklSelectOption[]> | string;
  //   validations?: ValidatorFn[];
  //   multi?: boolean;
  //   panelWidth?: boolean;
  //   withButton?: boolean;
  //   debounce?: number;
  //   maxDate?: Date;
  //   minDate?: Date;
  // }) {
  //   this.key = options.key || '';
  //   this.value = options.value;
  //   this.label = options.label || '';
  //   this.placeHolder = options.placeHolder || '';
  //   this.appearance = options.appearance || 'outline';
  //   this.format = options.format;
  //   this.controlType = options.controlType || 'text';
  //   this.disabled = this.disabled || false;
  //   this.validations = options.validations || [];
  //   this.options = options.options || [];
  //   this.gridProps = options.gridProps || {
  //     cols: 1,
  //     rows: 1,
  //     offset: 0,
  //     fullWidth: false,
  //   };
  //   this.icon = options.icon || '';
  //   this.multi = options.multi;
  //   this.panelWidth = options.panelWidth;
  //   this.withButton = options.withButton;
  //   this.debounce = options.debounce;
  //   this.minDate = options.minDate;
  //   this.maxDate = options.maxDate;

  // }
}
