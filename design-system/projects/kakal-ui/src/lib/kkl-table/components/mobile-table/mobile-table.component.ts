import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RowActionEvent, RowActionModel } from '../../models/table-actions.model';
import { TableBase } from '../../models/table.model';

@Component({
  selector: 'kkl-mobile-table',
  templateUrl: './mobile-table.component.html',
  styleUrls: ['./mobile-table.component.scss']
})
export class MobileTableComponent implements OnInit {

  @Input() oneColumns: TableBase[];
  @Input() dataSource: any[];

  @Input() colsTemplate: any;
  @Input() editItems: any[];

  @Output() actionClicked = new EventEmitter<RowActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(butt: RowActionModel, obj:any, key: string) {
    this.actionClicked.emit({action: butt.type, row: obj, key: key});
  }

}
