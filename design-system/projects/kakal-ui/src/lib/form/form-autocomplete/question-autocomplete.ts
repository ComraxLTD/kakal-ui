import { ValidatorFn } from '@angular/forms';
import {
  QuestionSelectModel,
  SelectOption,
} from '../form-select/question-select.model';
import { ControlType, InputGrid } from '../models/question.types';

export class QuestionAutocompleteModel extends QuestionSelectModel {
  public onOptionSelect?: Function;
  public panelWidth: boolean;
  public asButton: boolean;

  constructor(options?: {
    key: string;
    label?: string;
    controlType?: ControlType;
    validations?: ValidatorFn[];
    gridProps?: InputGrid;
    icon?: string;
    options?: SelectOption[];
    onOptionSelect?: Function;
    multi?: boolean;
    panelWidth?: boolean;
    asButton?: boolean;
    format?: { type: string; args?: any };
    cleave?: {};
  }) {
    super(options);
    this.controlType = options.controlType || 'autocomplete';
    this.options = options.options;
    this.icon = options.icon || 'search'
    this.multi = options.multi || false;
    this.asButton = options.asButton || false;
    this.panelWidth = options.panelWidth || false;
    this.onOptionSelect =
      options.onOptionSelect || (() => console.log('select'));
  }
}
