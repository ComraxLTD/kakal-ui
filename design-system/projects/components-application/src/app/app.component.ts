import { Component } from '@angular/core';
import { RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}

  dataSource: any[] = [
    {
      committeeId: 'wtwrt',
      remiTikimCount: 'werwsfwe',
    },
  ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
      label: 'Edit',
    },
    {
      type: 'inlineDelete',
      icon: 'cancel',
      label: 'Delete',
    },
    {
      type: 'visibility',
      icon: 'visibility',
      label: 'Show',
    },
  ];

  columns: TableBase[] = [
    { key: 'committeeId', label: 'Id', controlType: 'number' },
    {
      key: 'remiTikimCount',
      label: 'remiTikimCount',
      controlType: 'number',
      button: { type: 'inlineExpand', icon: 'expand' },
    },
    { key: 'committeeDate', label: 'תאריך', controlType: 'date' },
  ];
}
