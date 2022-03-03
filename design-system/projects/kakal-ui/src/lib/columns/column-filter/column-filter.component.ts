import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { TableColumnModel } from '../models/column.model';
import { SelectOption } from '../../form/models/question-select.model';
import { QuestionTextModel } from '../../form/models/question-text.model';

import { ColumnFilterService } from './column-filter.service';
// import { TableFilterService } from '../../table-filters/table-filter.service';

import { MatListOption } from '@angular/material/list';
import { ListItem } from '../../list-item/list-item.model';
import { merge, Observable, of, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  skip,
} from 'rxjs/operators';
import { FormOption } from '../../form/models/form-data-source';
import { RangePipe } from '../../pipes/range.pipe';

import { ColumnFilterOption } from '../models/column-filter-options';
import { ColumnSortOption } from '../models/column-sort-option';

export interface Range {
  from: any;
  to: any;
}

@Component({
  selector: 'kkl-column-filter',
  templateUrl: './column-filter.component.html',
  styleUrls: ['./column-filter.component.scss'],
  providers: [{ provide: ColumnFilterService, useClass: ColumnFilterService }],
})
export class ColumnFilterComponent<T> implements OnInit {
  @Input() public column: TableColumnModel<T>;
  @Input() public filters$: Observable<ListItem<T>[]>;
  @Input() public filterSlots: {};

  public showSearch: boolean;
  public sortActive: boolean;

  public searchQuestion: QuestionTextModel;
  public amountFilter: QuestionGroupModel;

  private range: Range;

  public filterSubject: Subject<ColumnFilterOption<T>>;
  public filter$: Observable<ColumnFilterOption<T>>;

  public active$: Observable<boolean>;

  @Output() optionSelect: EventEmitter<Observable<ColumnFilterOption<T>>> =
    new EventEmitter();

  @Output() sortChange: EventEmitter<ColumnSortOption<T>> = new EventEmitter();

  @Output() dateSelect: EventEmitter<ColumnFilterOption<T>> =
    new EventEmitter();
  @Output() filterAutocomplete: EventEmitter<ColumnFilterOption<T>> =
    new EventEmitter();

  constructor(
    private columnFilterService: ColumnFilterService<T>,
    // private tableFilterService: TableFilterService<T>,
    private rangePipe: RangePipe
  ) {}

  ngOnInit(): void {
    this.filterSubject = new Subject();

    this.searchQuestion = this.columnFilterService.getSearchFilter();
    this.amountFilter = this.columnFilterService.getAmountGroup();

    // handle for active filter style

    this.active$ = this.setActiveColumn();

    this.filter$ = this.setFilter$();

    this.showSearch = this.setShowSearch();
    this.onCurrencyFilter();
  }

  private setShowSearch(): boolean {
    const question = this.column.filterQuestion;
    return question ? question['options'].length > 6 : true;
  }

  // set active column style method
  private setActiveColumn(): Observable<boolean> {
    // return this.tableFilterService
    //   .getFiltersByKey(this.column.columnDef.toString(), [
    //     'push',
    //     'pushMany',
    //     'remove',
    //     'clear',
    //   ])
    //   .pipe(map((filters) => filters.length > 0));

    return of(false);
  }

  // main method to emit filter option
  private filterEvent(option: ColumnFilterOption<T>) {
    const ColumnFilterOption: ColumnFilterOption<T> = {
      ...option,
      column: this.column,
    };

    // push to table-filter array

    // this.tableFilterService.push(ColumnFilterOption);

    // emit data outside
    this.optionSelect.emit(of(ColumnFilterOption));
  }

  private emitFilter(
    ColumnFilterOption: ColumnFilterOption<T>
  ): ColumnFilterOption<T> {
    const { value, label } = ColumnFilterOption;

    const filter: ColumnFilterOption<T> = {
      column: this.column,
      label,
      value$: of(value),
      value,
    };

    if (!this.column.filterQuestion) {
      this.filterEvent(filter);
    }

    this.filterAutocomplete.emit(filter);

    return filter;
  }

  // method which fire currency filter value
  private onCurrencyFilter() {
    return this.filterSubject.asObservable().pipe(
      skip(2),
      filter((filter: ColumnFilterOption<T>) => filter.type === 'amount'),
      map((ColumnFilterOption) => ColumnFilterOption.value),
      map((value: Range) => {
        const range: Range = Object.entries(value).reduce(
          (acc, [key, value]) => {
            const amount = value.toString().split(',').join('');

            return {
              ...acc,
              [key]: +amount,
            };
          },
          { from: 0, to: 0 }
        );

        return range;
      }),
      debounceTime(400),
      map((range: Range) => {
        const label = this.rangePipe.transform(range, 'currency');
        return { label, value: range };
      }),
      map((formOption: FormOption) => {
        return this.emitFilter(formOption);
      })
    );
  }

  // method which fire filterAutocomplete  search value
  public onAutocomplete(): Observable<ColumnFilterOption<T>> {
    return this.searchQuestion.control.valueChanges.pipe(
      skip(1),
      debounceTime(400),
      distinctUntilChanged(),
      map((value: string) => {
        return this.emitFilter({ value, label: value });
      })
    );
  }
  // method which combine the stream of autocomplete and currency
  private setFilter$(): Observable<ColumnFilterOption<T>> {
    const currencyFilter$ = this.onCurrencyFilter();
    const autocompleteFilter$ = this.onAutocomplete();
    return merge(autocompleteFilter$, currencyFilter$);
  }

  // EVENTS SECTION

  public onRangeDateEvent(name: string, date: string) {
    const range = { ...this.range };
    name === 'from' ? (range.from = date) : (range.to = date);
    this.range = { ...range };
    const label = this.rangePipe.transform(this.range, 'date');
    this.filterEvent({ label, value: this.range });
  }

  public onSelectionChange(list: MatListOption[]): void {
    const ColumnFilterOptions: SelectOption[] =
      this.column.filterQuestion['options'];

    // get selected options from mat-list
    const selected: number[] = list.map(
      (listOption: MatListOption) => listOption.value
    );

    // get selected options label
    const labels: string[] = ColumnFilterOptions.filter(
      (option: SelectOption) => selected.indexOf(option.value) !== -1
    ).map((option) => option.label);

    const selectedOptions: SelectOption[] = ColumnFilterOptions.filter(
      (option: SelectOption) => selected.indexOf(option.value) !== -1
    ).map((option) => option);

    if (this.column?.filterQuestion['multi']) {
      this.onMultiSelectChange(selectedOptions, selected);
    } else {
      this.filterEvent({
        label: labels[0],
        value: selected[0],
        option: selectedOptions[0],
      });
    }
  }

  private onMultiSelectChange(
    selectedOptions: SelectOption[],
    selected: any[]
  ) {
    // this.tableFilterService.pushMany({
    //   selectedOptions,
    //   selected,
    //   item: { key: this.column.columnDef },
    // });
  }

  public onSortClick() {
    const sortOption: ColumnSortOption<T> = {
      column: this.column,
      dir: this.column.sortDir,
    };
    this.sortChange.emit(sortOption);
  }

  public onCurrencyAutocomplete(formOption: FormOption) {
    const value = this.amountFilter.getValue();
    this.filterSubject.next({
      value,
      type: 'amount',
    });
  }
}
