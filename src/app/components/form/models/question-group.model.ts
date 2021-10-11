import { FormGroup } from '@angular/forms';
import { Question } from '../services/form.service';
import { ControlType, GridProps } from './question.model';

export type GroupType = 'default' | 'group' | 'custom';

export class QuestionGroupModel {
  public key: string;
  public label: string;
  public type?: GroupType;
  public controlType?: ControlType;
  public formGroup?: FormGroup;
  public questions: Question[];
  public gridProps?: GridProps;
  public hasButton?: boolean;

  constructor(options?: {
    key: string;
    label?: string;
    type?: GroupType;
    questions: Question[];
    formGroup?: FormGroup;
    gridProps?: GridProps;
    hasButton?: boolean;
  }) {
    this.key = options.key;
    this.label = options.label;
    this.type = options.type || 'default';
    this.controlType = 'group';
    this.questions = options.questions;
    this.formGroup = options.formGroup;
    this.gridProps = options.gridProps;
    this.hasButton = options.hasButton;
  }
}
