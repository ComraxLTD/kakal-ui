import { Injectable } from '@angular/core';
import { ColumnModel } from '../table/models/column.model';

export interface ColumnsData<T> {
  columns: ColumnModel[];
  columnsDefs: (string| keyof T)[];
}

@Injectable({
  providedIn: 'root',
})
export class ColumnsService<T> {
  constructor() {}

  private setColumnDefsFromType(model: T): string[] {
    return Object.keys(model);
  }

  private filterColumnDefs(columnDefs: (string| keyof T)[], filters: [keyof T | string]): (string| keyof T)[] {
    return columnDefs.filter((item) => !filters.includes(item));
  }

  private setColumnDefs(model: T, filters: [keyof T | string]): (string| keyof T)[] {
    return this.filterColumnDefs(this.setColumnDefsFromType(model), filters);
  }

  private setColumnWithColumnDefs(
    columns: ColumnModel[],
    columnDefs:  (string| keyof T)[]
  ): ColumnModel[] {
    return columns.map((column, i) => {
      return new ColumnModel({
        ...column,
        columnDef: column.columnDef || columnDefs[i],
      });
    });
  }

  private setColumnDefsFromColumns(
    columns: ColumnModel[],
    columnDefs: (string| keyof T)[]
  ):  (string| keyof T)[] {
    if (columns.length > columnDefs.length) {
      columnDefs = columns.map((column) => column.columnDef);
    }
    return columnDefs;
  }

  private initColumnsDefs(model, filters):  (string| keyof T)[] {
    return this.setColumnDefs(model, filters);
  }

  private getColumnsDefs(columns: ColumnModel[], columnDefs: (string| keyof T)[]) {
    return this.setColumnDefsFromColumns(columns, columnDefs);
  }

  public getColumns(
    model: T,
    filters: (string| keyof T)[],
    tableColumns: ColumnModel[]
  ): ColumnsData<T> {
    const columnsDefs = this.initColumnsDefs(model, filters);
    const columns = this.setColumnWithColumnDefs(tableColumns, columnsDefs);

    return { columns, columnsDefs: this.getColumnsDefs(columns, columnsDefs) };
  }
}
