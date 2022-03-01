import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

import { filter, map, mapTo, tap } from 'rxjs/operators';
import { TableColumnModel } from '../../columns/column.model';
import { TableEvent } from '../models/table-event';
import { TableRowModel } from '../models/table-row.model';
import { merge, Observable, of } from 'rxjs';
import { ActionState, ActionStateRules } from './table-actions.model';
import { RowsState } from '../models/table.state';
import { TableDataSource } from '../models/table-datasource';

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
  @Input() index: number;
  @Input() item: any;
  @Input() column: TableColumnModel;
  @Input() dataSource: TableDataSource;
  @Input() actionStateRules: ActionStateRules;

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

  ngOnInit(): void {
    this.editState$ = this.setEditState();
    this.deleteState$ = this.setDeleteState();
  }

  private setEditStateOnDefault() {
    return this.dataSource.getTableStateByEvent(['default']).pipe(
      mapTo({
        show: this.actionStateRules?.showEdit(this.item),
        disabled: this.actionStateRules?.disableEdit(this.item),
      } as ActionState)
    );
  }

  private getEditTableStateByEvent(events: TableEvent[]) {
    return this.dataSource.getTableStateByEvent(events).pipe(
      map((tableState) => {
        return tableState.editing;
      })
    );
  }

  private setEditStateOnEdit() {
    return this.getEditTableStateByEvent(['edit']).pipe(
      filter((editing) => editing.indexOf(this.item.id) !== -1),
      map((editing) => editing.indexOf(this.item.id) !== -1),
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
    return this.getEditTableStateByEvent(['close']).pipe(
      map((editing) => editing.indexOf(this.item.id) !== -1),
      map((close: boolean) => {
        return {
          show: !close,
          disabled: this.actionStateRules?.disableEdit(this.item),
          event: 'edit',
        } as ActionState;
      })
    );
  }

  private setDeleteStateOnDefault() {
    return this.dataSource.getTableStateByEvent(['default', 'close']).pipe(
      mapTo({
        show: this.actionStateRules?.showDelete(this.item),
        disabled: this.actionStateRules?.disableDelete(this.item),
      } as ActionState)
    );
  }


  private setEditState() {
    const default$ = this.setEditStateOnDefault();
    const edit$ = this.setEditStateOnEdit();
    const close$ = this.setEditStateOnClose();
    return merge(default$, edit$, close$);
  }

  private setDeleteState(): Observable<ActionState> {
    const default$ = this.setDeleteStateOnDefault();
    const edit$ = this.setEditStateOnEdit();
    return merge(default$, edit$);
  }

  public onDelete() {
    this.delete.emit({ item: this.item, itemIndex: this.index });
  }

  public onEdit() {
    this.edit.emit({ item: this.item, itemIndex: this.index });
  }

  public onClose(event: TableEvent) {
    this.close.emit({
      item: this.item,
      column: this.column,
      event,
      itemIndex: this.index,
    });
  }

  public onSave(event: TableEvent) {
    this.save.emit({
      item: this.item,
      column: this.column,
      event,
      itemIndex: this.index,
    });
  }
}
