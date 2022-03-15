import { Component, Input, OnInit } from '@angular/core';
import { FilterState } from './filters.types';
import { FiltersService } from './filters.service';

@Component({
  selector: 'kkl-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  @Input() filtersState: FilterState;

  constructor(private filterService: FiltersService) {}

  ngOnInit(): void {}

  public removeFilter(key: string) {
    this.filterService.dispatch({ filterState: { [key]: null } });
  }
}
