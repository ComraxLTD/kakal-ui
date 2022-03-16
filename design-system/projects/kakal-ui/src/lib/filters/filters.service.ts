import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  FilterChangeEvent,
  FilterRange,
  FilterState,
  FilterType,
} from './filters.types';

@Injectable({
  providedIn: 'root',
})
export class FiltersService {
  private filterState: BehaviorSubject<FilterState>;
  constructor() {
    this.filterState = new BehaviorSubject<FilterState>(null);
  }

  public getState(): FilterState {
    return this.filterState.getValue();
  }

  public listen(): Observable<FilterState> {
    return this.filterState.asObservable();
  }

  public dispatch(prop: { filterState: FilterState }): void {
    const { filterState } = prop;
    /**
     * @Note: Dvir - we don't need to add an "internal self made redux" solution
     */
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

    this.filterState.next(newState);
  }

  private clearFilters(filterState: FilterState) {
    return Object.keys(filterState).filter(
      (k) =>
        filterState[k].value === null &&
        filterState[k].value === undefined &&
        filterState[k].value === ''
    );
  }

  private formatFilterValue(filterEvent: FilterChangeEvent) {
    switch (filterEvent.filterType) {
      case FilterType.NUMBER_RANGE: {
        filterEvent = {
          ...filterEvent,
          value: { end: 0, start: 0 } as FilterRange<number>,
        };
      }
    }
  }

  private mapFilters(filterState: FilterState, keys: string[]) {
    return keys.reduce((acc, k) => {
      return {
        [k]: filterState[k],
        ...acc,
      };
    }, {});
  }
}
