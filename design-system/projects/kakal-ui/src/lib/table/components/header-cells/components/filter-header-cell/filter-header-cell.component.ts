import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';

import { KKLSelectOption } from '../../../../../form/models/form.types';
import { FormOption } from '../../../../../form/models/form.options';
import { TableDataSource } from '../../../../models/table-datasource';
import { FilterType, HeaderCellModel } from '../../models/header-cell.model';
import { ColumnState } from '../../../../models/table.state';
import { ColumnActions } from '../../../../models/table-actions';

import { map, Observable, filter } from 'rxjs';

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
  @Output() filterChanged: EventEmitter<void> = new EventEmitter();

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

  public onSortChange(event: SortDirection) {}

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

  public onRangeChange(event: Range) {
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
