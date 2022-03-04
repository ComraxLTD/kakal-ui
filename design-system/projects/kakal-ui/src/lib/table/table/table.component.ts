import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';

import { ThemePalette } from '@angular/material/core';
import { PaginationInstance } from 'ngx-pagination';

import { TableOptions } from '../models/table-options';
import { TableState } from '../models/table.state';

import { TableColumnModel } from '../../columns/models/column.model';
import { ColumnFilterOption } from '../../columns/models/column-filter-options';
import { ColumnSortOption } from '../../columns/models/column-sort-option';
import { TableDataSource } from '../models/table-datasource';

import { deleteItem } from './table.helpers';

import {
  combineLatest,
  map,
  merge,
  Observable,
  of,
  switchMap,
  take,
} from 'rxjs';
import { TableEvent } from '../models/table.events';
import { KKLActionCellDirective } from '../directives/cell-action.directive';
import { KKLTableCellDirective } from '../directives/cell.directive';

@Component({
  selector: 'kkl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T = any> implements OnInit {
  @ContentChild(KKLTableCellDirective)
  cellDirective: KKLTableCellDirective | undefined;

  @ContentChild(KKLActionCellDirective)
  cellActionDirective: KKLActionCellDirective | undefined;

  @Input() public data$: Observable<T[]>;
  @Input() public columns$: Observable<TableColumnModel<T>[]>;

  // table data instance for column keys
  @Input('itemKey') public key: keyof T;
  @Input() public model: T;

  @Input() public options: TableOptions<T>;

  @Input() public theme: ThemePalette = 'accent';

  // if table have state modes
  @Input() public paginator: boolean;
  @Input() public expendable: boolean;
  @Input() public clickable: boolean;
  @Input() public accordion: boolean;
  @Input() public selectable: boolean;
  @Input() public filterable: boolean;
  // if table have additional features
  @Input() public hasFooter: boolean;
  @Input() public hasActions: boolean;
  @Input() public hasState: boolean;

  // ng template for cell header
  @Input() public headerTemplate: { [key: string]: TemplateRef<any> };

  // ng template for column filter options
  @Input() public filterTemplate: { [key: string]: TemplateRef<any> };

  // ng template for footer cell
  @Input() public footerTemplate: { [key: string]: TemplateRef<any> };

  // ng template for select cell
  @Input() public selectTemplate: { [key: string]: TemplateRef<any> };

  // ng template for expand cell
  @Input() public expandTemplate: { [key: string]: TemplateRef<any> };

  // emit sort event : Sort
  @Output() sortChange: EventEmitter<ColumnSortOption<T>> = new EventEmitter();

  // emit pagination event : {next : number, prev : number}
  @Output() pageChange: EventEmitter<{
    next: number;
    prev: number;
  }> = new EventEmitter();

  // emit filter event : ColumnModel<T>
  @Output() filter: EventEmitter<ColumnFilterOption<T>> = new EventEmitter();

  @Output() filterAutocomplete: EventEmitter<ColumnFilterOption<T>> =
    new EventEmitter();

  // emit select event : Observable<T[]>
  @Output() selected: EventEmitter<Observable<T[]>> = new EventEmitter();

  // emit row event expand : Observable<RowModel<T>
  @Output() expand: EventEmitter<any> = new EventEmitter();

  // emit row : Observable<RowModel<T>
  @Output() rowClicked: EventEmitter<T> = new EventEmitter();

  // main obj which subscribe to table data - rows & columns & pagination
  public table$: any;
  public tableState$: Observable<TableState>;

  public inputTemplate: { [key: string]: TemplateRef<any> };

  // public filters$: Observable<ListItem<T>[]>;
  public pagination: PaginationInstance;

  // cdk object that handle selection
  public selection: SelectionModel<T> = new SelectionModel<T>(true, [], true);

  constructor(private tableDataSource: TableDataSource<T>) {}

  private setColumns$() {
    return this.columns$.pipe(
      map((columns: TableColumnModel<T>[]) => {
        if (this.hasActions) {
          columns.push(new TableColumnModel({ columnDef: 'actions' }));
        }

        if (this.selectable) {
          columns.unshift(new TableColumnModel({ columnDef: 'select' }));
        }

        return columns;
      })
    );
  }

  private setTable$() {
    return combineLatest([this.setColumns$()]).pipe(
      map(([columns]) => {
        const columnDefs = columns.map((column) => column.columnDef);
        return { columns, columnDefs };
      })
    );
  }

  ngOnInit() {
    this.table$ = this.setTable$();
    this.tableState$ = this.setTableState$();
  }

  private setTableState$() {
    return merge(of(null), this.onEditEvent(), this.onEditCloseEvent()).pipe(
      switchMap((tableState) => {
        if (tableState) {
          this.tableDataSource.loadTableState(tableState);
        }
        return this.tableDataSource.listenTableState();
      })
    );
  }

  private onEditEvent() {
    return this.tableDataSource.listen$.edit().pipe(
      switchMap((state) => {
        const { item, key, group } = state;
        return this.tableDataSource.listenTableState().pipe(
          take(1),
          map((tableState) => {
            const { editing } = tableState;
            editing.push(item[key]);

            tableState = {
              ...tableState,
              editing,
              event: 'edit',
              forms: {
                ...tableState.forms,
                [item[key]]: group,
              },
            } as TableState;

            return tableState;
          })
        );
      })
    );
  }
  private onEditCloseEvent() {
    return this.tableDataSource.listen$.close().pipe(
      switchMap((state) => {
        const { item, key } = state;
        return this.tableDataSource.listenTableState().pipe(
          take(1),
          map((tableState: TableState) => {
            const { editing } = tableState;

            tableState = {
              ...tableState,
              editing: deleteItem({ array: editing, value: item[key] }),
              event: 'close',
            } as TableState;

            return tableState;
          })
        );
      })
    );
  }
}
