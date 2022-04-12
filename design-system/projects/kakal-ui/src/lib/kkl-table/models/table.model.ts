import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Palette } from '../../../styles/theme'
import { Appearance, ControlType } from '../../form/models/question.types'

import { RowActionModel } from './table-actions.model';

export abstract class TableBase {
  public key: string;
  public theme?: Palette;
  public label?: string;
  public placeHolder?: string;
  public value?: any | undefined;
  public appearance?: Appearance;
  public format?: { type: string; args?: any };
  public selector?: string;
  public controlType?: ControlType;
  public icon?: string;
  public validations?: ValidatorFn[];
  public disabled?: boolean;
  public control?: AbstractControl | FormControl;
  public cleave?: {};

  public colIcon?: string;
  public group?: string;
  public button?: RowActionModel;
  public filter?: boolean;
  public templateName?: string;
  public editable?: boolean;

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
    icon?: string;
    validations?: ValidatorFn[];
    control?: AbstractControl | FormControl;
    cleave?: {};
    filter?: boolean;
    editable?: boolean;
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
    this.icon = options.icon || '';
    this.control = options.control || null;
    this.cleave = options.cleave || {};
    this.filter = options.filter === false? false : true;
    this.editable = options.editable === false? false : true;
  }
}
