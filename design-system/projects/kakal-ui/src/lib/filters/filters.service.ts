import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  filter,
  iif,
  map,
  merge,
  Observable,
  of,
  pluck,
  skip,
  Subject,
  switchMap,
} from 'rxjs';
import { Question } from '../../public-api';
import { FilterChangeEvent, FilterState } from './filters.types';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filterState$: BehaviorSubject<FilterState>;
  private filterChanged$: Subject<FilterState>;
  constructor() {
    this.filterState$ = new BehaviorSubject<FilterState>(null);
    this.filterChanged$ = new Subject<FilterState>();
  }

  public dispatchState(state: FilterState): void {
    this.filterChanged$.next(state);
  }

  public stateChanged(): Observable<FilterState> {
    return this.filterChanged$.asObservable();
  }

  public on(callback: (state: FilterState, ...args: any) => any, ...args: any) {
    const state = this.filterState$.getValue();
    return callback(state, ...args);
  }

  public getState(): FilterState {
    return this.filterState$.getValue();
  }

  public listen(): Observable<FilterState> {
    return this.filterState$.asObservable();
  }

  public dispatch(prop: { filterState: FilterState }): void {
    const { filterState } = prop;
    /**
     * @Note: Dvir - we don't need to add an "internal self made redux" solution
     */

    // if null return null
    if (!filterState) {
      return this.filterState$.next(null);
    }

    const oldState = this.getState();

    const newState = {
      ...oldState,
      ...filterState,
    } as FilterState;

    /**
     * Remove null values
     */
    Object.keys(newState).forEach(
      (k) =>
        (newState[k] === null ||
          newState[k].value === null ||
          newState[k].value === undefined ||
          newState[k].value === '') &&
        delete newState[k]
    );

    if (Object.keys(newState).length === 0) {
      this.filterState$.next(null);
    } else {
      this.filterState$.next(newState);
    }
  }

  public removeMultiFilter(option: { key: string; index: number }) {
    const { key, index } = option;
    const filterState = this.getState();

    const filters = filterState[key].value;
    filters.splice(index, 1);

    const filterEvent =
      filters.length === 0
        ? null
        : ({ ...filterState[key], value: filters } as FilterChangeEvent);

    const newState = {
      ...filterState,
      [key]: filterEvent,
    };
    return newState;
  }
}
