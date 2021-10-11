import { Component, Input, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ColumnModel } from '../../components/columns/column.model';
import { TableOptions } from '../../components/table/table.component';

@Component({
  selector: 'app-table-ex',
  templateUrl: './table-ex.component.html',
  styleUrls: ['./table-ex.component.scss'],
})
export class TableExComponent<T> implements OnInit {
  @Input() public theme: ThemePalette;

  @Input() public data: T[];
  @Input() public columns: ColumnModel[];
  @Input() public model: T;
  @Input() public options: TableOptions<T>;
  
  constructor() {}

  ngOnInit(): void {}
}
