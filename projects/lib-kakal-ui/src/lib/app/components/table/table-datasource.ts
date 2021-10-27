import { DataSource } from '@angular/cdk/collections';
import { Observable, BehaviorSubject } from 'rxjs';

export class TableDataSource<T> implements DataSource<T> {
  private data$: BehaviorSubject<T[]>;

  constructor(data?: T[]) {
    this.data$ = new BehaviorSubject<T[]>(data || []);
  }

  disconnect(): void {}

  public load(data?: T[]): void {
    this.data$.next(data);
  }

  public connect(): Observable<T[]> {
    return this.data$.asObservable();
  }
}
