import { ColumnModel } from './models/column.model';
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

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T> implements OnInit {
  @Input() public theme: ThemePalette;
  @Input() public $table: Observable<TableModel<T>>;
  @Input() public columns: ColumnModel[];
  @Input() public columnDefs: string[];
  @Input() public rowSlots: {};
  @Input() public headerSlots: { headerActions: ElementRef };

  private unsubscribe: Subscription;

  public table: TableModel<T>;
  public $data: Observable<RowModel<T>[]>;
  public $columnDefs: Observable<string[]>;
  public $columns: Observable<ColumnModel[]>;
  public pagination: PaginationInstance;

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() filter: EventEmitter<RowModel<T>> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.subscribeToTable();
    this.theme = this.theme || 'accent';
  }

  ngOnDestroy(): void {
    this.unsubscribe.unsubscribe();
  }

  private subscribeToTable() {
    this.unsubscribe = this.$table.subscribe((table: TableModel<T>) => {
      this.table = table;
      this.$data = table.$data;
      this.columnDefs = table.columnDefs;
      this.pagination = table.pagination;
    });
  }

  public onRowClicked(row: T) {}

  public onSort(sort: Sort) {
    this.sort.emit(sort);
  }

  public onFilter(row: RowModel<T>) {
    this.filter.emit(row);
  }
}
