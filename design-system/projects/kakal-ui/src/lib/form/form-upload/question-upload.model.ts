import { ValidatorFn } from '@angular/forms';
import { QuestionBase } from '../models/question.model';
import { InputGrid } from '../models/question.types';

export class QuestionUploadModel extends QuestionBase {
  public multi?: boolean;
  public onDeleteFile?: (value: any) => void;

  constructor(options?: {
    key: string;
    label?: string;
    value?: File[];
    gridProps?: InputGrid;
    icon?: string;
    validations?: ValidatorFn[];
    disabled?: boolean;
    multi?: boolean;
    onDeleteFile?: (value: any) => void;
  }) {
    super(options);
    this.key = options.key;
    this.label = options.label || 'העלה מסמך';
    this.value = options.value || [];
    this.controlType = 'upload';
    this.gridProps = options.gridProps || super.gridProps;
    this.icon = options.icon;
    this.validations = options.validations || [];
    this.disabled = options.disabled || false;
    this.multi = options.multi || false;
    this.onDeleteFile = options.onDeleteFile || null;
  }
}
