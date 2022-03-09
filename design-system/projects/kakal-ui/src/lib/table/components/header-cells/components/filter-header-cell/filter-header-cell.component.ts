import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';

import { FormOption } from '../../../../../form/models/form.options';
import { TableDataSource } from '../../../../models/table-datasource';
import { HeaderCellModel } from '../../models/header-cell.model';

@Component({
  selector: 'kkl-filter-header-cell',
  templateUrl: './filter-header-cell.component.html',
  styleUrls: ['./filter-header-cell.component.scss'],
})
export class FilterHeaderCellComponent implements OnInit {
  @Input() public column: HeaderCellModel;

  public control: FormControl = new FormControl();

  private openMenuFlag: boolean = false;

  @Output() menuOpened: EventEmitter<void> = new EventEmitter();

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {}

  public onSortChange(event: SortDirection) {}

  public onValueChanged(formOption: FormOption) {
    const { value } = formOption;
  }

  public onMenuOpen() {
    const { filterType } = this.column;

    if (filterType === 'select' || filterType === 'multiSelect') {
      this.openMenuFlag = true;
      this.menuOpened.emit();
    }
  }
}
