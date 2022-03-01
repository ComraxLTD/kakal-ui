import { Injectable } from '@angular/core';
import { QuestionGroupModel } from '../form/models/question-group.model';
import {
  QuestionSelectModel,
  SelectOption,
} from '../form/models/question-select.model';
import { Question } from '../form/services/form.service';
import { ListItem } from '../list-item/list-item.model';
// import { FilterMap } from '../table-filters/table-filter.service';
import { ColumnDef, TableColumnModel } from './column.model';

export interface ColumnsData<T> {
  columns: TableColumnModel<T>[];
  columnsDefs: ColumnDef<T>[];
}

@Injectable({
  providedIn: 'root',
})
export class ColumnsService<T> {
  constructor() {}

  public updateColumnsOptions(
    columns: TableColumnModel<T>[],
    key: ColumnDef<T>,
    type: 'select' | 'filter',
    options?: SelectOption[],
    selector?: string
  ): TableColumnModel<T>[] {
    const index = columns.findIndex(
      (column: TableColumnModel<T>) => column.columnDef === key
    );

    switch (type) {
      case 'filter':
        const q = columns[index].filterQuestion as QuestionSelectModel;
        columns[index].filterQuestion = { ...q, options };
        break;

      case 'select':
        if (selector) {
          const questionGroup = columns[index].question as QuestionGroupModel;
          const selectorIndex = questionGroup.questions.findIndex(
            (q: Question) => q.key === selector
          );
          columns[index].question['questions'][selectorIndex]['options'] =
            options;
        } else {
          columns[index].question['options'] = options;
        }
        break;
    }

    return columns;
  }
  public updateColumnsOptionsSelect(
    columns: TableColumnModel<T>[],
    key: ColumnDef<T>,
    selected: string[]
  ): TableColumnModel<T>[] {
    const index = columns.findIndex(
      (column: TableColumnModel<T>) => column.columnDef === key
    );

    if (index === 1) {
      // console.log(columns[index]);
    }

    if (index !== -1) {
      const options = columns[index].filterQuestion['options'];

      const selectedOptions = options.map((option : SelectOption) => {
        // if (selected.indexOf(option.value) !== -1) {
        //   option.selected = true;
        // } else {
        //   option.selected = false;
        // }
        return option;
      });

      columns[index] = {
        ...columns[index],
        filterQuestion: {
          ...columns[index].filterQuestion,
          options: [...selectedOptions],
        } as QuestionSelectModel,
      } as TableColumnModel<T>;
    }

    if (index === 1) {
      // console.log(columns[index]);
    }
    return columns;
  }

  public recursiveColumnsOptionsUpdate(
    multiOptions: any,
    columns: TableColumnModel<T>[],
    type: 'select' | 'filter',
    columnKey?: string
  ): TableColumnModel<T>[] {
    Object.entries(multiOptions).map(([key, options]) => {
      if (Array.isArray(options) && !columnKey) {
        columns = this.updateColumnsOptions(columns, key, type, options);
      } else if (Array.isArray(options) && columnKey) {
        columns = this.updateColumnsOptions(
          columns,
          columnKey,
          type,
          options,
          key
        );
      } else if (!Array.isArray(options)) {
        columnKey = key;
        columns = this.recursiveColumnsOptionsUpdate(
          options,
          columns,
          type,
          columnKey
        );
      }
    });
    return columns;
  }

  public updateOptionsValue(
    valueMap: { [key: string]: ListItem<T> },
    columns: TableColumnModel<T>[]
  ): TableColumnModel<T>[] {
    Object.entries(valueMap).map(([columnDef, item]) => {
      const { value, key } = item;

      const index = columns.findIndex(
        (column: TableColumnModel<T>) => column.columnDef === columnDef
      );

      if (key) {
        const question = columns[index].question as QuestionGroupModel;
        const questionIndex = question.questions.findIndex(
          (q) => q.key === key
        );
        question.questions[questionIndex]['value'] = value;
        columns[index].question = question;
      } else {
        const question = columns[index].question as QuestionSelectModel;
        question.value = value;
        columns[index].question = question;
      }
    });
    return columns;
  }

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
    columns: TableColumnModel<T>[],
    columnDefs: ColumnDef<T>[]
  ): TableColumnModel<T>[] {
    return columns.map((column, i) => {
      if (column.columnDef === 'select') {
        i++;
      }

      return new TableColumnModel<T>({
        ...column,
        columnDef: column.columnDef || columnDefs[i],
      });
    });
  }

  private setColumnDefsFromColumns(
    columns: TableColumnModel<T>[],
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
    columns: TableColumnModel<T>[],
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

  private addSelectColumn(
    columns: TableColumnModel<T>[],
    disableSelect: boolean
  ): TableColumnModel<T>[] {
    const columnsWithSelect = [...columns];

    const column = new TableColumnModel<T>({
      columnDef: 'select',
      type: 'select',
      selectable: true,
      disableSelect,
    });

    columnsWithSelect.unshift(column);

    return columnsWithSelect;
  }
  private addActionsColumn(columns: TableColumnModel<T>[]): TableColumnModel<T>[] {
    const columnsWithActions = [...columns];
    const column = new TableColumnModel<T>({
      columnDef: 'actions',
      type: 'actions',
    });

    columnsWithActions.push(column);
    return columnsWithActions;
  }
  private setColumnsWithState(
    hasActions,
    filterable
  ): (columns: TableColumnModel<T>[]) => TableColumnModel<T>[] {
    return (columns: TableColumnModel<T>[]) => {
      let newColumns = [...columns];

      if (filterable) {
        newColumns = this.setSelectAndFilter(newColumns);
      }

      if (hasActions) {
        newColumns = this.addActionsColumn(newColumns);
      }

      return newColumns;
    };
  }

  public getColumns(options: {
    model: T;
    tableColumns: TableColumnModel<T>[];
    filters: ColumnDef<T>[];
    filterable?: boolean;
    selectable?: boolean;
    hasActions?: boolean;
    disableSelect?: boolean;
  }): ColumnsData<T> {
    const {
      model,
      tableColumns,
      selectable,
      filterable,
      hasActions,
      disableSelect,
      filters,
    } = options;

    const columnWithState = this.setColumnsWithState(
      hasActions,
      filterable
    )(tableColumns);
    const columnsDefs = this.initColumnsDefs(model, filters);
    const columns = this.unShiftSelect(
      this.setColumnWithColumnDefs(columnWithState, columnsDefs),
      selectable,
      disableSelect
    );

    return {
      columns: columns,
      columnsDefs: this.getColumnsDefs(columns, columnsDefs),
    };
  }

  private unShiftSelect(
    columns: TableColumnModel<T>[],
    selectable: boolean,
    disableSelect: boolean
  ) {
    if (selectable) {
      return this.addSelectColumn(columns, disableSelect);
    }
    return columns;
  }

  private setSelectAndFilter(columns: TableColumnModel<T>[]) {
    return columns.map((column: TableColumnModel<T>) => {
      return new TableColumnModel({
        ...column,
        filterable: true,
        sortable: true,
      });
    });
  }
}
