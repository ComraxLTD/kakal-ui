import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';

import { KKLSelectOption } from '../../../../../form/models/form.types';
import { FormOption } from '../../../../../form/models/form.options';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderCellModel } from '../../models/header-cell.model';
import { ColumnState } from '../../../../models/table.state';
import { ColumnActions } from '../../../../models/table-actions';

import { map, Observable, filter, tap } from 'rxjs';
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

  @Output() menuOpened: EventEmitter<void> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {
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
  public onSortChange(event: SortDirection) {}

  public onValueChanged(formOption: FormOption) {
    const { value } = formOption;
  }

  public onMenuOpen(optionFlag : boolean) {
    const { filterType } = this.column;

    if (
      (filterType === 'select' || filterType === 'multiSelect') &&
      optionFlag
    ) {
      this.optionFlag = false;
      this.menuOpened.emit();
    }
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
