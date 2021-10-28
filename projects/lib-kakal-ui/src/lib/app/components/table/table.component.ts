import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { PaginationInstance } from 'ngx-pagination';

import { TableService } from './table.service';
import { RowModel } from './models/row.model';

import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Sort } from '@angular/material/sort';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ColumnDef, ColumnModel } from '../columns/column.model';

import { SelectionChange, SelectionModel } from '@angular/cdk/collections';
import { v4 as uuid4 } from 'uuid';
import { FilterOption } from '../columns/column-filter/column-filter.component';

declare type id = string | number;

// interface for table options : {
// filters - keys to remove unwanted fields form object (ex - id)
// pagination - a PaginationInstance
// editable - tag rows to start in edit mode
// pending - tag rows for specific start style
// }
export interface TableOptions<T> {
  filters?: ColumnDef<T>[];
  pagination?: PaginationInstance;
  editable?: id[];
  pending?: id[];
}

// interface for every comp which handle kkl-table states :
// mode : edit/add/form/expand/close/remove/delete
// options : additional data

type state =
  | 'add'
  | 'save'
  | 'edit'
  | 'expand'
  | 'cancel'
  | 'delete'
  | 'form'
  | '';

export interface TableState<T> {
  mode?: state;
  ids?: id[];
  row?: RowModel<T>;
  column?: ColumnModel<T>;
  options?: any;
}

// interface for every comp which want to use kkl-table = {
// data : array of objects to render in table
//  columns : array of ColumnsModel
// options : see TableOptions interface
// model : new instance of the data object
// }
export interface Table<T> {
  data$: Observable<T[]>;
  columns: ColumnModel<T>[];
  options: TableOptions<T>;
  model: T;
}

@Component({
  selector: 'kkl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0rem', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  providers: [TableService, TableService],
})
export class TableComponent<T> implements OnInit, Table<T> {
  // color for hedaer : primary or accent
  @Input() public theme: ThemePalette;

  // data[]
  @Input() public data$: Observable<T[]>;

  // array of columns model

  @Input() public columns: ColumnModel<T>[];

  // table data instance for column keys
  @Input() public model: T;

  @Input() public options: TableOptions<T>;

  // if table have state modes
  @Input() public paginator: boolean;
  @Input() public expendable: boolean;
  @Input() public accordion: boolean;
  @Input() public selectable: boolean;
  @Input() public hasState: boolean;
  @Input() public hasFooter: boolean;
  @Input() public hasActions: boolean;

  // ng template for column header
  @Input() public headerSlots: {} = {};

  // ng template for cell
  @Input() public rowSlots: {};

  // ng template for filter
  @Input() public filterSlots: {};

  // ng template for footer cell
  @Input() public footerSlots: {};

  // ng template for select cell
  @Input() public selectSlot: {};

  // ng template for expand cell
  @Input() public expandSlots: {};

  // -----------------------------------------------------------------------/

  public rows$: Observable<RowModel<T>[]>;
  public columns$: Observable<ColumnModel<T>[]>;
  public expandKey$: Observable<ColumnDef<T>>;
  public columnDefs: ColumnDef<T>[];
  public pagination: PaginationInstance;

  // Subject which control table state mode : edit/expand/save
  public tableState$: BehaviorSubject<TableState<T>>;

  // cdk object that handle selection
  public selection: SelectionModel<RowModel<T>> = new SelectionModel<
    RowModel<T>
  >(true, [], true);

  private rows: RowModel<T>[];

  // -----------------------------------------------------------------------/

  // emit sort event : Sort
  @Output() sort: EventEmitter<Sort> = new EventEmitter();

  // emit pagination event : {next : number, prev : number}
  @Output() pageChange: EventEmitter<{
    next: number;
    prev: number;
  }> = new EventEmitter();

  // emit filter event : ColumnModel<T>
  @Output() filter: EventEmitter<FilterOption<T>> = new EventEmitter();

  // emit state instance event
  @Output() register: EventEmitter<
    BehaviorSubject<TableState<T>>
  > = new EventEmitter();

