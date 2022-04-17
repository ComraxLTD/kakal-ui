import { Component, OnInit } from '@angular/core';
import { TableBase, RowActionModel } from '../../../../../../kakal-ui/src/public-api';
import { RecordsPaymentsPanelService } from '../records-payments.service';

@Component({
  selector: 'app-payments-revenue-panel',
  templateUrl: './payments-revenue-panel.component.html',
})
export class PaymentsRevenuePanelComponent implements OnInit {
  dataSource: any[] = [
    {
      requestDesc: 'שובר מס הכנסה',
      file: 'קובץ',
      dateToDo: new Date(),
      dateToSend: null,
      asmachta: '',
      status: 'ממתין לביצוע',
    },
  ];

  // set questions array for the advanced form
  columns: TableBase[] = [
    {
      filter: false,
      key: 'requestDesc',
      label: 'תיאור בקשה',
      controlType: 'select',
    },
    {
      filter: false,
      key: 'file',
      label: 'קובץ',
      controlType: 'upload',
      button: { type: '', icon: '' },
    },
    {
      filter: false,
      key: 'dateToDo',
      label: 'מועד לביצוע',
      controlType: 'date',
      disabled: true,
    },
    {
      filter: false,
      key: 'dateToSend',
      label: 'תאריך לשליחה',
      controlType: 'date',
      disabled: true,
    },
    { filter: false, key: 'asmachta', label: 'אסמכתא' },
    { filter: false, key: 'status', label: 'סטטוס' },
  ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
    },
    {
      icon: 'add',
      type: 'sendPaymentRequest',
      label: 'שלח בקשה לתשלום',
    },
  ];
  constructor(
    public recordsPaymentsPanelService: RecordsPaymentsPanelService
  ) {}

  ngOnInit(): void {}

  // TABLE EVENTS SECTION
  onActionClicked(event: any) {
    const { action } = event;
    switch (action) {
      case 'sendPaymentRequest':
        this.recordsPaymentsPanelService.openDialog();
        break;
    }
  }
}
