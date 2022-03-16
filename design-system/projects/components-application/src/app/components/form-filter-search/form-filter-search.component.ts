import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  FilterChangeEvent,
  FiltersService,
  FilterState,
  FilterType,
  FormService,
  OptionMap,
  Question,
  QuestionGroupModel,
} from '../../../../../kakal-ui/src/public-api';
import { MOCK_OPTIONS } from '../table/mock_data';
import { firstValueFrom, forkJoin, map, Observable, of } from 'rxjs';

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
      format: { type: 'area' },
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
      format: { type: 'currency' },
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

  async ngOnInit(): Promise<void> {
    this.control = new FormControl();

    this.searchGroup = await this.setGroup(this.questions);

    this.filtersState$ = this.filterService.getFilterMap({
      formGroup: this.searchGroup.formGroup,
      questions: this.questions,
    });
  }

  public getOptions(): Observable<OptionMap> {
    const city$ = of(MOCK_OPTIONS);
    const email$ = of(MOCK_OPTIONS);
    const country$ = of(MOCK_OPTIONS);

    return forkJoin([city$, email$, country$]).pipe(
      map(([city, email, country]) => {
        return { city, email, country };
      })
    );
  }

  private async setQuestionsWithOptions(
    questions: Question[]
  ): Promise<Question[]> {
    const optionsMap = await firstValueFrom(this.getOptions());
    return this.formService.setQuestionsWithOptions(questions, optionsMap);
  }

  private async setGroup(
    initQuestions: Question[]
  ): Promise<QuestionGroupModel> {
    const questions = await this.setQuestionsWithOptions(initQuestions);
    const group = this.formService.createQuestionGroup({
      questions,
    });

    return group;
  }

  // DOM EVENTS SECTION

  public onRemove(key: string) {
    this.searchGroup.getControl(key).reset();
  }

  public onRemoveMulti(filterChangeEvent: FilterChangeEvent) {
    const { key, value } = filterChangeEvent;
    this.searchGroup.getControl(key).setValue([...value]);
  }

  public onClear() {
    this.searchGroup.formGroup.reset();
  }
}
