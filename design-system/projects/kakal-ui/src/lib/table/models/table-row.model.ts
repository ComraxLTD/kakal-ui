import { MatExpansionPanel } from '@angular/material/expansion';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { ActionState } from '../table-actions/table-actions.model';
import { TableEvent } from './table-event';

export class TableRowModel<T = any> {
  public item: T;
  public form: QuestionGroupModel<T>;
  public disabled: boolean;
  public editable: boolean;
  public expanded: boolean;
  public selectable: boolean;
  public panel?: MatExpansionPanel;
  public activeColumn: keyof T;
  public actionState: { [key: string]: ActionState };

  constructor(options?: {
    item?: T;
    disabled?: boolean;
    editable?: boolean;
    expanded?: boolean;
    selectable?: boolean;
    form?: QuestionGroupModel<T>;
    panel?: MatExpansionPanel;
    actionState?: { [key: string]: ActionState };
  }) {
    this.item = options?.item || null;
    this.disabled = options?.disabled || false;
    this.editable = options?.editable || false;
    this.selectable = options?.selectable || false;
    this.expanded = options?.expanded || false;
    this.panel = options?.panel || null;
    this.form = options?.form || null;
    this.actionState = {
      edit: { show: true, disabled: false, event: 'edit' } as ActionState,
      delete: { show: true, disabled: false, event: 'delete' } as ActionState,
      ...options.actionState,
    };
  }
}
