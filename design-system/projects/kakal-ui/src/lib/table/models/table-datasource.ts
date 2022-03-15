import {
  HeaderState,
  FetchState,
  FilterState,
  RowState,
  SortState,
  TableState,
} from './table.state';

import { FormDataSource } from '../../form/models/form-datasource';
import { FormActions } from '../../form/models/form.actions';
import { FetchActions, TableActions } from '../models/table-actions';
import { TableSelector } from '../models/table.selectors';
import { ColumnActions } from '../models/table-actions';
import { HeaderCellModel } from '../components/header-cells/models/header-cell.model';

import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { filter, map, pluck } from 'rxjs/operators';

import * as uuid from 'uuid';

export class TableDataSource<T = any> {
  private dataSubject: BehaviorSubject<T[]>;
  private columnSubject: BehaviorSubject<HeaderCellModel<T>[]>;

  private tableState: BehaviorSubject<TableState>;

  private headerState: BehaviorSubject<HeaderState<T>>;

  // private rowState: Subject<RowState<T>>;

  private formDataSource: FormDataSource;


  constructor() {
    this.dataSubject = new BehaviorSubject<T[]>([]);
    this.columnSubject = new BehaviorSubject<HeaderCellModel<T>[]>([]);
    this.tableState = new BehaviorSubject<TableState>({
      selected: {},
      editing: [],
      extended: [],
      disabled: [],
      activeColumns: [],
      pagination: {
        id: uuid.v4(),
        itemsPerPage: 10,
        currentPage: 1,
        pages: [10, 20, 30],
      },
      forms: {},
      filters: {},
      action: FormActions.DEFAULT,
    });

    // this.rowState = new Subject<RowState<T>>();

    this.headerState = new BehaviorSubject<HeaderState<T>>({
      action: ColumnActions.DEFAULT,
    });

    this.formDataSource = new FormDataSource();

  }

  public load(data: T[], columns?: HeaderCellModel<T>[]): void {
    this.dataSubject.next([...data]);
    if (columns) {
      this.columnSubject.next([...columns]);
    }
  }
  public listen(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }

  public getData(): T[] {
    return this.dataSubject.value;
  }

  public loadColumns(columns: HeaderCellModel<T>[]): void {
    return this.columnSubject.next(columns);
  }

  // get columns
  public listenColumns(): Observable<HeaderCellModel<T>[]> {
    return this.columnSubject.asObservable();
  }

  public getColumns(): HeaderCellModel<T>[] {
    return this.columnSubject.value;
  }

  // get row State
  // public getRowState(): Observable<RowState<T>> {
  //   return this.rowState.asObservable();
  // }

  // get column statement

  public listenHeaderState(columnDef: string) {
    return this.headerState
      .asObservable()
      .pipe(
        filter((headerState: HeaderState) => headerState.key === columnDef)
      );
  }

  public loadHeaderState({ headerState }): void {
    this.headerState.next(headerState);
  }

  // Table State Section

  public loadTableState(state: { tableState: TableState }): void {
    const { tableState } = state;
    const oldState = this.getTableState();
    this.tableState.next({ ...oldState, ...tableState });
  }

  public listenTableState(): Observable<TableState> {
    return this.tableState.asObservable();
  }
  public getTableState(): TableState {
    return this.tableState.value;
  }

  public select(selector: TableSelector) {
    return this.tableState.asObservable().pipe(pluck(selector));
  }

  public listenByAction(options: {
    actions?: (TableActions | FetchActions | FormActions)[];
    selector?: TableSelector;
  }): Observable<TableState> {
    const { actions, selector } = options;
    return this.tableState
      .asObservable()
      .pipe(filter((tableState) => actions.indexOf(tableState.action) !== -1));
  }

  // pagination
  public dispatchPagination(state: { pageState: any }): void {
    const { pageState } = state;
    const oldState = this.getTableState();
    const newState = {
      ...oldState,
      pagination: { ...oldState.pagination, ...pageState },
      action: FetchActions.PAGING,
    } as TableState;
    this.loadTableState({ tableState: newState });
  }

  // sort
  public dispatchSort(action: { sortState: SortState }): void {
    const { sortState } = action;
    const oldState = this.getTableState();

    const newState = {
      ...oldState,
      sort: { ...sortState },
      action: FetchActions.SORT,
    } as TableState;
    this.loadTableState({ tableState: newState });
  }

  /**
   * To remove a key send a null value
   */
  public dispatchFilter(action: { filterState: FilterState }): void {
    const { filterState } = action;
    /**
     * @Note: Dvir - we don't need to add an "internal self made redux" solution
     */
    const oldState = this.getTableState();
    const newState = {
      ...oldState,
      filters: {
        ...oldState.filters,
        ...filterState,
      },
      action: FetchActions.FILTER,
    } as TableState;

    /**
     * Remove null values
     */
    Object.keys(newState.filters).forEach(
      (k) => newState.filters[k] == null && delete newState.filters[k]
    );

    this.loadTableState({ tableState: newState });
  }

  public listenFetchState(): Observable<FetchState> {
    return this.tableState.asObservable().pipe(
      // skip(1),
      filter(
        (tableState) =>
          tableState.action === TableActions.INIT_STATE ||
          tableState.action === FetchActions.FILTER ||
          tableState.action === FetchActions.SORT ||
          tableState.action === FetchActions.PAGING
      ),
      map((tableState: TableState) => {
        return {
          itemsPerPage: tableState.pagination.itemsPerPage,
          next: tableState.pagination.currentPage,
          ...tableState.sort,
          ...tableState.filters,
        } as FetchState;
      })
    );
  }
}
