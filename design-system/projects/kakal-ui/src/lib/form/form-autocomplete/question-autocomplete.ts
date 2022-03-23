import { ValidatorFn } from '@angular/forms';
import {
  QuestionSelectModel,
  SelectOption,
} from '../form-select/question-select.model';
import { ControlType, GridProps } from '../models/question.types';

export class QuestionAutocompleteModel extends QuestionSelectModel {
  public onOptionSelect?: Function;
  public panelWidth: boolean;

  constructor(options?: {
    key: string;
    label?: string;
    controlType?: ControlType;
    validations?: ValidatorFn[];
    gridProps?: GridProps;
    icon?: string;
    options?: SelectOption[];
    onOptionSelect?: Function;
    multi?: boolean;
    panelWidth?: boolean;
    format?: { type: string; args?: any };
    cleave?: {};
  }) {
    super(options);
    this.controlType = options.controlType || 'autocomplete';
    this.options = options.options;
    this.multi = options.multi || false;
    this.panelWidth = options.panelWidth || false;
    this.onOptionSelect =
      options.onOptionSelect || (() => console.log('select'));
  }
}
