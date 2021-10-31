import { Component, Input, OnInit } from '@angular/core';
import { FilterModel } from '../../components/cards/card-filter/card-filter.model';

@Component({
  selector: 'kkl-filters-ex',
  templateUrl: './filters-ex.component.html',
  styleUrls: ['./filters-ex.component.scss']
})
export class  implements OnInit {

  @Input() filters: FilterModel[];

  constructor() {}

  ngOnInit(): void {}
}
