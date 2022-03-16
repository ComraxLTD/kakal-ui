import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  FilterChangeEvent,
  FiltersService,
  FilterState,
  FilterType,
  FormService,
  Question,
  QuestionGroupModel,
} from '../../../../../kakal-ui/src/public-api';
import { filter, iif, map, merge, Observable, of, skip, switchMap } from 'rxjs';
import { MOCK_OPTIONS } from '../table/mock_data';

@Component({
  selector: 'app-form-filter-search',
  templateUrl: './form-filter-search.component.html',
  styleUrls: ['./form-filter-search.component.scss'],
  providers: [FiltersService],
})
export class FormFilterSearchComponent implements OnInit {
  public control: FormControl;

  private questions: Question[] = [
    { key: 'first_name', validations: [Validators.required] },
    { key: 'last_name' },
    { key: 'email', controlType: 'email' },
    { key: 'phone', controlType: 'phone' },
    { key: 'city', controlType: 'multiSelect', options: MOCK_OPTIONS },
    { key: 'country', controlType: 'select', options: MOCK_OPTIONS },
    { key: 'date', controlType: 'date', validations: [Validators.required] },
  ];

  public searchGroup: QuestionGroupModel;

  public filtersState$: Observable<FilterState>;

  constructor(
    private filterService: FiltersService,
    private formService: FormService
  ) {}

  ngOnInit(): void {
    this.control = new FormControl();

    this.searchGroup = this.setGroup(this.questions);

    this.filtersState$ = this.getFiltersMap().pipe(
      switchMap((filterState) => {
        this.filterService.dispatch({ filterState });

        return iif(
          () => filterState !== null,
          this.filterService.listen(),
          of(null)
        );
      })
    );
  }

  private setGroup(questions: Question[]) {
    const group = this.formService.createQuestionGroup({
      questions,
    });

    return group;
  }

  private getFilterValues() {
    const { formGroup } = this.searchGroup;
    return formGroup.valueChanges.pipe(
      skip(1),
      map((form) => {
        // Object.keys(form).forEach(
        //   (k) =>
        //     (form[k] === null || form[k] === undefined || form[k] === '') &&
        //     delete form[k]
        // );

        return form;
      })
    );
  }
  private getFiltersTypes() {
    const filterTypesMap = {
      select: FilterType.SELECT,
      multiSelect: FilterType.MULTI_SELECT,
      date: FilterType.DATE_RANGE,
      sum: FilterType.NUMBER_RANGE,
      number: FilterType.NUMBER_RANGE,
      currency: FilterType.NUMBER_RANGE,
    };

    const formFilterTypes = this.questions
      .map((q) => {
        return { controlType: q.controlType, key: q.key };
      })
      .reduce((acc, { controlType, key }) => {
        return {
          [key]: filterTypesMap[controlType] || FilterType.SEARCH,
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
        key,
        value: filterValues[key],
        filterType: filterTypes[key],
      } as FilterChangeEvent;
    });
  }

  private setFiltersMap(filters: FilterChangeEvent[]) {
    return (
      filters
        // .filter(
        //   ({ value }) => value !== undefined && value !== null && value !== ''
        // )
        .reduce((acc, filterEvent) => {
          return {
            [filterEvent.key]: filterEvent,
            ...acc,
          };
        }, {} as { [key: string]: FilterChangeEvent })
    );
  }

  private clearFilters(filterMap: FilterState) {
    return Object.keys(filterMap)
      .filter(
        (k) =>
          filterMap[k].value !== '' &&
          filterMap[k].value !== null &&
          filterMap[k].value !== undefined
      )
      .reduce((acc, key) => {
        return {
          ...acc,
          [key]: filterMap[key],
        };
      }, {});
  }

  private getFiltersMap(): Observable<FilterState | null> {
    const filtersValues$ = this.getFilterValues();
    const filterTypes = this.getFiltersTypes();

    const true$ = filtersValues$.pipe(
      filter((filterValues) => Object.keys(filterValues).length !== 0),
      map((filterValues) => {
        console.log('true');
        const filters = this.setValueAsFilterChange(filterValues, filterTypes);
        const filterMap = this.setFiltersMap(filters);

        return filterMap;
      })
    );
    const false$ = filtersValues$.pipe(
      filter((filterValues) => Object.keys(filterValues).length === 0),
      map((_) => {
        console.log('false');
        return null;
      })
    );

    return merge(true$, false$);
  }
}
