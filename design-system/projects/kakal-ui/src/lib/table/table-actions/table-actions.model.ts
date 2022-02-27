import { TableEvent } from '../models/table-events';
import { ActionState } from './table-actions.component';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

export class ActionStateModel {
  private show$: BehaviorSubject<boolean>;
  private disabled$: BehaviorSubject<boolean>;
  public event$?: Observable<TableEvent>;
  public event?: TableEvent;
  private _show: boolean;
  private _disabled: boolean;

  constructor(options: {
    _show: boolean;
    _disabled: boolean;
    event?: TableEvent;
  }) {
    this.show$ = new BehaviorSubject<boolean>(options._show);
    this.disabled$ = new BehaviorSubject<boolean>(options._disabled);
    this.event = options.event || 'default';
  }

  public getState$(): Observable<ActionState> {
    return combineLatest([
      this.disabled$.asObservable(),
      this.show$.asObservable(),
    ]).pipe(
      map(([disabled, show]) => {
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
