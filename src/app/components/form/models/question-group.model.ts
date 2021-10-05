import { FormGroup } from '@angular/forms';
import { Question } from '../services/form.service';
import { QuestionType, GridProps } from './question-base.model';

export enum GroupType {
  DEFUALT = "defulat",
  GROUP = "group",
  CUSTOME = "custom",
}

export class QuestionGroupModel {

  public key: string;
  public label: string;
  public type?: GroupType;
  public controlType?: QuestionType;
  public formGroup? : FormGroup
  public questions?: Question[];
  public gridProps : GridProps
  public hasButton?: boolean;

  constructor(
    options?: {
      key: string,
      label?: string,
      type?: GroupType,
      questions: Question[],
      formGroup? : FormGroup,
      gridProps?: GridProps
      hasButton?: boolean
    }
  ) {

    this.key = options.key;
    this.label = options.label;
    this.type = options.type || GroupType.DEFUALT;
    this.controlType = QuestionType.GROUP;
    this.questions = options.questions;
    this.formGroup = options.formGroup
    this.gridProps = options.gridProps
    this.hasButton = options.hasButton;
  }


}
