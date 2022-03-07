import { Injectable } from '@angular/core';
import { deleteItem } from './table.helpers';
import { map, Observable, distinctUntilChanged } from 'rxjs';
import { FormActions } from '../../../form/models/form.actions';
import { TableDataSource } from '../../models/table-datasource';
import { RowState, TableState } from '../../models/table.state';
import { PaginationInstance } from 'ngx-pagination';

@Injectable({ providedIn: 'root' })
export class TableStateService {
  constructor() {}

  public onDataChange(
    tableDataSource: TableDataSource,
    data$: Observable<any[]>,
    pagination: PaginationInstance
  ): Observable<TableState> {
    return data$.pipe(
      map((data) => data.length),
      distinctUntilChanged(),
      map((totalItems) => {
        const oldState = tableDataSource.getTableState();

        const paginationState = pagination
          ? pagination
          : ({
              ...oldState.pagination,
              itemsPerPage: totalItems,
            } as PaginationInstance);

        return {
          ...oldState,
          pagination: {
            ...paginationState,
            totalItems,
          },
        } as TableState;
      })
    );
  }

  private setRowWithForm(options: {
    oldState: TableState;
    rowState: RowState;
    event: string;
  }) {
    const { oldState, rowState, event } = options;
    const { item, key, group } = rowState;
    let { editing } = oldState;

    if(event === FormActions.CREATE) {
      editing = []
    }

    editing.push(item[key]);

    const tableState = {
      ...oldState,
      editing,
      event,
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
          event: FormActions.EDIT,
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
          event: FormActions.CREATE,
        });
      })
    );
  }
  public onEditCloseEvent(
    tableDataSource: TableDataSource
  ): Observable<TableState> {
    return tableDataSource.on(FormActions.CLOSE).pipe(
      map((state: RowState) => {
        const oldState = tableDataSource.getTableState();
        const { item, key } = state;
        const { editing } = oldState;

        const tableState = {
          ...oldState,
          editing: deleteItem({ array: editing, value: item[key] }),
          event: 'close',
        } as TableState;

        return tableState;
      })
    );
  }
}
