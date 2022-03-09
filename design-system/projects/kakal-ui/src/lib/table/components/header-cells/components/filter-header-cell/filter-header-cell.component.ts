import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { MatListOption } from '@angular/material/list';

import { KKLSelectOption, KKLFormOption } from '../../../../../form/models/form.types';
import { TableDataSource } from '../../../../models/table-datasource';
import { FilterType, HeaderCellModel } from '../../models/header-cell.model';
import { ColumnState, SortState } from '../../../../models/table.state';
import { ColumnActions } from '../../../../models/table-actions';

import { map, Observable, filter } from 'rxjs';

export interface FilterOption {
  key: string;
  label?: string;
  value?: any;
  filterType?: FilterType;
  format?: string;
}

@Component({
  selector: 'kkl-filter-header-cell',
  templateUrl: './filter-header-cell.component.html',
  styleUrls: ['./filter-header-cell.component.scss'],
})
export class FilterHeaderCellComponent implements OnInit {
  @Input() public column: HeaderCellModel;

  public control: FormControl = new FormControl();

  public optionFlag: boolean = true;

  public options$: Observable<KKLSelectOption[]>;

  private filterType: FilterType;

  @Output() menuOpened: EventEmitter<void> = new EventEmitter();
  @Output() filterChanged: EventEmitter<FilterOption> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {
    this.filterType = this.column.filterType;

    if (
      this.column.filterType === 'select' ||
      this.column.filterType === 'multiSelect'
    ) {
      this.options$ = this.setOptions$();
    }
  }

  private setFilterOption(value: any, format?) {
    const filterOption: FilterOption = {
      key: this.column.columnDef.toString(),
      value,
      filterType: this.filterType,
      format: this.column.format,
    };

    return filterOption;
  }

  private setFilterState(value) {
    const filterOption = this.setFilterOption(value);
    return { [this.column.columnDef]: filterOption };
  }

  private setOptions$() {
    return this.tableDataSource
      .connectColumnState(this.column.columnDef.toString())
      .pipe(
        filter(
          (columnState: ColumnState) =>
            columnState.event === ColumnActions.UPDATE_FILTERS
        ),
        map((columnState: ColumnState) => columnState.options)
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
      sorting: this.column.columnDef,
    } as SortState;

    this.tableDataSource.dispatchSort({ sortState });
  }

  public onMenuOpen(optionFlag: boolean) {
    const { filterType } = this.column;

    if (
      (filterType === 'select' || filterType === 'multiSelect') &&
      optionFlag
    ) {
      this.optionFlag = false;
      this.menuOpened.emit();
    }
  }

  public onRangeChange(event: Range, type) {
    const filterState = this.setFilterState(event);
    this.tableDataSource.dispatchFilter({ filterState });
  }

  public onMultiSelectChange(
    selectedOptions: KKLSelectOption[],
    selected: any[]
  ) {
    // this.tableFilterService.pushMany({
    //   selectedOptions,
    //   selected,
    //   item: { key: this.column.columnDef },
    // });
  }

  public onSelectionChange(optionsList: MatListOption[]) {
    const options: KKLSelectOption[] = optionsList.map((option: MatListOption) => {
      return option.value;
    });

    const filterState = this.setFilterState(options);
    this.tableDataSource.dispatchFilter({ filterState });
  }
}
