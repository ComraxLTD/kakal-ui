import { Component, Input, OnInit } from '@angular/core';
import { FilterState } from './filters.types';

@Component({
  selector: 'kkl-table-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  @Input() filtersState : FilterState

  constructor() {}

  ngOnInit(): void {}

  public removeFilter(key: string) {
    // this.tableDataSource.dispatchFilter({ filterState: { [key]: null } });
  }



}
