import { DataSource } from '@angular/cdk/collections';
import { FormDataSource } from '../../form/models/form-data-source.model';
import { TableEvent } from './table-event';

import { TableColumnModel } from '../../columns/models/column.model';

import { ColumnState, RowsState, TableState } from './table.state';
import { TableRowModel } from './table-row.model';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, switchMapTo, take } from 'rxjs/operators';

export class TableDataSource<T = any> implements DataSource<T> {
  private dataSubject: BehaviorSubject<T[]>;
  private columnSubject: BehaviorSubject<TableColumnModel<T>[]>;
  private rowSubject: BehaviorSubject<TableRowModel<T>[]>;

  private tableSubject: BehaviorSubject<TableState>;
  private columnsStateSubject: BehaviorSubject<ColumnState<T>>;

  private rowsStateSubject: BehaviorSubject<RowsState<T>>;
  private events$: Observable<TableEvent>;

  private formDataSource: FormDataSource;

  constructor() {
    this.dataSubject = new BehaviorSubject<T[]>([]);
    this.rowSubject = new BehaviorSubject<TableRowModel<T>[]>([]);
    this.columnSubject = new BehaviorSubject<TableColumnModel<T>[]>([]);
    this.tableSubject = new BehaviorSubject<TableState>({
      selected: {},
      editing: [],
      extended: [],
      disabled: [],
      activeColumns: [],
      form: null,
      event: 'default',
    });

    this.columnsStateSubject = new BehaviorSubject<ColumnState<T>>(null);
    this.rowsStateSubject = new BehaviorSubject<RowsState<T>>({
      event: 'default',
    });
    this.events$ = this.setEvents();
    this.formDataSource = new FormDataSource();
  }

  disconnect(): void {}

  public load(data: T[]): void {
    this.dataSubject.next([...data]);
  }

  public connect(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }
  public loadRows(rows: TableRowModel<T>[]): void {
    this.rowSubject.next([...rows]);
  }

  public connectRows(): Observable<TableRowModel<T>[]> {
    return this.rowSubject.asObservable();
  }

  public initRows(): Observable<boolean> {
    return this.rowSubject
      .asObservable()
      .pipe(map((rows) => rows.length === 0));
  }

  private loadColumns(columns: TableColumnModel<T>[]): void {
    this.columnSubject.next([...columns]);
  }

  public connectColumns(
    columns: TableColumnModel<T>[]
  ): Observable<TableColumnModel<T>[]> {
    this.loadColumns(columns);
    return this.columnSubject.asObservable();
  }

  public getColumnsState(): Observable<ColumnState<T>> {
    return this.columnsStateSubject.asObservable();
  }

  public getRowsState(): Observable<RowsState<T>> {
    return this.rowsStateSubject.asObservable();
  }

  public getEvents$(filters?: TableEvent[]): Observable<TableEvent> {
    return this.events$.pipe(
      filter((event) => {
        return filters ? filters.indexOf(event) !== -1 : true;
      })
    );
  }

  public getTableState(): TableState {
    return this.tableSubject.value;
  }
  public loadTableState(tableState: TableState): void {
    this.tableSubject.next(tableState);
  }

  public listenTableState(): Observable<TableState> {
    return this.tableSubject.asObservable();
  }

  public getTableStateByEvent(eventFilters: TableEvent[]) {
    return this.tableSubject.asObservable().pipe(
      filter((tableState) => {
        return eventFilters
          ? eventFilters.indexOf(tableState.event) !== -1
          : true;
      })
    );
  }

  private getStateByEvent(event: TableEvent): Observable<RowsState<T>> {
    return this.getEvents$([event]).pipe(switchMapTo(this.getRowsState()));
  }

  private setEvents(): Observable<TableEvent> {
    return this.rowsStateSubject.pipe(
      map((state) => {
        return state.event;
      })
    );
  }

  // method to update columns options = selectOptions or ColumnFilterOptions
  private updateOptions(state: ColumnState<T>) {
    this.columnsStateSubject.next({ ...state });
  }

  private updateSortDir(state: ColumnState<T>) {
    this.columnsStateSubject.next({ ...state });
  }

  private addOptions(data?: RowsState<T>) {
    this.rowsStateSubject.next({ ...data, event: 'selected' });
  }

  private reset(data) {
    this.rowsStateSubject.next({
      event: 'reset',
      ...data,
    });
  }

  private createAction(prop: { state: RowsState }, event?: TableEvent) {
    const { state } = prop;
    this.rowsStateSubject.next({ ...state, event });
  }

  // main actions object
  public actions = {
    add: (prop: { state: RowsState }) => this.createAction(prop, 'add'),

    create: (prop: { state: RowsState }) => this.createAction(prop, 'create'),

    save: (prop: { state: RowsState }) => this.createAction(prop, 'save'),

    form: (prop: { state: RowsState }) => this.createAction(prop, 'form'),

    edit: (prop: { state: RowsState }) => this.createAction(prop, 'edit'),

    cancel: (prop: { state: RowsState }) => this.createAction(prop, 'cancel'),

    close: (prop: { state: RowsState }) => this.createAction(prop, 'close'),

    expand: (prop: { state: RowsState }) => this.createAction(prop, 'expand'),

    delete: (prop: { state: RowsState }) => this.createAction(prop, 'delete'),

    selectRows: (prop: { state: RowsState }) =>
      this.createAction(prop, 'selectRows'),

    addOptions: (state?: RowsState<T>) => this.addOptions(state),
    updateOptions: (state: ColumnState<T>) => this.updateOptions(state),
    updateSortDir: (state: ColumnState<T>) => this.updateSortDir(state),
    reset: (state?) => this.reset(state),
  };

  public listen$ = {
    default: () => this.getStateByEvent('default'),
    add: () => this.getStateByEvent('add'),
    create: () => this.getStateByEvent('create'),
    save: () => this.getStateByEvent('save'),
    form: () => this.getStateByEvent('form'),
    edit: () => this.getStateByEvent('edit'),
    cancel: () => this.getStateByEvent('cancel'),
    close: () => this.getStateByEvent('close'),
    expand: () => this.getStateByEvent('expand'),
    delete: () => this.getStateByEvent('delete'),
    selectRows: () => this.getStateByEvent('selectRows'),
    addOptions: () => this.getStateByEvent('addOptions'),
    reset: () => this.getStateByEvent('reset'),
  };
}
