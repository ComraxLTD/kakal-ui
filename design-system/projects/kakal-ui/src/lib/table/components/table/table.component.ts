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

import { KKLActionCellDirective } from '../../components/cells/table-cell-action/cell-action.directive';
import { KKLDataCellDirective } from '../../components/cells/table-data-cell/cell-data.directive';
import { KKLHeaderCellDirective } from '../../components/header-cells/cell-header.directive';

import { HeaderCellModel } from '../../components/header-cells/models/header-cell.model';
import { ColumnSortOption } from '../../../columns/models/column-sort-option';
import { ColumnFilterOption } from '../../../columns/models/column-filter-options';
import { TableDataSource } from '../../models/table-datasource';
import { TableState } from '../../models/table.state';
import { TableStateService } from './table-state.service';

import { Observable, map, combineLatest, merge } from 'rxjs';

@Component({
  selector: 'kkl-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TableStateService],
})
export class TableComponent<T = any> implements OnInit {
  @ContentChild(KKLHeaderCellDirective)
  cellHeaderDirective: KKLHeaderCellDirective | undefined;

  @ContentChild(KKLDataCellDirective)
  cellDirective: KKLDataCellDirective | undefined;

  @ContentChild(KKLActionCellDirective)
  cellActionDirective: KKLActionCellDirective | undefined;

  @Input() public data$: Observable<T[]>;
  @Input() public columns$: Observable<HeaderCellModel<T>[]>;

  // table data instance for column keys
  @Input('itemKey') public key: keyof T;

  @Input() public theme: ThemePalette = 'accent';

  // if table have state modes
  @Input() public paginator: boolean;

  @Input() public expendable: boolean;
  @Input() public clickable: boolean;
  @Input() public accordion: boolean;
  @Input() public selectable: boolean;

  // if table have additional features
  @Input() public hasFooter: boolean;
  @Input() public hasActions: boolean;

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

  // emit row event expand : Observable<T>
  @Output() expand: EventEmitter<any> = new EventEmitter();

  // emit row : Observable<T>
  @Output() rowClicked: EventEmitter<T> = new EventEmitter();

  // main obj which subscribe to table data - rows & columns & pagination
  public table$: any;
  public tableState$: Observable<TableState>;

  public pagination: PaginationInstance;

  // cdk object that handle selection
  public selection: SelectionModel<T> = new SelectionModel<T>(true, [], true);

  constructor(
    private tableStateService: TableStateService,
    private tableDataSource: TableDataSource<T>
  ) {}

  private setColumns$() {
    return this.columns$.pipe(
      map((columns: HeaderCellModel<T>[]) => {
        if (this.hasActions) {
          columns.push(new HeaderCellModel({ columnDef: 'actions' }));
        }

        if (this.selectable) {
          columns.unshift(new HeaderCellModel({ columnDef: 'select' }));
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

  ngAfterViewInit() {
    if (this.hasActions && !this.cellActionDirective) {
      throw new Error('kkl-table missing *kklActionCell');
    }
  }

  private setTableState$() {
    return merge(
      this.tableDataSource.listenTableState(),
      this.tableStateService.onEditCloseEvent(this.tableDataSource),
      this.tableStateService.onEditEvent(this.tableDataSource)
    ).pipe(
      map((tableState: TableState) => {
        return tableState;
      })
    );
  }
}
