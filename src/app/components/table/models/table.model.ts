import { PaginationInstance } from 'ngx-pagination';
import { Observable } from 'rxjs';
import { ColumnModel } from '../models/column.model';
import { TableDataSource } from '../table-datasource';
import { RowModel } from './row.model';

export class TableModel<T> {
  public $data: Observable<RowModel<T>[]>;
  public columns: ColumnModel[];

  // array of T fields for mat-tbale columnKey varibale
  public columnDefs: string[];
  public pagination: PaginationInstance;

  private type: T;
  private dataSource: TableDataSource<T>;
  private data: T[];
  public rows: RowModel<T>[];

  // array of columnDefs to remove columnDefs array
  // be defualt remove id columnDef
  private filters: string[];

  constructor(options: {
    data: T[];
    type: T;
    columns: ColumnModel[];
    pagination?: PaginationInstance;
    filters?: string[];
  }) {
    this.data = options.data;
    this.type = options.type;
    this.columns = options.columns || [];
    this.filters = options.filters?.concat(['id']) || ['id'];
    this.pagination = options?.pagination || {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: 12,
    };
    this.dataSource = new TableDataSource<T>();
  }

  public setTable() {
    this.load();
    this.connect();
    this.setRows();
    this.setcolumnDefs();
    this.setColumnWithcolumnDefs();
    this.setcolumnDefsFromColumns();
  }

  public loadRows(rows: RowModel<T>[]) {
    this.dataSource.loadRows(rows);
  }

  private load() {
    this.dataSource.load(this.data);
  }

  private connect() {
    this.$data = this.dataSource.connectToRows();
  }

  private setRows() {
    this.rows = this.data.map((item: T) => new RowModel({ item }));
  }

  private setcolumnDefsFromType(): string[] {
    return Object.keys(this.type);
  }

  private filtercolumnDefs(columnDefs: string[], filters: string[]): string[] {
    return columnDefs.filter((item) => !filters.includes(item));
  }

  private setcolumnDefs() {
    this.columnDefs = this.filtercolumnDefs(this.setcolumnDefsFromType(), this.filters);
  }

  private setColumnWithcolumnDefs() {
    this.columns = this.columns.map((column, i) => {
      return new ColumnModel({ ...column, columnDef: column.columnDef || this.columnDefs[i] });
    });
  }

  private setcolumnDefsFromColumns() {
    if (this.columns.length > this.columnDefs.length) {
      this.columnDefs = this.columns.map((column) => column.columnDef);
    }
  }

  public findRowIndex(key: string, value: any) {
    return this.rows.findIndex((row) => row.item[key] === value);
  }

  public editMode(id: number | string) {
    const index = this.findRowIndex('id', id);
    this.rows[index].editable = true;
    this.dataSource.loadRows(this.rows);
  }

  public saveMode(id: number | string) {
    const index = this.findRowIndex('id', id);
    this.rows[index].editable = false;
    this.dataSource.loadRows(this.rows);
  }
}
