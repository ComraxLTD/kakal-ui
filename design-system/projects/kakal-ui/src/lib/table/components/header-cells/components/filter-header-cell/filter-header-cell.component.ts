import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { MatListOption } from '@angular/material/list';

import {
  KKLSelectOption,
  KKLFormOption,
} from '../../../../../form/models/form.types';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderState, SortState } from '../../../../models/table.state';
import { ColumnActions } from '../../../../models/table-actions';

import { FilterType, FilterOption } from '../../models/header.types';
import { map, Observable, filter, of, merge } from 'rxjs';

import {
  setFilterOptionState,
  setRangeState,
  setSelectState,
} from './filter-header.helpers';
import { FilterRange } from '../filter-range-cell/filter-range-cell.component';

@Component({
  selector: 'kkl-filter-header-cell',
  templateUrl: './filter-header-cell.component.html',
  styleUrls: ['./filter-header-cell.component.scss'],
})
export class FilterHeaderCellComponent implements OnInit {
  @Input() public filterType: FilterType;
  @Input() public key: string;
  @Input() public format: string;
  @Input() public label: string;
  @Input() public sortBy: SortDirection;

  public control: FormControl = new FormControl();

  public options$: Observable<KKLSelectOption[]>;
  public dateRange$: Observable<FilterRange<Date>>;
  public numberRange$: Observable<FilterRange<number>>;

  @Output() menuOpened: EventEmitter<void> = new EventEmitter();
  @Output() filterChanged: EventEmitter<FilterOption> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {
    if (
      this.filterType === FilterType.SELECTED ||
      this.filterType === FilterType.MULTI_SELECTED
    ) {
      this.options$ = this.initOptionsWithState();
    }

    if (this.filterType === FilterType.DATE_RANGE) {
      this.dateRange$ = this.initRange$<Date>();
    }
    if (this.filterType === FilterType.NUMBER_RANGE) {
      this.numberRange$ = this.initRange$<number>();
    }
  }

  private setFilterState(value: any) {
    const filterOption: FilterOption = {
      key: this.key.toString(),
      value,
      filterType: this.filterType,
      format: this.format,
    };

    return { [this.key]: filterOption };
  }

  private initOptions$() {
    return this.tableDataSource.connectHeaderState(this.key).pipe(
      filter(
        (headerState: HeaderState) =>
          headerState.event === ColumnActions.UPDATE_FILTERS
      ),
      map((headerState: HeaderState) => headerState.options),
      filter((options) => options !== undefined)
    );
  }

  private initOptionsWithState() {
    const initOptions$ = this.initOptions$();
    const selectedOptions$ = setSelectState(this.tableDataSource, this.key);
    const tableStateOptions$ = setFilterOptionState(
      initOptions$,
      selectedOptions$
    );

    return merge(initOptions$, tableStateOptions$);
  }

  private initRange$<T>(): Observable<FilterRange<T>> {
    const initRange$: Observable<FilterRange> = of({ start: null, end: null });
    const tableStateRange$ = setRangeState<T>(
      this.tableDataSource,
      this.key,
      this.filterType
    );

    return merge(initRange$, tableStateRange$);
  }

  // DOE EVENTS

  public onValueChanged(formOption: KKLFormOption) {
    const { value } = formOption;

    if (this.filterType === 'select' || this.filterType === 'multiSelect') {
      // filter options
    } else {
      const filterState = this.setFilterState(value);
      this.tableDataSource.dispatchFilter({ filterState });
    }
  }

  public onSortChange(event: SortDirection) {
    const sortState = {
      sortBy: event,
      sorting: this.key,
    } as SortState;

    this.tableDataSource.dispatchSort({ sortState });
  }

  public onMenuOpen() {
    if (this.filterType === 'select' || this.filterType === 'multiSelect') {
      this.menuOpened.emit();
    }
  }

  public onRangeChange(event: Range, type) {
    const filterState = this.setFilterState(event);
    this.tableDataSource.dispatchFilter({ filterState });
  }

  public onSelectionChange(optionsList: MatListOption[]) {
    const options: KKLSelectOption[] = optionsList.map(
      (option: MatListOption) => {
        return option.value;
      }
    );

    const filterState = this.setFilterState(options);
    this.tableDataSource.dispatchFilter({ filterState });
  }
}
