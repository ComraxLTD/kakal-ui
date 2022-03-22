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

  private setQuestionsAsFilterState(questions: Question[]): FilterState {
    const filterState = questions
      .filter((q) => q.controlType !== 'autocomplete')
      .map((q) => {
        return {
          key: q.key,
          filterType: q.filterType,
          format: q.format,
        } as FilterChangeEvent;
      })
      .reduce((acc, filterEvent) => {
        return {
          [filterEvent.key]: filterEvent,
          ...acc,
        };
      }, {});

    return filterState;
  }

  private setFilterStateWithValue(valueMap, filterState: FilterState) {
    return Object.keys(filterState).reduce((acc, key) => {
      return {
        ...acc,
        [key]: {
          ...filterState[key],
          value: valueMap[key],
        } as FilterChangeEvent,
      };
    }, filterState);
  }

  private getFilterValues(formGroup: FormGroup) {
    return formGroup.valueChanges.pipe();
  }

  private initFiltersMap(prop: {
    formGroup: FormGroup;
    questions: Question[];
  }): Observable<FilterState | null> {
    const { formGroup, questions } = prop;

    const values$ = this.getFilterValues(formGroup);
    const initFilterState = this.setQuestionsAsFilterState(questions);

    const true$ = values$.pipe(
      filter((valueMap) => Object.keys(valueMap).length !== 0),
      map((valueMap) => {
        const filterState = this.setFilterStateWithValue(
          valueMap,
          initFilterState
        );
        return filterState;
      })
    );
    const false$ = values$.pipe(
      filter((valueMap) => Object.keys(valueMap).length === 0),
      map((_) => {
        return null;
      })
    );

    return merge(true$, false$);
  }

  public getFilterMap(prop: { formGroup: FormGroup; questions: Question[] }) {
    return this.initFiltersMap(prop).pipe(
      switchMap((filterState) => {
        this.dispatch({ filterState });
        return iif(() => filterState !== null, this.listen(), of(null));
      })
    );
  }
}
