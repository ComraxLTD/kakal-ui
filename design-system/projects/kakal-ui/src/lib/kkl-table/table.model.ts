import { ValidatorFn } from '@angular/forms';
import { IconModel } from '../icon/icon.model'
import { GridProps } from '../form/models/question.types'
import { QuestionBase } from '../form/models/question.model'
import { SelectOption } from '../form/form-select/question-select.model'


export class QuestionTableModel extends QuestionBase{
  public options?: SelectOption[];
  public multi?: boolean;
  public colIcon?: IconModel;
  public group?: string;
  public button?: {
    icon: string;
  };
  public onSelectChange?: (value: any) => void;

  constructor(options?: {
    key: string,
    label: string,
    validations?: ValidatorFn[],
    gridProps?: GridProps
    options?: SelectOption[];
    icon?: string;
    multi?: boolean;
    onSelectChange?: (value: any) => void;
  }) {
    super(options)
    this.controlType = 'select'
    this.options = options.options || []
    this.icon = options.icon || 'keyboard_arrow_down'
    this.multi = options.multi || false
    this.onSelectChange = options.onSelectChange || (() => console.log('select'))
  }
}