  // emit select event : Observable<T[]>
  @Output() selected: EventEmitter<Observable<T[]>> = new EventEmitter();

  constructor(private tableService: TableService<T>) {}

  private setExpandState() {
    this.expendable = this.expendable || this.accordion;

    if (this.expendable) {
      this.expandKey$ = this.setExpandKey$();
    }
  }

  private setTableProps() {
    const { pagination, filters } = this.options;
    this.rows$ = this.setRowWithState$();
    this.columns$ = this.setColumns$(filters);
    this.pagination = { ...pagination, id: uuid4() };
  }

  ngOnInit() {
    this.theme = this.theme || 'accent';
    this.tableState$ = new BehaviorSubject<TableState<T>>({
      mode: '',
    });

    this.setTableProps();
    this.setExpandState();

    if (this.expendable) {
      this.expandKey$ = this.setExpandKey$();
    }
    this.register.emit(this.tableState$);
  }

  private setRowState(
    rows: RowModel<T>[],
    state: TableState<T>
  ): RowModel<T>[] {
    const { mode, ids, row, options } = state;

    switch (mode) {
      case 'expand':
        return rows.map((rowItem) => {
          if (ids.indexOf(rowItem.item['id']) >= 0) {
            rowItem.expanded = !rowItem.expanded;
          }
          return rowItem;
        });
      case 'form':
        const { columns } = this.tableService.setColumns(
          this.columns,
          this.model,
          this.options.filters
        );

        rows = this.tableService.onFormMode(rows, columns, options);
        return [...rows];

      case 'add':
        rows = this.tableService.onAddFormRow(rows, this.columns);
        return [...rows];

      case 'edit':
        rows = this.tableService.onEditMode(rows, row, this.columns, options);
        return [...rows];
      case 'save':
        return this.tableService.onSaveMode(rows, 'id', row.item);
      case 'cancel':
        rows.shift();
        return [...rows];
      default:
        return [...rows];
    }
  }

  private setRows$(): Observable<RowModel<T>[]> {
    return this.data$.pipe(
      map((data) => {
        return this.tableService.setRows(data, this.options);
      })
    );
  }

  private setRowWithState$() {
    return combineLatest([
      this.setRows$(),
      this.tableState$.asObservable(),
    ]).pipe(map((pair) => this.setRowState(pair[0], pair[1])));
  }

  private setColumns$(filters: ColumnDef<T>[]) {
    return this.data$.pipe(
      map(() => {
        const { columns, columnsDefs } = this.tableService.setColumns(
          this.columns,
          this.model,
          [...filters],
          this.selectable,
          this.hasActions
        );

        this.columnDefs = columnsDefs;
        this.columns = columns;
        return columns;
      })
    );
  }

  // method to handle key of expand table template (expandSlots) - key need to be the same as the object field
  // ex { name : string } columnDef : name
  private setExpandKey$(): Observable<ColumnDef<T>> {
    return this.tableState$.pipe(
      map((state) => {
        const { mode, column } = state;

        if (mode === 'expand') {
          return column?.columnDef || 'expand';
        }

        return '';
      })
    );
  }

  // method which handle expand row state
  public onExpandRow(row: RowModel<T>) {
    if (this.accordion) {
      this.tableState$.next({ mode: 'expand', ids: [row.item['id']] });
    }
  }

  // EMIT EVENTS

  public onPageChange(event) {
    this.pageChange.emit(event);
  }

  public onSort(sort: Sort): void {
    this.sort.emit(sort);
  }
  public onFilter(filterOption: FilterOption<T>): void {
    this.filter.emit(filterOption);
  }

  // method which emit  selection items : []T
  public onSelect(): void {
    const select$ = this.selection.changed.pipe(
      map((selection: SelectionChange<RowModel<T>>) => {
        const { source } = selection;
        return source.selected.map((row) => row.item);
      })
    );

    this.selected.emit(select$);
  }

  // SELECT LOGIC SECTION

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected(): boolean {
    const numSelected = this.selection.selected?.length;
    const numRows = this.rows.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.rows.map((row) => this.selection.select(row));
  }
}
