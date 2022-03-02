import { SelectionModel } from '@angular/cdk/collections';
import {
  Component,
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

import { ColumnDef, TableColumnModel } from '../../columns/models/column.model';
import { ColumnFilterOption } from '../../columns/models/column-filter-options';
import { ColumnSortOption } from '../../columns/models/column-sort-option';
import { TableDataSource } from '../models/table-datasource';

import { combineLatest, map, Observable } from 'rxjs';

@Component({
  selector: 'kkl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent<T = any> implements OnInit {
  @Input() public tableDataSource: TableDataSource<T>;

  @Input() public data$: Observable<T[]>;
  @Input() public columns$: Observable<TableColumnModel<T>[]>;
  @Input() public tableState$: Observable<TableState>;

  // table data instance for column keys
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

  // ng template for cell
  @Input() public cellTemplate: { [key: string]: TemplateRef<any> } = {};

  //ng template for cell inputs
  @Input() public formTemplate: { [key: string]: TemplateRef<any> };

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

  // public filters$: Observable<ListItem<T>[]>;
  public pagination: PaginationInstance;

  // cdk object that handle selection
  public selection: SelectionModel<T> = new SelectionModel<T>(true, [], true);

  constructor() {}

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
    return combineLatest([this.data$, this.setColumns$()]).pipe(
      map(([data, columns]) => {
        const columnDefs = columns.map((column) => column.columnDef);
        return { data, columns, columnDefs };
      })
    );
  }

  ngOnInit() {
    this.validateInputs();

    this.table$ = this.setTable$();
  }

  private validateInputs() {
    if (this.hasActions) {
      if (!this.tableDataSource) {
        throw new Error(
          'Table with actions has to get TableDataSource instance'
        );
      }
    }
  }
}
