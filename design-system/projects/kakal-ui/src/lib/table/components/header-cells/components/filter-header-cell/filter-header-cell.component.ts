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

import { map, Observable, filter, tap, take, switchMap } from 'rxjs';
import { FilterType } from '../../models/header.types';
import { FilterOption } from '../../models/header.filter';

import {
  setDateRangeState,
  setNumberRangeState,
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

  public optionFlag: boolean = true;

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
      this.dateRange$ = this.initRangeDate$().pipe(
        map((range) => {
          return {
            ...range,
            type: this.filterType,
          };
        })
      );
    }
    if (this.filterType === FilterType.NUMBER_RANGE) {
      this.numberRange$ = this.initNumberDate$().pipe(
        map((range) => {
          return {
            ...range,
            type: this.filterType,
          };
        })
      );
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
      take(1),
      map((headerState: HeaderState) => headerState.options),
      // TODO - optionFlag is true only if options is init
      tap(() => (this.optionFlag = false))
    );
  }

  private initOptionsWithState() {
    const options$ = this.initOptions$();
    const optionsFilterState$ = setSelectState(this.tableDataSource, this.key);
    return options$.pipe(
      switchMap((options: KKLSelectOption[]) => {
        return optionsFilterState$.pipe(
          map((selectedOptions: string[]) => {
            return options.map((option) => {
              return {
                ...option,
                selected: selectedOptions.indexOf(option.value) !== -1,
              } as KKLSelectOption;
            });
          })
        );
      })
    );
  }

  private initRangeDate$(): Observable<FilterRange<Date>> {
    return setDateRangeState(this.tableDataSource, this.key).pipe(
      tap((value) => console.log(value))
    );
  }
  private initNumberDate$(): Observable<FilterRange<number>> {
    return setNumberRangeState(this.tableDataSource, this.key).pipe(
      tap((value) => console.log(value))
    );
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

  public onMenuOpen(optionFlag: boolean) {
    if (
      (this.filterType === 'select' || this.filterType === 'multiSelect') &&
      optionFlag
    ) {
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
