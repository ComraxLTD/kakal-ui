import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableBase } from '../../models/table.model';

@Component({
  selector: 'kkl-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnInit  {
  @Input() question!: TableBase;
  @Input() row!: any;
  @Input() data!: any;

  @Input() colsTemplate: any;

  column!: string;

  @Output() actionClicked = new EventEmitter<null>();

  constructor() {
  }
  ngOnInit(): void {
    this.column = this.question.key;
  }

  buttonClick() {
    this.actionClicked.emit(null);
  }


}
