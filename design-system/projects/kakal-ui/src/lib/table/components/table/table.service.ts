import { Injectable } from '@angular/core';
import { FormActions } from '../../../form/models/form.actions';
import { TableActions, FetchActions } from '../../models/table-actions';
import { TableDataSource } from '../../models/table-datasource';
import { RowState, TableState } from '../../models/table.state';

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor() {}

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

  private onEditEvent(options: {
    rowState: RowState;
    oldState: TableState;
  }): TableState {
    const { oldState, rowState } = options;
    const tableState = this.setRowWithForm({
      oldState,
      rowState,
      action: FormActions.EDIT,
    });

    return tableState;
  }

  public dispatchEdit(options: {
    tableDataSource: TableDataSource;
    rowState: RowState;
  }) {
    const { tableDataSource, rowState } = options;
    const oldState = tableDataSource.getTableState();
    const editState = this.onEditEvent({ oldState, rowState });
    tableDataSource.loadTableState({ tableState: editState });
  }
}
