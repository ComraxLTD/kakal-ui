import { RowModel } from './models/row.model';
import {
  FormService,
  Question,
} from '../form/services/form.service';
import { PaginationInstance } from 'ngx-pagination';
import {
  ColumnModel,
  ColumnType,
} from './models/column.model';
import { TableModel } from './models/table.model';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class TableService<T> {
  constructor(
    private formService: FormService,
  ) { }

  public setTable(options: {
    data: T[];
    type: T;
    columns: ColumnModel[];
    pagination?: PaginationInstance;
    filters?: string[];
  }): TableModel<T> {
    const { data, type, columns, pagination, filters } = options;
    const table = new TableModel({ data, type, columns, pagination, filters });
    table.setTable();
    return table;
  }

  public setTableObs(table: TableModel<T>): Observable<TableModel<T>> {
    return new BehaviorSubject<TableModel<T>>(table);
  }
  public findRowIndex(table: TableModel<T>, id: number | string): number {
    return table.findRowIndex('id', id);
  }

  public onSaveMode(table: TableModel<T>, id: number | string) {
    const rows = [...table.rows];
    const index = table.findRowIndex('id', id);
    rows[index].editable = false;
    rows[index].item = rows[index].formGroup.value
    table.loadRows(rows);
  }

  public setEditMode(row : RowModel<T>, table: TableModel<T>, index : number) {
    row.editable = true
    row.formGroup = this.setFormGroup(table);
    table.rows[index] = row
  }

  public setFormGroup(table: TableModel<T>): FormGroup {
    const questions = this.setQuestions(table);
    return this.formService.setFormGroup(questions);
  }

  public updateFormState(row: RowModel<T>, options?: any) {
    const { formGroup, item } = row
    formGroup.patchValue({ ...item, ...options });
  }

  public updateRowState(table : TableModel<T>, rows: RowModel<T>[]) {
    table.loadRows(rows)
  }

  public setQuestions(table: TableModel<T>): Question[] {
    return table.columns
      .filter((column) => column.type !== ColumnType.ACTIONS)
      .map((column: ColumnModel) => {
        const question = this.formService.setQuestion(column.control, {
          key: column.columnDef,
          label: column.label,
        });
        column.question = { ...question };
        return question;
      });
  }

  public formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  }

}
