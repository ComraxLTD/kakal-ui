import { Component, OnInit } from '@angular/core';
import { TableBase, RowActionModel } from '../../../../../../kakal-ui/src/public-api';
import { RecordsPaymentsPanelService } from '../records-payments.service';

@Component({
  selector: 'app-payments-lawyer-panel',
  templateUrl: './payments-lawyer-panel.component.html',
})
export class PaymentsLawyerPanelComponent implements OnInit {
  dataSource: any[] = [
    {
      requestDesc: 'תשלום שני',
      file: 'חשבונית',
      dateToPayment: new Date(),
      sunToPayment: 20000,
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
      controlType: 'text',
    },
    {
      filter: false,
      key: 'file',
      label: 'חשבונית',
      controlType: 'upload',
      button: { type: '', icon: '' },
    },
    {
      filter: false,
      key: 'dateToPayment',
      label: 'תאריך לתשלום',
      controlType: 'date',
    },
    {
      filter: false,
      key: 'sunToPayment',
      label: 'סכום לתשלום',
      controlType: 'number',
    },
    { filter: false, key: 'asmachta', label: 'אסמכתא', controlType: 'number' },
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
