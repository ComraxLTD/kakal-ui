import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Palette } from '../../../styles/theme';
import { Appearance, ControlType, GridProps } from './question.types';
import { MeiSelectOption } from './select.model';

export abstract class QuestionBase {
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
  public options?: MeiSelectOption[] |  BehaviorSubject<MeiSelectOption[]> | string;
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
  public appearance?: Appearance;
  public gridProps?: GridProps;
  //for autocomplete
  public panelWidth?: boolean;






  constructor(options: {
    key: string;
    value?: any;
    label?: string;
    placeHolder?: string;
    appearance?: Appearance;
    format?: string;
    selector?: string;
    controlType?: ControlType;
    disabled?: boolean;
    gridProps?: GridProps;
    icon?: string;
    options?: MeiSelectOption[] |  BehaviorSubject<MeiSelectOption[]> | string;
    validations?: ValidatorFn[];
    multi?: boolean;
    panelWidth?: boolean;
    withButton?: boolean;
    debounce?: number;
    maxDate?: Date;
    minDate?: Date;
  }) {
    this.key = options.key || '';
    this.value = options.value;
    this.label = options.label || '';
    this.placeHolder = options.placeHolder || '';
    this.appearance = options.appearance || 'outline';
    this.format = options.format;
    this.controlType = options.controlType || 'text';
    this.disabled = this.disabled || false;
    this.validations = options.validations || [];
    this.options = options.options || [];
    this.gridProps = options.gridProps || {
      cols: 1,
      rows: 1,
      offset: 0,
      fullWidth: false,
    };
    this.icon = options.icon || '';
    this.multi = options.multi;
    this.panelWidth = options.panelWidth;
    this.withButton = options.withButton;
    this.debounce = options.debounce;
    this.minDate = options.minDate;
    this.maxDate = options.maxDate;
  }
}
