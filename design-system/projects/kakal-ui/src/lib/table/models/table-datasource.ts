import { DataSource } from '@angular/cdk/collections';
import { PaginationInstance } from 'ngx-pagination';

import {
  ColumnState,
  FetchState,
  FilterState,
  RowState,
  SortState,
  TableState,
} from './table.state';


import { FormDataSource } from '../../form/models/form-datasource';
import { FormActions } from '../../form/models/form.actions';
import { TableActions } from '../models/table-actions';
import { ColumnActions } from '../models/table-actions';
import { HeaderCellModel } from '../components/header-cells/models/header-cell.model';

import { Observable, BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class TableDataSource<T = any> implements DataSource<T> {
  private dataSubject: BehaviorSubject<T[]>;
  private columnSubject: BehaviorSubject<HeaderCellModel<T>[]>;

  private tableState: BehaviorSubject<TableState>;

  private columnState: BehaviorSubject<ColumnState<T>>;

  private rowState: BehaviorSubject<RowState<T>>;

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
      pagination: { itemsPerPage: 3, currentPage: 1 },
      forms: {},
      filters: {},
      event: FormActions.DEFAULT,
    });

    this.rowState = new BehaviorSubject<RowState<T>>({
      event: FormActions.DEFAULT,
    });

    this.columnState = new BehaviorSubject<ColumnState<T>>({
      event: ColumnActions.DEFAULT,
    });

    this.formDataSource = new FormDataSource();
  }

  disconnect(): void {}

  public load(data: T[], columns?: HeaderCellModel<T>[]): void {
    this.dataSubject.next([...data]);
    if (columns) {
      this.columnSubject.next([...columns]);
    }
  }

  public connect(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }

  public loadColumns(columns: HeaderCellModel<T>[]): void {
    return this.columnSubject.next(columns);
  }

  // get columns
  public connectColumns(): Observable<HeaderCellModel<T>[]> {
    return this.columnSubject.asObservable();
  }

  public getColumns(): HeaderCellModel<T>[] {
    return this.columnSubject.value;
  }

  // get row State
  public getRowState(): Observable<RowState<T>> {
    return this.rowState.asObservable();
  }

  // get column statement

  public connectColumnState(columnDef: string) {
    return this.columnState
      .asObservable()
      .pipe(
        filter((columnState: ColumnState) => columnState.key === columnDef)
      );
  }

  public loadColumnState({ columnState }): void {
    this.columnState.next(columnState);
  }

  // tableState
  public getTableState(): TableState {
    return this.tableState.value;
  }

  public loadTableState(state: { tableState: TableState }): void {
    const { tableState } = state;
    const oldState = this.getTableState();
    this.tableState.next({ ...oldState, ...tableState });
  }

  public connectTableState(): Observable<TableState> {
    return this.tableState.asObservable();
  }

  // pagination
  public loadPagination(state: { pagination: any }): void {
    const { pagination } = state;
    const oldState = this.getTableState();
    this.tableState.next({
      ...oldState,
      pagination: { ...oldState.pagination, ...pagination },
    });
  }

  public connectPagination() {
    return this.tableState.asObservable().pipe(
      map((tableState) => {
        return tableState.pagination;
      })
    );
  }

  public getTableStateByEvent(eventFilters: (FormActions | TableActions)[]) {
    return this.tableState.asObservable().pipe(
      filter((tableState) => {
        return eventFilters
          ? eventFilters.indexOf(tableState.event) !== -1
          : true;
      })
    );
  }

  public dispatchSort(action: { sortState: SortState }): void {
    const { sortState } = action;
    const newState = {
      ...this.tableState.getValue(),
      sort: { ...sortState },
    } as TableState;
    this.loadTableState({ tableState: newState });
  }

  public dispatchFilter(action: { filterState: FilterState }): void {
    const { filterState } = action;
    const newState = {
      ...this.tableState.getValue(),
      filters: {
        ...this.tableState.getValue().filters,
        ...filterState,
      },
    } as TableState;
    this.loadTableState({ tableState: newState });
  }

  public connectFetchState(): Observable<FetchState> {
    const sortState$ = this.selectState('sort') as Observable<SortState>;
    const filterState$ = this.selectState('filters') as Observable<FilterState>;
    const pageState$ = this.selectState(
      'pagination'
    ) as Observable<PaginationInstance>;

    return combineLatest([sortState$, filterState$, pageState$]).pipe(
      map(([sortState, filterState, pageState]) => {
        return {
          itemsPerPage: pageState.itemsPerPage,
          next: pageState.currentPage,
          ...sortState,
          ...filterState,
        } as FetchState;
      })
    );
  }

  private selectState(selector: keyof TableState) {
    return this.tableState.asObservable().pipe(
      map((tableState) => {
        return tableState[selector];
      })
    );
  }

  private getRowStateByEvent(event) {
    return this.rowState
      .asObservable()
      .pipe(filter((rowState: RowState) => rowState.event === event));
  }

  private createAction(prop: { state: RowState }, event?: FormActions) {
    const { state } = prop;
    this.rowState.next({ ...state, event });
  }

  public on(event: FormActions | TableActions): Observable<RowState<T>> {
    return this.getRowStateByEvent(event);
  }

  // main actions object
  public actions = {
    // add: (prop: { state: RowState }) => this.createAction(prop, 'add'),

    create: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.CREATE),

    save: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.SUBMIT),

    // form: (prop: { state: RowState }) => this.createAction(prop, 'form'),

    edit: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.EDIT),

    cancel: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.CANCEL),

    // close: (prop: { state: RowState }) =>
    //   this.createAction(prop, FormActions.CLOSE),

    // expand: (prop: { state: RowState }) => this.createAction(prop, 'expand'),

    delete: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.DELETE),

    reset: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.DEFAULT),
  };
}
