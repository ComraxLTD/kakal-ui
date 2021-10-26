import { RowModel } from './models/row.model';
import { TableModel } from './models/table.model';
import { Injectable } from '@angular/core';
import { FormService, Question } from '../form/services/form.service';
import { ColumnsService, ColumnsData } from '../columns/columns.service';
import { ColumnModel } from 'projects/lib-kakal-ui/src/lib/app/components/columns/column.model';

@Injectable({
  providedIn: 'root',
})
export class TableService<T> {
  constructor(
    private columnsService: ColumnsService<T>,
    private formService: FormService
  ) {}

  public setColumns(
    columns: ColumnModel[],
    model: T,
    filters: (string | keyof T)[]
  ): ColumnsData<T> {
    return this.columnsService.getColumns(model, filters, columns);
  }

  public findRowIndex(rows: RowModel<T>[], key: string, item?: T): number {
    return rows.findIndex((row) => row.item[key] === item[key]);
  }

  private getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
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
    rows[index].item = rows[index].formGroup.value;
    return rows;
  }

  public onAddFormRow(table: TableModel<T>) {
    const row: RowModel<T> = new RowModel<T>();
    table.rows.unshift(row);
    // this.onEditMode(row, table, 0);
  }

  public onEditTable(row : RowModel<T>, tableRows, tableColumns, index,  options?) {
    const { editRow, columns } = this.onEditMode(row, tableColumns, options);
    const rows = [...tableRows]
    rows[index] = editRow;
    return { rows, columns };
  }

  private updateRow(row: RowModel<T>, questions: Question[]): RowModel<T> {
    const editRow = new RowModel({ ...row });
    editRow.editable = true;
    editRow.formGroup = this.formService.setFormGroup(questions);
    return editRow;
  }

  public onEditMode(
    row: RowModel<T>,
    tableColumns: ColumnModel[],
    editOptions?: any
  ) {
    const questions = this.setQuestions(tableColumns);
    const columns = this.updateColumns(tableColumns, questions);
    const editRow = this.updateRow(row, questions);
    editRow.formGroup.patchValue({ ...editRow.item, ...editOptions });

    return { editRow, columns };
  }

  private updateColumns(tableColumns, questions): ColumnModel[] {
    return tableColumns.map((column, i) => {
      return {
        ...column,
        question: questions.find(
          (question) => question.key === column.columnDef
        ),
      };
    });
  }

  // method to update form inputs on edit mode
  public updateFormState(row: RowModel<T>, options?: any) {
    const { formGroup, item } = row;
    formGroup.patchValue({ ...item, ...options });
    return formGroup;
  }

  public setQuestions(tableColumns: ColumnModel[]): Question[] {
    const columns = tableColumns;

    if (columns) {
      return columns
        .filter((column) => column.type !== 'actions')
        .map((column: ColumnModel) => {
          const question = this.formService.setQuestion(column.control, {
            key: column.columnDef,
            label: column.label,
          });
          return question;
        });
    }

    return [];
  }

}
