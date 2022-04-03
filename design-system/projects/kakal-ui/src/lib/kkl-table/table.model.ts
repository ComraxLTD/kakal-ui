import { AbstractControl, FormControl, ValidatorFn } from '@angular/forms';
import { Palette } from '../../styles/theme'
import { Appearance, ControlType } from '../form/models/question.types'
import { FilterType } from '../filters/filters.types';

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
  public localFilter?: boolean;
  public filterType?: FilterType;

  public colIcon?: string;
  public group?: string;
  public button?: RowActionModel;
  public templateName?: string;

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
    localFilter?: boolean;
    filterType?: FilterType;
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
    this.localFilter = options.localFilter;
    this.filterType = options.filterType || FilterType.SEARCH;
  }
}
