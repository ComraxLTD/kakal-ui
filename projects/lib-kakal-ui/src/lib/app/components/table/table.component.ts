import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Observable, Subscription } from 'rxjs';
import { TableModel } from './models/table.model';
import { RowModel } from './models/row.model';
import { ThemePalette } from '@angular/material/core';
import { Sort } from '@angular/material/sort';
import { TableService } from './table.service';
import { EditRow, TableDataSource } from './table-datasource';
import { ColumnModel } from './models/column.model';

declare type id = string | number;

export interface TableOptions<T> {
  filters?: (keyof T)[];
  pagination?: PaginationInstance;
  editable?: id[];
  pending?: id[];
}

export interface Table<T> {
  columns: ColumnModel[];
  data: T[];
  options: TableOptions<T>;
  model: T;
  dataSource: TableDataSource<T>;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableService, TableService],
})
export class TableComponent<T> implements OnInit, Table<T> {
  @Input() public theme: ThemePalette;

  @Input() public data: T[];
  @Input() public columns: ColumnModel[];
  @Input() public model: T;
  @Input() public options: TableOptions<T>;

  @Input() public rowSlots: {};
  @Input() public headerSlots: { headerActions: ElementRef };

  private subscription: Subscription;

  public dataSource: TableDataSource<T>;

  public columnDefs: (string | keyof T)[];

  public $data: Observable<RowModel<T>[]>;
  public $columnDefs: Observable<string[]>;
  public tableColumns: ColumnModel[];
  public pagination: PaginationInstance;

  @Output() register: EventEmitter<TableDataSource<T>> = new EventEmitter();
  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() filter: EventEmitter<RowModel<T>> = new EventEmitter();

  constructor(private tableService: TableService<T>) {}

  ngOnInit() {
    this.theme = this.theme || 'accent';
    this.setTable();
  }

  private setTable() {
    const { pagination, filters } = this.options;

    this.dataSource = new TableDataSource<T>(this.data, this.options);

    const data$ = this.dataSource.connectToRows();
    const { columns, columnsDefs } = this.tableService.setColumns(
      this.columns,
      this.model,
      [...filters]
    );

    this.$data = data$;
    this.tableColumns = columns;
    this.columnDefs = columnsDefs;
    this.pagination = pagination;
    this.register.emit(this.dataSource);

    this.subscribeToRowEdit();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public onRowClicked(row: T) {}

  public onSort(sort: Sort) {
    this.sort.emit(sort);
  }

  public onFilter(row: RowModel<T>) {
    this.filter.emit(row);
  }

  public subscribeToRowEdit() {
    this.subscription = this.dataSource
      .connectEdit()
      .subscribe((data: EditRow<T>) => {
        const { row, options } = data;
        const rows = this.dataSource.getRows();
        const index = this.tableService.findRowIndex(rows, 'id', row.item);
        const { editRow, columns } = this.tableService.onEditMode(
          row,
          this.tableColumns,
          options
        );

        rows[index] = editRow;
        this.tableColumns = columns;
        this.dataSource.loadRows(rows);
      });
  }

  private getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
}
