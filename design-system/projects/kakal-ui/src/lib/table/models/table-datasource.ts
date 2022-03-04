import { DataSource } from '@angular/cdk/collections';
import { FormDataSource } from '../../form/models/form-datasource';

import { TableColumnModel } from '../../columns/models/column.model';

import { ColumnState, RowState, TableState } from './table.state';
import { TableEvent } from '../models/table.events';

import { Observable, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export class TableDataSource<T = any> implements DataSource<T> {
  private dataSubject: BehaviorSubject<T[]>;
  private columnSubject: BehaviorSubject<TableColumnModel<T>[]>;

  private tableSubject: BehaviorSubject<TableState>;
  private columnsStateSubject: BehaviorSubject<ColumnState<T>>;

  private RowStateSubject: BehaviorSubject<RowState<T>>;
  // private events$: Observable<TableEvent>;

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
      forms: {},
      event: TableEvent.DEFAULT,
    });

    this.columnsStateSubject = new BehaviorSubject<ColumnState<T>>(null);
    this.RowStateSubject = new BehaviorSubject<RowState<T>>({
      event: TableEvent.DEFAULT,
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

  private getRowStateByEvent(event) {
    return this.RowStateSubject.asObservable().pipe(
      filter((rowState: RowState) => rowState.event === event)
    );
  }

  private updateSortDir(state: ColumnState<T>) {
    this.columnsStateSubject.next({ ...state });
  }

  private createAction(prop: { state: RowState }, event?: TableEvent) {
    const { state } = prop;
    this.RowStateSubject.next({ ...state, event });
  }

  // main actions object
  public actions = {
    // add: (prop: { state: RowState }) => this.createAction(prop, 'add'),

    // create: (prop: { state: RowState }) => this.createAction(prop, 'create'),

    // save: (prop: { state: RowState }) => this.createAction(prop, 'save'),

    // form: (prop: { state: RowState }) => this.createAction(prop, 'form'),

    edit: (prop: { state: RowState }) =>
      this.createAction(prop, TableEvent.EDIT),

    // cancel: (prop: { state: RowState }) => this.createAction(prop, 'cancel'),

    close: (prop: { state: RowState }) =>
      this.createAction(prop, TableEvent.CLOSE),

    // expand: (prop: { state: RowState }) => this.createAction(prop, 'expand'),

    delete: (prop: { state: RowState }) =>
      this.createAction(prop, TableEvent.DELETE),

    // selectRows: (prop: { state: RowState }) =>
    //   this.createAction(prop, 'selectRows'),

    // addOptions: (state?: RowState<T>) => this.addOptions(state),
    // updateOptions: (state: ColumnState<T>) => this.updateOptions(state),
    // updateSortDir: (state: ColumnState<T>) => this.updateSortDir(state),
    reset: (prop: { state: RowState }) =>
      this.createAction(prop, TableEvent.DEFAULT),
  };

  public listen$ = {
    default: () => this.getRowStateByEvent(TableEvent.DEFAULT),
    // add: () => this.getStateByEvent('add'),
    // create: () => this.getStateByEvent('create'),
    // save: () => this.getStateByEvent('save'),
    // form: () => this.getStateByEvent('form'),
    edit: () => this.getRowStateByEvent(TableEvent.EDIT),
    // cancel: () => this.getRowStateByEvent(TableEvent.C),
    close: () => this.getRowStateByEvent(TableEvent.CLOSE),
    // expand: () => this.getStateByEvent('expand'),
    // delete: () => this.getStateByEvent('delete'),
    // selectRows: () => this.getStateByEvent('selectRows'),
    // addOptions: () => this.getStateByEvent('addOptions'),
    // reset: () => this.getStateByEvent('reset'),
  };
}
