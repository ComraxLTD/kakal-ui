import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';

import { KKLSelectOption } from '../../../../../form/models/form.types';
import { FormOption } from '../../../../../form/models/form.options';
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
  @Output() sortChanged: EventEmitter<SortState> = new EventEmitter();
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

  private setFilterOption(value: any, format) {
    const filterOption: FilterOption = {
      key: this.column.columnDef.toString(),
      value,
      filterType: this.filterType,
      format: this.column.format,
    };

    return filterOption;
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

  public onValueChanged(formOption: FormOption) {
    const { value } = formOption;

    if (this.filterType === 'select' || this.filterType === 'multiSelect') {
      // filter options
    } else {
    }
  }

  public onSortChange(event: SortDirection) {
    this.sortChanged.emit({
      sortBy: event,
      sorting: this.column.columnDef,
    } as SortState);
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
    console.log(event);
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

  public onSelectionChange(event) {
    // this.tableFilterService.pushMany({
    //   selectedOptions,
    //   selected,
    //   item: { key: this.column.columnDef },
    // });
  }
}
