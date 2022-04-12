import { Component, OnInit } from '@angular/core';
import {
  FiltersService,
  FilterState,
  SelectOption,
  OptionMap,
  Question,
  FormChangeEvent,
  FormActions,
  FilterLookups,
} from '../../../../../kakal-ui/src/public-api';
import { MOCK_OPTIONS } from '../table/mock_data';
import { forkJoin, map, Observable, of } from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-filter-search',
  templateUrl: './form-filter-search.component.html',
  styleUrls: ['./form-filter-search.component.scss'],
  providers: [FiltersService],
})
export class FormFilterSearchComponent implements OnInit {
  questions: Question[] = [
    // key must be search for general search!
    {
      key: 'search',
      label : 'חיפוש',
      controlType: 'autocomplete',
      asButton : true
    },

    {
      key: 'email',
      label: 'email',
      controlType: 'email',
    },
  ];

  control: FormControl = new FormControl();
  controlMulti: FormControl = new FormControl();
  key: string = 'select input';
  options$!: Observable<SelectOption[]>;


  public optionsMap$: Observable<OptionMap>;
  public optionsMap: OptionMap;

  public filtersState$: Observable<FilterState>;

  public hasFilters: boolean;

  constructor() {}

  ngOnInit(): void {
    this.hasFilters = true;

    this.optionsMap$ = this.getOptionsMap$();

    this.getOptionsMap$().subscribe((options: OptionMap) => {
      this.optionsMap = options;
    });
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

  public onFormChanged(state: FormChangeEvent) {
    const { action } = state;

    if (action === FormActions.OPTION_SELECTED) {
      const { key } = state;
      const optionsMap = { ...this.optionsMap };
      const options = [...optionsMap[key].slice(0, 4)];
      optionsMap[key] = [...options];
      this.optionsMap = { ...optionsMap };
    }
  }
  public onSearchChanged(state: FilterState) {
    console.log('searchChanged', state);
  }

  public onFilterLookUpChanged(state: FilterLookups) {
    console.log(state);
  }

  selectedOption(event: FormChangeEvent) {
    const { value } = event;
    console.log(value)
    this.controlMulti.setValue([value]);
  }
  selectedMultiOption(event: FormChangeEvent) {
    const { value } = event;
    const option = value[0];
    this.control.setValue(option);
  }
}
