import { Component, Input, OnInit } from '@angular/core';
import { TableDataSource } from '../../models/table-datasource';
import { TableState } from '../../models/table.state';

@Component({
  selector: 'kkl-table-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class KKLTableFiltersComponent implements OnInit {
  @Input() tableState: TableState;

  constructor(
    private tableDataSource: TableDataSource
  ) { }

  ngOnInit(): void {
  }

  removeFilter(key: string) {
    console.log("asdasda")

    this.tableDataSource.dispatchFilter({ filterState: { [key]: null } })
  }

}
