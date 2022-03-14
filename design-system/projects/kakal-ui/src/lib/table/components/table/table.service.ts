import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TableDataSource } from '../../models/table-datasource';
import { TableState } from '../../models/table.state';

@Injectable({ providedIn: 'root' })
export class TableService {
  constructor() {}

  public selectState(
    tableDataSource: TableDataSource,
    selector: keyof TableState
  ) {
    const tableState: TableState = tableDataSource.getTableState();
    return tableState[selector];
  }

  public selectState$(
    tableDataSource: TableDataSource,
    selector: keyof TableState
  ) {
    return tableDataSource
      .listenTableState()
      .pipe(map((tableState: TableState) => tableState[selector]));
  }

  public setForm() {}

  public setQuestion() {}

  public setPagination() {}
}
