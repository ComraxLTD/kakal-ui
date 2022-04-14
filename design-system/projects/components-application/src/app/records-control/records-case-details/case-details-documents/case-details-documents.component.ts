import { Component, Input, OnInit } from '@angular/core';
import { TableBase, RowActionModel } from '../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-case-details-documents',
  templateUrl: './case-details-documents.component.html',
  styleUrls: ['./case-details-documents.component.scss'],
})
export class CaseDetailsDocumentsComponent implements OnInit {
  @Input() tables!: any[];

  columns: TableBase[] = [
    {
      key: 'name',
      label: 'שם קובץ נדרש',
    },
    {
      key: 'date',
      label: 'תאריך',
    },
  ];

  rowActions: RowActionModel[] = [
    {
      icon: 'add',
      type: 'sendFile',
      label: 'שלח קובץ לאישור',
    },
    {
      type: 'inlineDelete',
      icon: 'delete',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // TABLE EVENTS SECTION
  onActionClicked(event: any) {
    const { action } = event;
    switch (action) {
      case 'sendFile':
        break;
    }
  }
}
