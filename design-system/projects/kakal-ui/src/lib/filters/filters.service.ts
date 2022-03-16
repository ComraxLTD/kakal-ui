import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterState } from './filters.types';

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

    console.log(filterState);
    console.log(oldState);

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

  private clearFilterState() {

  }
}
