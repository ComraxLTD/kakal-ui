import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TableColumnModel } from '../../../columns/models/column.model';
import { TableState } from '../../models/table.state';

@Component({
  selector: 'kkl-table-data-cell',
  templateUrl: './table-data-cell.component.html',
  styleUrls: ['./table-data-cell.component.scss'],
})
export class TableDataCellComponent implements OnInit {
  @Input() tableState: TableState;
  @Input() column: TableColumnModel;
  @Input() row: any;
  @Input() key: string;

  @Input() cellTemplate: { [key: string]: TemplateRef<any> };
  @Input() inputTemplate: { [key: string]: TemplateRef<any> };

  constructor() {}

  ngOnInit(): void {
    console.log(this.column);
    console.log(this.row);
    console.log(this.key);
  }
}
