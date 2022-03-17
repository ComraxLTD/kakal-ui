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
  switchMap,
} from 'rxjs';
import { Question } from '../../public-api';
import { FilterChangeEvent, FilterState } from './filters.types';

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

    if (Object.keys(newState).length === 0) {
      this.filterState.next(null);
    } else {
      this.filterState.next(newState);
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

  private setQuestionsAsFilters(questions: Question[]) {
    const formFilterTypes = questions
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

    return formFilterTypes;
  }

  private setValueAsFilterChange(
    filterValues,
    filterTypes
  ): FilterChangeEvent[] {
    return Object.keys(filterValues).map((key) => {
      return {
        ...filterTypes[key],
        value: filterValues[key],
      } as FilterChangeEvent;
    });
  }

  private setFiltersMap(filters: FilterChangeEvent[]) {
    return filters.reduce((acc, filterEvent) => {
      return {
        [filterEvent.key]: filterEvent,
        ...acc,
      };
    }, {} as { [key: string]: FilterChangeEvent });
  }

  private getFilterValues(formGroup: FormGroup) {
    return formGroup.valueChanges.pipe(skip(1));
  }

  private initFiltersMap(prop: {
    formGroup: FormGroup;
    questions: Question[];
  }): Observable<FilterState | null> {
    const { formGroup, questions } = prop;

    const values$ = this.getFilterValues(formGroup);
    const filterTypes = this.setQuestionsAsFilters(questions);

    const true$ = values$.pipe(
      filter((filterValues) => Object.keys(filterValues).length !== 0),
      map((filterValues) => {
        const filters = this.setValueAsFilterChange(filterValues, filterTypes);
        const filterMap = this.setFiltersMap(filters);
        return filterMap;
      })
    );
    const false$ = values$.pipe(
      filter((filterValues) => Object.keys(filterValues).length === 0),
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
