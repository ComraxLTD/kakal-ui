import { BehaviorSubject, concat, Observable } from 'rxjs';

export class ActionState<T> {
  private add$: BehaviorSubject<T>;
  private edit$: BehaviorSubject<T>;
  private expand$: BehaviorSubject<T>;
  private select$: BehaviorSubject<T>;
  private close$: BehaviorSubject<T>;
  private remove$: BehaviorSubject<T>;
  public state$: Observable<T>
  constructor(
  ) {
    this.add$ = new BehaviorSubject<T>(null);
    this.edit$ = new BehaviorSubject<T>(null);
    this.expand$ = new BehaviorSubject<T>(null);
    this.select$ = new BehaviorSubject<T>(null);
    this.close$ = new BehaviorSubject<T>(null);
    this.remove$ = new BehaviorSubject<T>(null);
    this.state$ = concat(this.add$, this.edit$, this.remove$, this.select$, this.remove$);
  }

  public expand(value: T) {
    this.expand$.next(value);
  }
  public close(value: T) {
    this.close$.next(value);
  }
  public add(value: T) {
    this.add$.next(value);
  }
  public edit(value: T) {
    this.edit$.next(value);
  }
  public select(value: T) {
    this.select$.next(value);
  }
  public remove(value: T) {
    this.remove$.next(value);
  }
}
