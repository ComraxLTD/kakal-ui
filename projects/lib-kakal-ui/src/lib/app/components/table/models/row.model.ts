import { FormGroup } from '@angular/forms';
import { Question } from '../../form/services/form.service';
import { ActionState } from './action-state.model';

export interface RowState {
  pending: boolean;
  editable: boolean;
  expanded: boolean;
  data : any
}

export class RowModel<T> {
  public item: T;
  public formGroup: FormGroup;
  public pending: boolean;
  public editable: boolean;
  public expanded: boolean;
  public questionsGroup: { [x: string]: Question };
  public state?: ActionState<RowState>;

  constructor(options?: {
    item?: T;
    pending?: boolean;
    editable?: boolean;
    expanded?: boolean;
    questionsGroup?: {};
    state?: {};
  }) {
    this.item = options?.item;
    this.pending = options?.pending || false;
    this.editable = options?.editable || false;
    this.expanded = options?.expanded || false;
    this.questionsGroup = options?.questionsGroup || {};
  }
}
