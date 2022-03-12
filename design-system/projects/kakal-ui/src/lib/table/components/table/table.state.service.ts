import { Injectable } from '@angular/core';
import { deleteItem } from './table.helpers';
import { FormActions } from '../../../form/models/form.actions';
import { TableDataSource } from '../../models/table-datasource';
import { RowState, TableState } from '../../models/table.state';
import { FetchActions, TableActions } from '../../models/table-actions';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableStateService {
  constructor() {}

  private setRowWithForm(options: {
    oldState: TableState;
    rowState: RowState;
    action: TableActions | FormActions | FetchActions;
  }) {
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

  public onEditEvent(tableDataSource: TableDataSource): Observable<TableState> {
    return tableDataSource.on(FormActions.EDIT).pipe(
      map((rowState: RowState) => {
        const oldState = tableDataSource.getTableState();
        return this.setRowWithForm({
          oldState,
          rowState,
          action: FormActions.EDIT,
        });
      })
    );
  }

  public onCreateEvent(
    tableDataSource: TableDataSource
  ): Observable<TableState> {
    return tableDataSource.on(FormActions.CREATE).pipe(
      map((rowState: RowState) => {
        const oldState = tableDataSource.getTableState();
        return this.setRowWithForm({
          oldState,
          rowState,
          action: FormActions.CREATE,
        });
      })
    );
  }
  public onCloseEvent(
    tableDataSource: TableDataSource
  ): Observable<TableState> {
    return tableDataSource.on(FormActions.CANCEL).pipe(
      map((state: RowState) => {
        const oldState = tableDataSource.getTableState();
        const { item, key } = state;
        const { editing } = oldState;


        const tableState = {
          ...oldState,
          editing: deleteItem({ array: editing, value: item[key] }),
          action: FormActions.CANCEL,
        } as TableState;

        return tableState;
      })
    );
  }
}
