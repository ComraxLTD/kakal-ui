import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TableState } from '../../../models/table.state';
import { HeaderCellModel } from '../../header-cells/models/header-cell.model';

@Component({
  selector: 'kkl-form-row',
  templateUrl: './form-row.component.html',
  styleUrls: ['./form-row.component.scss'],
})
export class FormRowComponent implements OnInit {
  @Input() columns: HeaderCellModel[];
  @Input() tableState: TableState;

  @Input() public cellTemplate: { [key: string]: TemplateRef<any> } = {};

  constructor() {}

  ngOnInit(): void {
    this.cellTemplate = this.setCellTemplate();
    console.log(this.cellTemplate);
  }


  private setCellTemplate() {
    const { input, data } = this.cellTemplate;

    console.log(data)

    const inputKeys = this.tableState.forms['create'].controls;
    const cellKeys = this.columns.map((column) => column.columnDef.toString());

    return cellKeys.reduce((acc, key) => {
      const template = inputKeys[key] ? input : key === 'actions' ? null : data;

      return {
        [key]: template,
        ...acc,
      };
    }, {});
  }
}
