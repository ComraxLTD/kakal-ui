import { RowModel } from './models/row.model';
import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';

export class TableDataSource<T> extends DataSource<T> {

  private $rows: BehaviorSubject<RowModel<T>[]>;
  private $data: BehaviorSubject<T[]>;

  constructor() {
    super();
    this.$data = new BehaviorSubject<T[]>([]);
    this.$rows = new BehaviorSubject<RowModel<T>[]>([]);;
  }


  disconnect(): void { }

  private setDataAsRoW(data: T[]) {
    return data.map((item: T) => new RowModel({ item }))
  }

  public load(data: T[]) {
    this.$rows.next(this.setDataAsRoW(data))
  }

  public loadRows(data: RowModel<T>[]) {
    this.$rows.next(data);
  }

  public connect(): Observable<T[]> {
    return this.$data.asObservable();
  }
  public connectToRows(): Observable<RowModel<T>[]> {
    return this.$rows.asObservable();
  }
}
