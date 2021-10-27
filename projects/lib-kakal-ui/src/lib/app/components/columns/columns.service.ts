import { Injectable } from '@angular/core';
import { ColumnDef, ColumnModel } from './column.model';

export interface ColumnsData<T> {
  columns: ColumnModel<T>[];
  columnsDefs: ColumnDef<T>[];
}

@Injectable({
  providedIn: 'root',
})
export class ColumnsService<T> {
  constructor() {}

  private setColumnDefsFromType(model: T): ColumnDef<T>[] {
    return Object.keys(model);
  }

  private filterColumnDefs(
    columnDefs: ColumnDef<T>[],
    filters: ColumnDef<T>[]
  ): ColumnDef<T>[] {
    if (filters.length > 0) {
      const filteredColumnsDefs = columnDefs.filter(
        (item) => !filters.includes(item)
      );
      return filteredColumnsDefs;
    } else {
      return columnDefs;
    }
  }

  private setColumnDefs(model: T, filters: ColumnDef<T>[]): ColumnDef<T>[] {
    return this.filterColumnDefs(this.setColumnDefsFromType(model), filters);
  }

  private setColumnWithColumnDefs(
    columns: ColumnModel<T>[],
    columnDefs: ColumnDef<T>[]
  ): ColumnModel<T>[] {
    return columns.map((column, i) => {
      if (column.columnDef === 'select') {
        i++;
      }

      return new ColumnModel<T>({
        ...column,
        columnDef: column.columnDef || columnDefs[i],
      });
    });
  }

  private setColumnDefsFromColumns(
    columns: ColumnModel<T>[],
    columnDefs: ColumnDef<T>[]
  ): ColumnDef<T>[] {
    if (columns.length > columnDefs.length) {
      columnDefs = columns.map((column) => column.columnDef);
    }
    return columnDefs;
  }

  private initColumnsDefs(model: T, filters: ColumnDef<T>[]): ColumnDef<T>[] {
    return this.setColumnDefs(model, filters);
  }

  private getColumnsDefs(
    columns: ColumnModel<T>[],
    columnDefs: ColumnDef<T>[]
  ) {
    return this.setSelect(this.setColumnDefsFromColumns(columns, columnDefs));
  }

  private setSelect(columns: ColumnDef<T>[]): ColumnDef<T>[] {
    const newColumns = [...columns];
    const index = newColumns.findIndex((columnDef) => columnDef === 'select');

    if (index < 0 || index === 0) {
      return newColumns;
    }

    const selectColumn: ColumnDef<T> = newColumns.find(
      (columnDef) => columnDef === 'select'
    );
    newColumns.splice(index, 1);

    const updateColumns = [selectColumn, ...newColumns];

    return updateColumns;
  }

  private addSelectColumn(columns: ColumnModel<T>[]): ColumnModel<T>[] {
    const columnsWithSelect = [...columns];

    const column = new ColumnModel<T>({
      columnDef: 'select',
      type: 'select',
      selectable: true,
    });

    columnsWithSelect.push(column);

    return columnsWithSelect;
  }
  private addActionsColumn(columns: ColumnModel<T>[]): ColumnModel<T>[] {
    const columnsWitActions = [...columns];
    const column = new ColumnModel<T>({
      columnDef: 'actions',
      type: 'actions',
    });

    columnsWitActions.push(column);
    return columnsWitActions;
  }

  private setColumnsWithState(
    selectable,
    hasActions
  ): (columns: ColumnModel<T>[]) => ColumnModel<T>[] {
    return (columns: ColumnModel<T>[]) => {
      let newColumns = [...columns];

      if (selectable) {
        newColumns = this.addSelectColumn(newColumns);
      }
      if (hasActions) {
        newColumns = this.addActionsColumn(newColumns);
      }

      return newColumns;
    };
  }

  public getColumns(
    model: T,
    tableColumns: ColumnModel<T>[],
    filters: ColumnDef<T>[],
    selectable?: boolean,
    hasActions?: boolean
  ): ColumnsData<T> {
    const columnWithState = this.setColumnsWithState(selectable, hasActions)(tableColumns);
    const columnsDefs = this.initColumnsDefs(model, filters);
    const columns = this.setColumnWithColumnDefs(columnWithState, columnsDefs);
    return { columns, columnsDefs: this.getColumnsDefs(columns, columnsDefs) };
  }
}
