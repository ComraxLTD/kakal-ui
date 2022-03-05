import { Injectable } from '@angular/core';
import { TableState } from '../models/table.state';
import { deleteItem } from './table.helpers';
import { TableDataSource } from '../models/table-datasource';
import { switchMap, take, map, Observable } from 'rxjs';
import { FormActions } from '../../form/models/form-events';

@Injectable({ providedIn: 'root' })
export class TableStateService {
  constructor() {}

  public onEditEvent(tableDataSource: TableDataSource): Observable<TableState> {
    return tableDataSource.on(FormActions.EDIT).pipe(
      switchMap((state) => {
        const { item, key, group } = state;
        return tableDataSource.listenTableState().pipe(
          map((tableState) => {
            const { editing } = tableState;
            const { formsA } = tableState;
            editing.push(item[key]);

            formsA.push({[item[key]] : group});

            tableState = {
              ...tableState,
              editing,
              event: 'edit',
              forms: {
                [item[key]]: group,
              },
              formsA
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
        return tableDataSource.listenTableState().pipe(
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
