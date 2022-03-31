import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormActions } from '../../../../form/models/form.actions';
import { TableDataSource } from '../../../models/table-datasource';
import { TableState } from '../../../models/table.state';
import { HeaderCellModel } from '../../header-cells/models/header-cell.model';

@Component({
  selector: 'kkl-data-cell',
  templateUrl: './table-data-cell.component.html',
  styleUrls: ['./table-data-cell.component.scss'],
})
export class TableDataCellComponent implements OnInit {
  @Input() item: any;
  @Input() key: string;
  @Input() column: HeaderCellModel;
  @Input() columnDef: string;
  @Input() tableState: TableState;

  private _action: FormActions;

  @Input()
  get action(): FormActions {
    return this.action;
  }

  set action(value: FormActions) {
    this._action = value;
  }
  @Input() cellTemplate: { [key: string]: TemplateRef<any> } = {};
  @Input() inputTemplate: { [key: string]: TemplateRef<any> } = {};

  constructor(private tableDataSource: TableDataSource) {}

  ngOnInit(): void {}


}
