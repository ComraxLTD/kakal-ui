import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Palette } from '../../../styles/theme'
import { Appearance, ControlType } from '../../form/models/question.types'
import { KklSelectOption } from '../../mei-form/models/kkl-select.model';

import { RowActionModel } from './table-actions.model';

export interface TableBase {
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
  //for autocomplete
  panelWidth?: boolean;

  queryChanged?: Function;
  selectChanged?: Function;
  openedChange?: Function;
  valueChanged?: Function;
  focusChanged?: Function;


  colIcon?: string;
  group?: string;
  button?: RowActionModel;
  noFilter?: boolean;
  templateName?: string;
  notEditable?: boolean;

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
  //   icon?: string;
  //   validations?: ValidatorFn[];
  //   filter?: boolean;
  //   editable?: boolean;
  // }) {
  //   this.key = options.key || '';
  //   this.value = options.value;
  //   this.label = options.label || '';
  //   this.placeHolder = options.placeHolder || '';
  //   this.appearance = options.appearance || 'outline';
  //   this.format = options.format;
  //   this.selector = options.selector;
  //   this.controlType = options.controlType || 'text';
  //   this.disabled = this.disabled || false;
  //   this.validations = options.validations || [];
  //   this.icon = options.icon || '';
  //   this.control = options.control || null;
  //   this.cleave = options.cleave || {};
  //   this.filter = options.filter === false? false : true;
  //   this.editable = options.editable === false? false : true;
  // }
}
