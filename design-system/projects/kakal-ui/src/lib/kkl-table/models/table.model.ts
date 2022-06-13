import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Palette } from '../../../styles/theme';
import { Appearance, ControlType } from '../../mei-form/models/control.types';
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
   format?: { type: string; args?: any };
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
  cellTemplate?: string;
  notEditable?: boolean;

  sumFunc?: Function;


}
