import { Injectable } from '@angular/core';
import { FilterLookups, FilterState } from './filters.types';
import { BehaviorSubject, filter, map, merge, Observable, Subject } from 'rxjs';

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

  public getFilterLookups(): FilterLookups {
    const filterState = this.getState();
    if (filterState) {
      return Object.keys(filterState).reduce((acc, key) => {
        return {
          ...acc,
          [key]: filterState[key]?.value,
        };
      }, {} as any);
    } else {
      return {}
    }
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

  private mapFilterStateToLookups<T>(
    filterState: FilterState,
    searchLookups: { [key: string]: keyof T }
  ) {
    return Object.keys(filterState).reduce((acc, key) => {
      return {
        ...acc,
        [searchLookups[key]]: filterState[key]?.value,
      };
    }, {} as any);
  }

  // use when filterState keys are different form api interface
  public listenToFilterState<T>(searchLookups?: {
    [key: string]: keyof T;
  }): Observable<FilterState> {
    const true$ = this.listen().pipe(
      filter((filterState) => filterState !== null),
      map((filterState) => {
        if (searchLookups) {
          filterState = this.mapFilterStateToLookups<T>(
            filterState,
            searchLookups
          );
        }
        return filterState;
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
