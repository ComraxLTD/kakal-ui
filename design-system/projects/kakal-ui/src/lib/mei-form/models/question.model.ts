import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Palette } from '../../../styles/theme';
import { Appearance, ControlType, InputGrid } from './question.types';
import { MeiSelectOption } from './select.model';
import { BehaviorSubject } from 'rxjs';

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
  public gridProps?: InputGrid;
  public icon?: string;
  public validations?: ValidatorFn[];
  public disabled?: boolean;
  public control?: AbstractControl | FormControl;
  public cleave?: {};
  public options?: MeiSelectOption[] |  BehaviorSubject<MeiSelectOption[]> | string;
  public multi?: boolean;
  public panelWidth?: boolean;
  public withButton?: boolean;
  public debounce?: number;

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
    options?: MeiSelectOption[] |  BehaviorSubject<MeiSelectOption[]> | string;
    validations?: ValidatorFn[];
    control?: AbstractControl | FormControl;
    cleave?: {};
    multi?: boolean;
    panelWidth?: boolean;
    withButton?: boolean;
    debounce?: number;
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
    this.options = options.options || [];
    this.gridProps = options.gridProps || {
      cols: 1,
      rows: 1,
      offset: 0,
      fullWidth: false,
    };
    this.icon = options.icon || '';
    this.control = options.control || null;
    this.cleave = options.cleave || {};
    this.multi = options.multi;
    this.panelWidth = options.panelWidth;
    this.withButton = options.withButton;
    this.debounce = options.debounce;
  }
}
