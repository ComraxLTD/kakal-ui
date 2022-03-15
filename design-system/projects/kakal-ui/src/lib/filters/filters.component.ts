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


  // public dispatchFilter(action: { filterState: FilterState }): void {
  //   const { filterState } = action;
  //   /**
  //    * @Note: Dvir - we don't need to add an "internal self made redux" solution
  //    */
  //   const oldState = this.getTableState();
  //   const newState = {
  //     ...oldState,
  //     filters: {
  //       ...oldState.filters,
  //       ...filterState,
  //     },
  //     action: FetchActions.FILTER,
  //   } as TableState;

  //   /**
  //    * Remove null values
  //    */
  //   Object.keys(newState.filters).forEach(
  //     (k) => newState.filters[k] == null && delete newState.filters[k]
  //   );

  //   this.loadTableState({ tableState: newState });
  // }
}
