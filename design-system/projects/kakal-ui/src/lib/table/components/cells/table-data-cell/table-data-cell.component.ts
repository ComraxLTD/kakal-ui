import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { TableColumnModel } from '../../../../columns/models/column.model';
import { QuestionGroupModel } from '../../../../form/models/question-group.model';
import { RowState, TableState } from '../../../models/table.state';

@Component({
  selector: 'kkl-data-cell',
  templateUrl: './table-data-cell.component.html',
  styleUrls: ['./table-data-cell.component.scss'],
})
export class TableDataCellComponent implements OnInit {
  @Input() item: any;
  @Input() key: string;
  @Input() column: TableColumnModel;
  @Input() columnDef: string;
  @Input() tableState: TableState;
  @Input() group: QuestionGroupModel;

  @Input() cellTemplate: { [key: string]: TemplateRef<any> } = {};
  @Input() inputTemplate: { [key: string]: TemplateRef<any> } = {};

  constructor() {}

  ngOnInit(): void {
    this.inputTemplate = this.setFormTemplate(this.item, this.inputTemplate);
  }

  private setFormTemplate(
    item: any,
    formTemplate: { [key: string]: TemplateRef<any> }
  ) {
    const keys = Object.keys(item).filter((key) => key !== 'input');
    const inputTemplate = keys.reduce((acc, key) => {
      const template = acc[key] || acc['input'];

      return {
        ...acc,
        [key]: template,
      } as { [key: string]: TemplateRef<any> };
    }, formTemplate);

    delete inputTemplate.input;

    return inputTemplate as { [key: string]: TemplateRef<any> };
  }
}
