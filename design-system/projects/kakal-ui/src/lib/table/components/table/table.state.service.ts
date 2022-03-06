import { Injectable } from '@angular/core';
import { deleteItem } from './table.helpers';
import {
  switchMap,
  take,
  map,
  Observable,
  distinctUntilChanged,
  filter,
} from 'rxjs';
import { FormActions } from '../../../form/models/form-events';
import { TableDataSource } from '../../models/table-datasource';
import { TableState } from '../../models/table.state';

@Injectable({ providedIn: 'root' })
export class TableStateService {
  constructor() {}

  private onDataChange(
    pagination: boolean,
    tableDataSource: TableDataSource
  ): Observable<TableState> {
    return tableDataSource.connect().pipe(
      filter(() => !pagination),
      map((data) => data.length),
      distinctUntilChanged(),
      switchMap((length) => {
        return tableDataSource.connectTableState().pipe(
          map((tableState: TableState) => {
            return {
              ...tableState,
              pagination: {
                ...tableState.pagination,
                totalItems: length,
              },
            } as TableState;
          })
        );
      })
    );
  }

  public onEditEvent(tableDataSource: TableDataSource): Observable<TableState> {
    return tableDataSource.on(FormActions.EDIT).pipe(
      switchMap((state) => {
        const { item, key, group } = state;
        return tableDataSource.connectTableState().pipe(
          map((tableState) => {
            const { editing } = tableState;

            console.log(item);
            editing.push(item[key]);

            tableState = {
              ...tableState,
              editing,
              event: 'edit',
              forms: {
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
    return tableDataSource.on(FormActions.CLOSE).pipe(
      switchMap((state) => {
        const { item, key } = state;
        return tableDataSource.connectTableState().pipe(
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
