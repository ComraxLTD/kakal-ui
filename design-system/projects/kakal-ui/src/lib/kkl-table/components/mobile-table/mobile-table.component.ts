import { Component, Input, OnInit } from '@angular/core';
import { TableBase } from '../../models/table.model';

@Component({
  selector: 'kkl-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.scss']
})
export class MobileTableComponent implements OnInit {

  @Input() oneColumns: TableBase[];
  @Input() dataSource: any[];
  constructor() { }

  ngOnInit(): void {
  }

}
