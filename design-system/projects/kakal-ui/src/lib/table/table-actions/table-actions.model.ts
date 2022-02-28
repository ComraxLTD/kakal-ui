import { TableEvent } from '../models/table-event';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

export interface ActionState {
  show: boolean;
  disabled: boolean;
  event?: TableEvent;
  event$?: Observable<TableEvent>;
}

export class ActionStateModel {
  private show$: BehaviorSubject<boolean>;
  private disabled$: BehaviorSubject<boolean>;
  public event$?: Observable<TableEvent>;
  public event?: TableEvent;
  private _show: boolean;
  private _disabled: boolean;

  constructor(options: {
    _show?: boolean;
    _disabled?: boolean;
    event: TableEvent;
  }) {
    this.show$ = new BehaviorSubject<boolean>(options._show || true);
    this.disabled$ = new BehaviorSubject<boolean>(options._disabled || false);
    this.event = options.event;
  }

  public getState$(): Observable<ActionState> {
    return combineLatest([
      this.disabled$.asObservable(),
      this.show$.asObservable(),
    ]).pipe(
      map(([disabled, show]) => {

        console.log(show)

        return {
          show,
          disabled,
          event: this.event,
        };
      })
    );
  }

  public getEvent(): Observable<TableEvent> {
    return this.event$;
  }

  public disable(value: boolean): void {
    this.disabled$.next(value);
  }

  public show(value: boolean): void {
    this.show$.next(value);
  }
}
