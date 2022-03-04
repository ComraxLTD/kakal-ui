import { Injectable } from '@angular/core';
import { TableOptions } from '../models/table-options';
import { TableState } from '../models/table.state';
import { deleteItem } from './table.helpers';

import { TableColumnModel } from '../../columns/models/column.model';
import { ColumnFilterOption } from '../../columns/models/column-filter-options';
import { ColumnSortOption } from '../../columns/models/column-sort-option';
import { TableDataSource } from '../models/table-datasource';
import { switchMap, take, map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor() {}

  public onEditEvent(tableDataSource: TableDataSource) : Observable<TableState> {
    return tableDataSource.listen$.edit().pipe(
      switchMap((state) => {
        const { item, key, group } = state;
        return tableDataSource.listenTableState().pipe(
          take(1),
          map((tableState) => {
            const { editing } = tableState;
            editing.push(item[key]);

            tableState = {
              ...tableState,
              editing,
              event: 'edit',
              forms: {
                ...tableState.forms,
                [item[key]]: group,
              },
            } as TableState;

            return tableState;
          })
        );
      })
    );
  }
  public onEditCloseEvent(
    tableDataSource: TableDataSource
  ): Observable<TableState> {
    return tableDataSource.listen$.close().pipe(
      switchMap((state) => {
        const { item, key } = state;
        return tableDataSource.listenTableState().pipe(
          take(1),
          map((tableState: TableState) => {
            const { editing } = tableState;

            tableState = {
              ...tableState,
              editing: deleteItem({ array: editing, value: item[key] }),
              event: 'close',
            } as TableState;

            return tableState;
          })
        );
      })
    );
  }
}
