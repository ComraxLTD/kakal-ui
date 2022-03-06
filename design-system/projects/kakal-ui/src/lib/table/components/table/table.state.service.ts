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

  public onEditEvent(tableDataSource: TableDataSource): Observable<TableState> {
    return tableDataSource.on(FormActions.EDIT).pipe(
      map((state: RowState) => {
        const oldState = tableDataSource.getTableState();
        const { item, key, group } = state;
        const { editing } = oldState;

        editing.push(item[key]);

        const tableState = {
          ...oldState,
          editing,
          event: 'edit',
          forms: {
            ...oldState.forms,
            [item[key]]: group,
          },
        } as TableState;
        return tableState;
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
