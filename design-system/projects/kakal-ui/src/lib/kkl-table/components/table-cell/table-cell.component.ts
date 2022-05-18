import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableBase } from '../../models/table.model';

@Component({
  selector: 'kkl-table-cell',
  templateUrl: './table-cell.component.html',
})
export class TableCellComponent implements OnInit  {
  @Input() question!: TableBase;
  @Input() data!: any;

  @Input() colsTemplate: any;
  @Input() isMobile: boolean;

  @Output() buttClick = new EventEmitter<null>();

  constructor() {
  }
  ngOnInit(): void {
  }

  buttonClick() {
    this.buttClick.emit(null);
  }


}
