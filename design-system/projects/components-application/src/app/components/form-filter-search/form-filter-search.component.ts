import { Component, OnInit } from '@angular/core';
import {
  FiltersService,
  FilterState,
  FilterType,
  FormChangeEvent,
  FormDataSource,
  SelectOption,
  OptionMap,
  Question,
} from '../../../../../kakal-ui/src/public-api';
import { MOCK_OPTIONS } from '../table/mock_data';
import { forkJoin, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-form-filter-search',
  templateUrl: './form-filter-search.component.html',
  styleUrls: ['./form-filter-search.component.scss'],
  providers: [FiltersService, FormDataSource],
})
export class FormFilterSearchComponent implements OnInit {
  questions: Question[] = [
    // key must be search for general search!
    {
      key: 'search',
      controlType: 'autocomplete',
    },

    { key: 'last_name' },
    // { key: 'part', controlType: 'counter' },
    { key: 'last_name', controlType: 'upload' },
    {
      key: 'multiSelectTest',
      label: 'multiSelectTest',
      controlType: 'select',
      multi: true,
    },
    {
      key: 'email',
      label: 'multiAutocompleteTest',
      controlType: 'autocomplete',
      multi: true,
    },
    {
      key: 'email',
      label: 'email',
      filterType: FilterType.SELECT,
      controlType: 'autocomplete',
    },
    { key: 'birthDay', label: 'יום הולדת', controlType: 'date' },
    { key: 'committee', label: 'committee', controlType: 'dateRange' },
    {
      key: 'city',
      filterType: FilterType.MULTI_SELECT,
      label: 'city',
      controlType: 'multiSelect',
    },
    {
      key: 'country',
      label: 'country',
      filterType: FilterType.SELECT,
      controlType: 'select',
    },
  ];

  public optionsMap$: Observable<OptionMap>;

  public filtersState$: Observable<FilterState>;

  constructor(private formDataSource: FormDataSource) {}

  ngOnInit(): void {
    this.optionsMap$ = this.getOptionsMap$();

    // this.searchGroup.formGroup.disable();
  }

  private getCurrencyOptions() {
    return of([
      { label: '$', value: 1 },
      { label: '₪', value: 2 },
      { label: '@', value: 3 },
    ] as SelectOption[]);
  }

  public getOptionsMap$(): Observable<OptionMap> {
    const city$ = of(MOCK_OPTIONS);
    const email$ = of(MOCK_OPTIONS);
    const country$ = of(MOCK_OPTIONS);
    const currency$ = this.getCurrencyOptions();

    return forkJoin([city$, email$, country$, currency$]).pipe(
      map(([city, email, country, currency]) => {
        return { city, email, country, currency };
      })
    );
  }

  // DOM EVENTS SECTION

  public onFilterChanged(state: FilterState) {}

  public onFormChanged(event: FormChangeEvent) {
    this.formDataSource.dispatch(event);
  }
}
