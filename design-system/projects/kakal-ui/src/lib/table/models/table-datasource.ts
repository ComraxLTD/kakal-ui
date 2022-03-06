import { DataSource } from '@angular/cdk/collections';
import { FormDataSource } from '../../form/models/form-datasource';

import { TableColumnModel } from '../../columns/models/column.model';

import { ColumnState, RowState, TableState } from './table.state';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { FormActions } from '../../form/models/form-events';
import { TableActions } from '../models/table.events';

export class TableDataSource<T = any> implements DataSource<T> {
  private dataSubject: BehaviorSubject<T[]>;
  private columnSubject: BehaviorSubject<TableColumnModel<T>[]>;

  private tableSubject: BehaviorSubject<TableState>;
  private columnsStateSubject: BehaviorSubject<ColumnState<T>>;

  private RowStateSubject: BehaviorSubject<RowState<T>>;

  private formDataSource: FormDataSource;

  constructor() {
    this.dataSubject = new BehaviorSubject<T[]>([]);
    this.columnSubject = new BehaviorSubject<TableColumnModel<T>[]>([]);
    this.tableSubject = new BehaviorSubject<TableState>({
      selected: {},
      editing: [],
      extended: [],
      disabled: [],
      activeColumns: [],
      pagination: { itemsPerPage: 3, currentPage: 1 },
      forms: {},
      event: FormActions.DEFAULT,
    });

    this.columnsStateSubject = new BehaviorSubject<ColumnState<T>>(null);
    this.RowStateSubject = new BehaviorSubject<RowState<T>>({
      event: FormActions.DEFAULT,
    });
    this.formDataSource = new FormDataSource();
  }

  disconnect(): void {}

  public load(data: T[], columns?: TableColumnModel<T>[]): void {
    this.dataSubject.next([...data]);
    if (columns) {
      this.columnSubject.next([...columns]);
    }
  }

  public connect(): Observable<T[]> {
    return this.dataSubject.asObservable();
  }

  public loadColumns(columns: TableColumnModel<T>[]): void {
    return this.columnSubject.next(columns);
  }
  public connectColumns(): Observable<TableColumnModel<T>[]> {
    return this.columnSubject.asObservable();
  }

  public getColumnsState(): Observable<ColumnState<T>> {
    return this.columnsStateSubject.asObservable();
  }

  public getRowState(): Observable<RowState<T>> {
    return this.RowStateSubject.asObservable();
  }

  public getTableState(): TableState {
    return this.tableSubject.value;
  }

  public loadTableState(state: { tableState: TableState }): void {
    const { tableState } = state;
    const oldState = this.getTableState();
    this.tableSubject.next({ ...oldState, ...tableState });
  }


  public connectTableState(): Observable<TableState> {
    return this.tableSubject.asObservable();
  }

  public getTableStateByEvent(eventFilters: (FormActions | TableActions)[]) {
    return this.tableSubject.asObservable().pipe(
      filter((tableState) => {
        return eventFilters
          ? eventFilters.indexOf(tableState.event) !== -1
          : true;
      })
    );
  }

  private getRowStateByEvent(event) {
    return this.RowStateSubject.asObservable().pipe(
      filter((rowState: RowState) => rowState.event === event)
    );
  }

  private updateSortDir(state: ColumnState<T>) {
    this.columnsStateSubject.next({ ...state });
  }

  private createAction(prop: { state: RowState }, event?: FormActions) {
    const { state } = prop;
    this.RowStateSubject.next({ ...state, event });
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

    // cancel: (prop: { state: RowState }) => this.createAction(prop, 'cancel'),

    close: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.CLOSE),

    // expand: (prop: { state: RowState }) => this.createAction(prop, 'expand'),

    delete: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.DELETE),

    reset: (prop: { state: RowState }) =>
      this.createAction(prop, FormActions.DEFAULT),
  };
}
