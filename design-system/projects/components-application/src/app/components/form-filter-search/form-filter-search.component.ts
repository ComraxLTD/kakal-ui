import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  FilterChangeEvent,
  FilterState,
  FilterType,
  FormService,
  Question,
  QuestionGroupModel,
} from '../../../../../kakal-ui/src/public-api';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-form-filter-search',
  templateUrl: './form-filter-search.component.html',
  styleUrls: ['./form-filter-search.component.scss'],
})
export class FormFilterSearchComponent implements OnInit {
  public control: FormControl;

  private questions: Question[] = [
    { key: 'first_name', validations: [Validators.required] },
    { key: 'last_name' },
    { key: 'email', controlType: 'email' },
    { key: 'phone', controlType: 'phone' },
    { key: 'city', controlType: 'select' },
    { key: 'date', controlType: 'date', validations: [Validators.required] },
  ];

  public searchGroup: QuestionGroupModel;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.control = new FormControl();

    this.searchGroup = this.setGroup(this.questions);

    this.getFiltersMap().subscribe((filters) => console.log(filters));
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
      map((form) => {
        Object.keys(form).forEach(
          (k) =>
            (form[k] === null || form[k] === undefined || form[k] === '') &&
            delete form[k]
        );

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
    return filters.reduce((acc, filterOption) => {
      return {
        [filterOption.key]: filterOption,
        ...acc,
      };
    }, {} as { [key: string]: FilterChangeEvent });
  }

  private getFiltersMap(): Observable<FilterState> {
    const filtersValues$ = this.getFilterValues();
    const filterTypes = this.getFiltersTypes();

    return filtersValues$.pipe(
      filter((filterValues) => Object.keys(filterValues).length !== 0),
      map((filterValues) => {
        const filters = this.setValueAsFilterChange(filterValues, filterTypes);
        const filterMap = this.setFiltersMap(filters);

        return filterMap;
      })
    );
  }
}
