import { RowModel } from './models/row.model';

import { Injectable } from '@angular/core';
import { ColumnsData, ColumnsService } from '../columns/columns.service';
import { TableOptions } from './table.component';
import { ColumnDef, ColumnModel } from '../columns/column.model';
import { FormService, Question } from '../form/services/form.service';

@Injectable({
  providedIn: 'root',
})
export class TableService<T> {
  constructor(
    private columnsService: ColumnsService<T>,
    private formService: FormService
  ) {}

  public setRows(data: T[], options?: TableOptions<T>): RowModel<T>[] {
    return data
      .map((item: T) => new RowModel({ item }))
      .map((row: RowModel<T>) => {
        if (options?.pending && options?.pending.indexOf(row.item['id']) > -1) {
          row.pending = true;
        }

        return row;
      });
  }

  public setColumns(options: {
    tableColumns: ColumnModel<T>[];
    model: T;
    filters: ColumnDef<T>[];
    selectable?: boolean;
    accordion?: boolean;
    hasActions?: boolean;
  }): ColumnsData<T> {
    return this.columnsService.getColumns({ ...options });
  }

  public findRowIndex(rows: RowModel<T>[], key: string, item?: T): number {
    return rows.findIndex((row) => row.item[key] === item[key]);
  }

  private getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  private updateRow(row: RowModel<T>, questions: Question[]): RowModel<T> {
    const editRow = new RowModel({ ...row });
    editRow.editable = true;
    editRow.formGroup = this.formService.setFormGroup(questions);
    editRow.questionsGroup = this.formService.setQuestionGroup(questions);
    return editRow;
  }

  // take columns array and return Question array for formGroup
  public setQuestions(tableColumns: ColumnModel<T>[]): Question[] {
    const columns = tableColumns;

    if (columns) {
      return columns
        .filter(
          (column) =>
            column.type !== 'actions' &&
            column.type !== 'select' &&
            column.control !== undefined
        )
        .map((column: ColumnModel<T>) => {
          const question = this.formService.setQuestion({
            key: column.columnDef,
            controlType: column.control,
            label: column.label,
            icon: column.icon,
          });
          return question;
        });
    }

    return [];
  }

  private setEdit(row: RowModel<T>, columns: ColumnModel<T>[]): RowModel<T> {
    const questions = this.setQuestions(columns);
    const editRow = this.updateRow(row, questions);
    return editRow;
  }

  private onEditRow(
    row: RowModel<T>,
    columns: ColumnModel<T>[],
    editOptions?: any
  ): RowModel<T> {
    const editRow = this.setEdit(row, columns);
    editRow.formGroup.patchValue({ ...editRow.item, ...editOptions });
    return editRow;
  }

  // method for edit row
  public onEditMode(
    rows: RowModel<T>[],
    cell: RowModel<T>,
    columns: ColumnModel<T>[],
    options: any
  ) {
    return rows.map((row: RowModel<T>) => {
      if (row.item['id'] === cell.item['id']) {
        return this.onEditRow(row, columns, options);
      }
      return row;
    });
  }

  // method for form row
  public onFormMode(
    rows: RowModel<T>[],
    columns: ColumnModel<T>[],
    options?: TableOptions<T>
  ): RowModel<T>[] {
    if (options?.editable) {
      const { editable } = options;
      return rows.map((row) => {
        const editRow =
          editable.indexOf(row.item['id']) > -1
            ? this.setEdit(row, columns)
            : row;
        return editRow;
      });
    } else {
      return rows.map((row) => {
        const editRow = this.setEdit(row, columns);
        return editRow;
      });
    }
  }

  // method for first form row
  public onAddFormRow(
    rows: RowModel<T>[],
    columns: ColumnModel<T>[]
  ): RowModel<T>[] {
    const row: RowModel<T> = new RowModel<T>();
    const editRow = this.setEdit(row, columns);
    rows.unshift(editRow);
    return rows;
  }

  // method to update form  data to table
  public onSaveMode(
    tableRows: RowModel<T>[],
    key: string,
    item?: T
  ): RowModel<T>[] {
    const rows = [...tableRows];
    const index = this.findRowIndex(rows, key, item);
    rows[index].editable = false;

    if (rows[index].formGroup) {
      rows[index].item = {
        ...rows[index].item,
        ...rows[index].formGroup.value,
      };
    }
    return rows;
  }

  public onDelete() {}
}
