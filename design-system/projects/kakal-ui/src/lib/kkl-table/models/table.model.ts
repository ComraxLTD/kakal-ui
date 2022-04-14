import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Palette } from '../../../styles/theme'
import { Appearance, ControlType } from '../../form/models/question.types'
import { KklSelectOption } from '../../mei-form/models/kkl-select.model';

import { RowActionModel } from './table-actions.model';

export abstract class TableBase {
  public key: string;
  public label?: string;
  public placeHolder?: string;
  public value?: any | undefined;
  public controlType?: ControlType;

  //for use in form creation
  public validations?: ValidatorFn[];
  public disabled?: boolean;

  // only for datepicker
  public maxDate?: Date;
  public minDate?: Date;

  //for select and autocomplete
  public options?: KklSelectOption[] |  BehaviorSubject<KklSelectOption[]> | string;
  //for input and autocomplete
  public debounce?: number;
  //for input
  public format?: string;
  //for input and autocomplete
  public icon?: string;
  //for select and autocomplete
  public multi?: boolean;
  //for autocomplete
  public withButton?: boolean;

  public theme?: Palette;
  public appearance?: Appearance = 'outline';
  //for autocomplete
  public panelWidth?: boolean;

  public queryChanged?: Function;
  public selectChanged?: Function;
  public openedChange?: Function;
  public valueChanged?: Function;
  public focusChanged?: Function;


  public colIcon?: string;
  public group?: string;
  public button?: RowActionModel;
  public filter?: boolean;
  public templateName?: string;
  public editable?: boolean;

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
