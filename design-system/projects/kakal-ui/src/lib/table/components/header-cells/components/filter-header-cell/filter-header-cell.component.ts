import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { MatListOption } from '@angular/material/list';

import {
  KKLSelectOption,
  KKLFormOption,
} from '../../../../../form/models/form.types';
import { TableDataSource } from '../../../../models/table-datasource';
import { ColumnState, SortState } from '../../../../models/table.state';
import { ColumnActions } from '../../../../models/table-actions';

import { map, Observable, filter, tap } from 'rxjs';
import { FilterType } from '../../models/header.types';
import { FilterOption } from '../../models/header.filter';



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

  @Output() menuOpened: EventEmitter<void> = new EventEmitter();
  @Output() filterChanged: EventEmitter<FilterOption> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {
    this.filterType = this.filterType;

    if (this.filterType === 'select' || this.filterType === 'multiSelect') {
      this.options$ = this.setOptions$();
    }
  }

  private setFilterOption(value: any, format?) {
    const filterOption: FilterOption = {
      key: this.key.toString(),
      value,
      filterType: this.filterType,
      format: this.format,
    };

    return filterOption;
  }

  private setFilterState(value: any) {
    const filterOption = this.setFilterOption(value);
    return { [this.key]: filterOption };
  }

  private setOptions$() {
    return this.tableDataSource.connectColumnState(this.key).pipe(
      filter(
        (columnState: ColumnState) =>
          columnState.event === ColumnActions.UPDATE_FILTERS
      ),
      map((columnState: ColumnState) => columnState.options),

      // TODO - optionFlag is true only og options is init
      tap(() => (this.optionFlag = false))
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
    console.log(optionsList);
    const options: KKLSelectOption[] = optionsList.map(
      (option: MatListOption) => {
        return option.value;
      }
    );

    const filterState = this.setFilterState(options);
    this.tableDataSource.dispatchFilter({ filterState });
  }
}
