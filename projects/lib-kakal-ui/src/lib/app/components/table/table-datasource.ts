import { RowModel } from './models/row.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { TableOptions } from './table.component';

export interface EditRow<T> {
  row: RowModel<T>;
  options?: any;
}

export class TableDataSource<T> {
  private rows: RowModel<T>[];
  private rows$: BehaviorSubject<RowModel<T>[]>;
  private data$: BehaviorSubject<T[]>;
  private row$: Subject<RowModel<T>>;
  private edit$: Subject<EditRow<T>>;

  constructor(public data: T[], public options?: TableOptions<T>) {
    this.data$ = new BehaviorSubject<T[]>(this.data);
    this.rows$ = new BehaviorSubject<RowModel<T>[]>(
      this.setDataAsRoW(this.data, this.options)
    );
    this.row$ = new Subject();
    this.edit$ = new Subject();
  }

  disconnect(): void {}

  private setDataAsRoW(data: T[], options?: TableOptions<T>): RowModel<T>[] {
    this.rows = data
      .map((item: T) => new RowModel({ item }))
      .map((row: RowModel<T>) => {
        if (
          options?.editable &&
          options?.editable.indexOf(row.item['id']) > -1
        ) {
          row.editable = true;
        }

        if (options?.pending && options?.pending.indexOf(row.item['id']) > -1) {
          row.pending = true;
        }

        return row;
      });

    return this.rows;
  }

  public load(data?: T[]): void {
    this.rows$.next(this.setDataAsRoW(data));
  }

  public loadRows(rows: RowModel<T>[]) {
    this.rows = rows;
    this.rows$.next(rows);
  }

  public connect(): Observable<T[]> {
    return this.data$.asObservable();
  }
  public connectToRows(): Observable<RowModel<T>[]> {
    return this.rows$.asObservable();
  }

  public getRow(): Observable<RowModel<T>> {
    return this.row$.asObservable();
  }

  public emitRow(row: RowModel<T>) {
    this.row$.next(row);
  }

  public connectEdit(): Observable<EditRow<T>> {
    return this.edit$.asObservable();
  }

  public emitEdit(edit: EditRow<T>) {
    this.edit$.next(edit);
  }

  public getRows() {
    return [...this.rows];
  }
}
