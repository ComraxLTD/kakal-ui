import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

import { TableColumnModel } from '../../columns/models/column.model';
import { TableEvent } from '../models/table-event';
import { ActionState, ActionStateRules } from './table-actions.model';
import { RowsState, TableState } from '../models/table.state';
import { TableDataSource } from '../models/table-datasource';

import { filter, map, mapTo } from 'rxjs/operators';
import { merge, Observable } from 'rxjs';

export interface ButtonActionState {
  edit?: ActionState;
  delete?: ActionState;
}

@Component({
  selector: 'kkl-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.scss'],
})
export class TableActionsComponent implements OnInit {
  @Input() rowState: RowsState;
  @Input() dataSource: TableDataSource;
  @Input() tableState: TableState;
  @Input() actionStateRules: ActionStateRules;

  @Input() hasEdit: boolean;
  @Input() hasDelete: boolean;

  // custom button slot
  @Input() public startSlot: TemplateRef<any>;
  @Input() public endSlot: TemplateRef<any>;

  @Output() edit: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() delete: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() close: EventEmitter<RowsState> = new EventEmitter<RowsState>();
  @Output() save: EventEmitter<RowsState> = new EventEmitter<RowsState>();

  public editState$: Observable<ActionState>;
  public deleteState$: Observable<ActionState>;

  constructor() {}

  private validate() {
    if (!this.dataSource) {
      throw new Error('TableDataSource instance is required');
    }
  }

  ngOnInit(): void {
    this.validate();

    this.editState$ = this.setEditState();
    this.deleteState$ = this.setDeleteState();
  }

  private setEditStateOnDefault() {
    return this.dataSource.getTableStateByEvent(['default']).pipe(
      mapTo({
        show:
          this.actionStateRules?.showEdit(this.rowState.item) || this.hasEdit,
        disabled: this.actionStateRules?.disableEdit(this.rowState.item),
      } as ActionState)
    );
  }

  private getEditingTableStateByEvent(events: TableEvent[]) {
    return this.dataSource.getTableStateByEvent(events).pipe(
      map((tableState) => {
        // console.log(tableState.editing)
        return tableState.editing;
      })
    );
  }

  private setEditStateOnEdit() {
    const prop = this.rowState.item[this.rowState.key];

    return this.getEditingTableStateByEvent(['edit']).pipe(
      filter((editing) => editing.indexOf(prop) !== -1),
      map((editing) => editing.indexOf(prop) !== -1),
      map((editing: boolean) => {
        return {
          show: !editing,
          disabled: editing,
          event: 'edit',
        } as ActionState;
      })
    );
  }
  private setEditStateOnClose() {
    const id = this.rowState.item[this.rowState.key];
    return this.getEditingTableStateByEvent(['close']).pipe(
      map((editing) => editing.indexOf(id) !== -1),

      map((close: boolean) => {

        // console.log('close edit')
        return {
          show: !close,
          disabled: this.actionStateRules?.disableEdit(this.rowState.item),
          event: 'edit',
        } as ActionState;
      })
    );
  }
  private setDeleteSateOnClose() {
    const id = this.rowState.item[this.rowState.key];
    return this.getEditingTableStateByEvent(['close']).pipe(
      map((editing) => editing.indexOf(id) !== -1),
      map((close: boolean) => {
        // console.log('delete close')
        return {
          show: !close,
          disabled: this.actionStateRules?.disableEdit(this.rowState.item),
          event: 'delete',
        } as ActionState;
      })
    );
  }

  private setDeleteStateOnDefault() {
    return this.dataSource.getTableStateByEvent(['default']).pipe(
      mapTo({
        show:
          this.actionStateRules?.showDelete(this.rowState.item) ||
          this.hasDelete,
        disabled: this.actionStateRules?.disableDelete(this.rowState.item),
      } as ActionState)
    );
  }

  private setEditState() {
    const default$ = this.setEditStateOnDefault();
    const edit$ = this.setEditStateOnEdit();
    const close$ = this.setEditStateOnClose();
    return this.hasEdit ? merge(default$, edit$, close$) : null;
  }

  private setDeleteState(): Observable<ActionState> {
    const default$ = this.setDeleteStateOnDefault();
    const edit$ = this.setEditStateOnEdit();
    const close$ = this.setDeleteSateOnClose();
    return merge(default$, edit$, close$);
  }

  public onDelete() {
    this.delete.emit({ ...this.rowState });
  }

  public onEdit() {
    this.edit.emit({ ...this.rowState });
  }

  public onClose(event: TableEvent) {
    this.close.emit({
      ...this.rowState,
      event,
    });
  }

  public onSave(event: TableEvent) {
    this.save.emit({
      ...this.rowState,
      event,
    });
  }
}
