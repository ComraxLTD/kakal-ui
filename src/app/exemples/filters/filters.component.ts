import { Component, Input, OnInit } from '@angular/core';
import { FilterModel } from 'src/app/components/cards/card-filter/card-filter.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  @Input() filters: FilterModel[];

  constructor() {}

  ngOnInit(): void {}
}
