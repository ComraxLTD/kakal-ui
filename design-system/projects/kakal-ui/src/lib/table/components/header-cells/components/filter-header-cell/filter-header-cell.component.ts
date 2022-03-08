import { Component, Input, OnInit } from '@angular/core';
import { HeaderCellModel } from '../../models/header-cell.model';

@Component({
  selector: 'kkl-filter-header-cell',
  templateUrl: './filter-header-cell.component.html',
  styleUrls: ['./filter-header-cell.component.scss']
})
export class FilterHeaderCellComponent implements OnInit {

  @Input() public column: HeaderCellModel;

  constructor() { }

  ngOnInit(): void {
  }

}
