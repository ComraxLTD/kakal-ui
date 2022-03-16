import { Component, Input, OnInit } from '@angular/core';
import { FilterState } from './filters.types';
import { FiltersService } from './filters.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'kkl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() filtersState: Observable<FilterState>;
  @Input() filtersState$: Observable<FilterState>;

  public filters$: Observable<any>;

  constructor(private filterService: FiltersService) {}

  ngOnInit(): void {
    // this.filters$ = this.filtersState$.pipe(
    //   map((filterState: FilterState) => {
    //     console.log(filterState);

    //     const filters = Object.keys(filterState)
    //       .filter(
    //         (k) =>
    //           filterState[k].value !== '' &&
    //           filterState[k].value !== null &&
    //           filterState[k].value !== undefined
    //       )
    //       .reduce((acc, key) => {
    //         return {
    //           ...acc,
    //           [key]: filterState[key],
    //         };
    //       }, {});

    //     console.log(filters);
    //     return filters;
    //   })
    // );
  }

  public onRemoveFilter(key: string): void {
    this.filterService.dispatch({ filterState: { [key]: null } });
  }

  public onClearFilters(): void {
    // this.tableFilterService.clear();
  }
}
