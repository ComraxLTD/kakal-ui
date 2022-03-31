import { Injectable } from '@angular/core';
import { FormActions } from '../../../form/models/form.actions';
import { TableActions, FetchActions } from '../../models/table-actions';
import { TableDataSource } from '../../models/table-datasource';
import { RowState, TableState } from '../../models/table.state';
import { deleteItem } from './table.helpers';

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor(private tableDataSource: TableDataSource) {}

  private setRowWithForm(options: {
    oldState: TableState;
    rowState: RowState;
    action: TableActions | FormActions | FetchActions;
  }): TableState {
    const { oldState, rowState, action } = options;
    const { item, key, group } = rowState;
    let { editing, pagination } = oldState;

    if (action === FormActions.CREATE) {
      editing = [];
    }

    editing.push(item[key]);

    const tableState = {
      ...oldState,
      pagination,
      editing,
      action: action,
      forms: {
        ...oldState.forms,
        [item[key]]: group,
      },
    } as TableState;
    return tableState;
  }

  public onCancelEvent(prop: {
    rowState: RowState;
    oldState: TableState;
  }): TableState {
    const { rowState, oldState } = prop;
    const { item, key } = rowState;
    const { editing } = oldState;

    const tableState = {
      ...oldState,
      editing: deleteItem({ array: editing, value: item[key] }),
      action: FormActions.CANCEL,
    } as TableState;

    return tableState;
  }

  public dispatch(options: { rowState: RowState; action: FormActions }) {
    const { rowState, action } = options;
    const oldState = this.tableDataSource.getTableState();

    switch (action) {
      case FormActions.EDIT:
        const editState = this.setRowWithForm({
          oldState,
          rowState,
          action: FormActions.EDIT,
        });
        this.tableDataSource.loadTableState({ tableState: editState });
        break;
      case FormActions.CREATE:
        const createState = this.setRowWithForm({
          oldState,
          rowState,
          action: FormActions.CREATE,
        });
        this.tableDataSource.loadTableState({ tableState: createState });
        break;
      case FormActions.CANCEL:
        const cancelState = this.onCancelEvent({ oldState, rowState });
        this.tableDataSource.loadTableState({ tableState: cancelState });
        break;
    }
  }
}
