import { MatExpansionPanel } from '@angular/material/expansion';
import { QuestionGroupModel } from '../../form/models/question-group.model';

export class TableRowModel<T> {
  public item: T;
  public form: QuestionGroupModel<T>;
  public disabled: boolean;
  public editable: boolean;
  public expanded: boolean;
  public selectable: boolean;
  public panel?: MatExpansionPanel;
  public activeColumn: keyof T;

  constructor(options?: {
    item?: T;
    disabled?: boolean;
    editable?: boolean;
    expanded?: boolean;
    selectable?: boolean;
    panel?: MatExpansionPanel;
    questionsGroup?: {};
  }) {
    this.item = options?.item || null;
    this.disabled = options?.disabled || false;
    this.editable = options?.editable || false;
    this.selectable = options?.selectable || false;
    this.expanded = options?.expanded || false;
    this.panel = options?.panel || null;
  }
}
