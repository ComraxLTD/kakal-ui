import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  Currency,
  FilterChangeEvent,
  FiltersService,
  FilterState,
  FilterType,
  FormActions,
  FormChangeEvent,
  FormDataSource,
  FormService,
  GridProps,
  KKLSelectOption,
  OptionMap,
  Question,
  QuestionGroupModel,
  SelectOption,
} from '../../../../../kakal-ui/src/public-api';
import { MOCK_OPTIONS } from '../table/mock_data';
import {
  combineLatest,
  firstValueFrom,
  forkJoin,
  map,
  merge,
  Observable,
  of,
} from 'rxjs';

@Component({
  selector: 'app-form-filter-search',
  templateUrl: './form-filter-search.component.html',
  styleUrls: ['./form-filter-search.component.scss'],
  providers: [FiltersService, FormDataSource],
})
export class FormFilterSearchComponent implements OnInit {
  private questions: Question[] = [
    // first for the general search
    // key must be search!
    {
      key: 'search',
      controlType: 'autocomplete',
    },
    // {
    //   key: 'currency',
    //   controlType: 'currency',
    //   value: { sum: 100 } as Currency,
    // },

    { key: 'last_name' },
    // { key: 'part', controlType: 'counter' },
    { key: 'last_name', controlType: 'select' },
    {
      key: 'email',
      label: 'email',
      filterType: FilterType.SELECT,
      controlType: 'autocomplete',
    },
    // { key: 'phone', controlType: 'phone', value: '83928329' },
    // {
    //   key: 'area',
    //   filterType: FilterType.RANGE,
    //   controlType: 'range',
    //   format: { type: 'area' },
    //   questions: [
    //     {
    //       key: 'start',
    //       label: 'משטח',
    //       controlType: 'sum',
    //     },
    //     {
    //       key: 'end',
    //       label: 'עד שטח',
    //       controlType: 'sum',
    //     },
    //   ],
    // },
    // {
    //   key: 'currency',
    //   filterType: FilterType.RANGE,
    //   controlType: 'range',
    //   questions: [
    //     {
    //       key: 'start',
    //       label: 'מסכום',
    //       controlType: 'sum',
    //     },
    //     {
    //       key: 'end',
    //       label: 'עד סכום',
    //       controlType: 'sum',
    //     },
    //   ],
    //   format: { type: 'currency', args: (item) => '$' },
    // },
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
    // {
    //   key: 'date',
    //   filterType: FilterType.DATE_RANGE,
    //   controlType: 'dateRange',
    //   value: { start: new Date(), end: new Date() },
    // },
  ];

  public optionsMap$: Observable<OptionMap>;

  public searchGroup: QuestionGroupModel;

  public filtersState$: Observable<FilterState>;

  constructor(
    private filterService: FiltersService,
    private formService: FormService,
    private formDataSource: FormDataSource
  ) {}

  ngOnInit(): void {
    this.searchGroup = this.setGroup(this.questions);

    // this.filtersState$ = this.mergeFilterState();

    this.optionsMap$ = this.getOptionsMap$();
  }


  private getCurrencyOptions() {
    return of([
      { label: '$', value: 1 },
      { label: '₪', value: 2 },
      { label: '@', value: 3 },
    ] as KKLSelectOption[]);
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

  private setGroup(initQuestions: Question[]): QuestionGroupModel {
    const group = this.formService.createQuestionGroup({
      questions: initQuestions,
    });

    const advancedQuestions = [...group.questions];
    advancedQuestions.splice(0, 1);

    return { ...group, questions: advancedQuestions } as QuestionGroupModel;
  }

  // DOM EVENTS SECTION

  public onFilterChanged(state: FilterState) {
    console.log(state);
  }


  public onFormChanged(event: FormChangeEvent) {
    this.formDataSource.dispatch(event);
  }
}
