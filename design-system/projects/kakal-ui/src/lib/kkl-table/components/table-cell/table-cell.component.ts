import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableBase } from '../../models/table.model';

@Component({
  selector: 'kkl-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnInit  {
  @Input() column!: TableBase;
  @Input() row!: any;
  @Input() data!: any;

  @Input() colsTemplate: any;

  columnKey!: string;

  @Output() actionClicked = new EventEmitter<void>();

  constructor() {
  }
  ngOnInit(): void {
    this.columnKey = this.column.key;
  }

  onClick() {
    this.actionClicked.emit();
  }


}
