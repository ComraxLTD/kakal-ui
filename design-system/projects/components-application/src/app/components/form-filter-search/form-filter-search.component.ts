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
    {
      key: 'first_name',
    },
    { key: 'last_name' },
    {
      key: 'email',
      filterType: FilterType.SELECT,
      controlType: 'autocomplete',
      options: MOCK_OPTIONS,
    },
    { key: 'phone', controlType: 'phone' },
    {
      key: 'area',
      filterType: FilterType.RANGE,
      controlType: 'range',
      format: 'area',
      questions: [
        {
          key: 'start',
          label: 'משטח',
          controlType: 'sum',
        },
        {
          key: 'end',
          label: 'עד שטח',
          controlType: 'sum',
        },
      ],
    },
    {
      key: 'currency',
      filterType: FilterType.RANGE,
      controlType: 'range',
      questions: [
        {
          key: 'start',
          label: 'מסכום',
          controlType: 'sum',
        },
        {
          key: 'end',
          label: 'עד סכום',
          controlType: 'sum',
        },
      ],
      format: 'currency',
    },
    {
      key: 'city',
      filterType: FilterType.MULTI_SELECT,
      controlType: 'multiSelect',
      options: MOCK_OPTIONS,
    },
    {
      key: 'country',
      filterType: FilterType.SELECT,
      controlType: 'select',
      options: MOCK_OPTIONS,
    },
    {
      key: 'date',
      filterType: FilterType.DATE_RANGE,
      controlType: 'date',
    },
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

    console.log(this.searchGroup.questions);

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
        console.log(form);
        return form;
      })
    );
  }
  private getFiltersTypes() {
    const formFilterTypes = this.questions
      .map((q) => {
        return { key: q.key, filterType: q.filterType };
      })
      .reduce((acc, { filterType, key }) => {
        return {
          [key]: filterType,
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
