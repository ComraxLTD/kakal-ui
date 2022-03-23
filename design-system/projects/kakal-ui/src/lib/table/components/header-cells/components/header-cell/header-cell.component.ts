import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { HeaderCellModel } from '../../models/header-cell.model';

@Component({
  selector: 'kkl-header-cell',
  templateUrl: './header-cell.component.html',
  styleUrls: ['./header-cell.component.scss'],
})
export class HeaderCellComponent implements OnInit {
  @Input('itemKey') key: string;
  @Input() column: HeaderCellModel;
  @Input() label: string;
  @Input() columnDef: string;
  @Input() headerTemplate: { [key: string]: TemplateRef<any> } = {};

  constructor() {}

  ngOnInit(): void {}
}
