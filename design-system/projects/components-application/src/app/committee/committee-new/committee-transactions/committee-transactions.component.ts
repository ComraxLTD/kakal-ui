import { Component, OnInit } from '@angular/core';
import { TableBase, RowActionModel } from '../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-committee-transactions',
  templateUrl: './committee-transactions.component.html',
  styleUrls: ['./committee-transactions.component.scss'],
})
export class CommitteeTransactionsComponent implements OnInit {
  title: string = 'סיכום עסקאות';

  // TABLE PROPS

  dataSource: any[] = [];

  // set questions array for the advanced form
  columns: TableBase[] = [
    {
      key: 'portfolioId',
      label: 'מספר תיק',
      controlType: 'select',
    },
    {
      key: 'observer',
      label: 'עמדת שקיף',
      controlType: 'select',
    },
    { key: 'objection', label: 'סיבת התנגדות', controlType: 'text' },
    { key: 'condition', label: 'תנאי', controlType: 'select' },
    { key: 'conditionDetails', label: 'פירוט התנאי', controlType: 'text' },
    {
      key: 'rami',
      label: 'עמדת רמ"י',
      controlType: undefined,
    },
    { key: 'status', label: 'סטטוס', controlType: 'select' },
  ];

  rowActions: RowActionModel[] = [
    {
      type: '',
      icon: 'chart',
    },
    {
      type: 'inlineEdit',
      icon: 'edit',
    },
    {
      type: 'deleteEdit',
      icon: 'delete',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  // DOM EVENTS

  onCreateNewSummery() {}
}
