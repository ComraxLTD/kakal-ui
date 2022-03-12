import { ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { Appearance, GridProps, QuestionBase } from './question.model';

export interface SelectOption {
  label: string;
  value: any;
  selected?: boolean;
  disabled?: boolean;
}

export class QuestionSelectModel extends QuestionBase {
  public options?: SelectOption[];
  public multi?: boolean;
  public onSelectChange?: (value: any) => void;
  public getOptionsAsync?: () => Observable<SelectOption[]>;

  constructor(options?: {
    key: string;
    label?: string;
    appearance?: Appearance;
    validations?: ValidatorFn[];
    gridProps?: GridProps;
    options?: SelectOption[];
    icon?: string;
    multi?: boolean;
    value?: any;
    onSelectChange?: (value: any) => void;
    getOptionsAsync?: () => Observable<SelectOption[]>;
  }) {
    super(options);
    this.controlType = 'select';
    this.options = options.options || [];
    this.icon = options.icon || 'keyboard_arrow_down';
    this.multi = options.multi || false;
    this.value = options.value;
    this.onSelectChange = options.onSelectChange || null;
    this.getOptionsAsync = options.getOptionsAsync || null;
  }
}
