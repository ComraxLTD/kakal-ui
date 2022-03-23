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

  public emit(state: FilterState): void {
    this.filterChanged$.next(state);
  }

  public stateChanged(): Observable<FilterState> {
    return this.filterChanged$.asObservable();
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

  public on(callback: (state: FilterState, ...args: any) => any, ...args: any) {
    const state = this.filterState$.getValue();
    return callback(state, ...args);
  }

  // use when filterState keys are different form api interface
  public mapFilterStateToLookups<T>(searchLookups: {
    [key: string]: keyof T;
  }): Observable<T> {
    const true$ = this.listen().pipe(
      filter((filterState) => filterState !== null),
      map((filterState) => {
        const searchLookupMap = searchLookups;
        return Object.keys(filterState).reduce((acc, key) => {
          return {
            ...acc,
            [searchLookupMap[key]]: filterState[key]?.value,
          };
        }, {} as any);
      })
    );
    const false$ = this.listen().pipe(
      filter((filterState) => filterState === null),
      map((_) => {
        return {};
      })
    );

    return merge(true$, false$);
  }
}
