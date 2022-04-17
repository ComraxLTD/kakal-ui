import { Component, Input, OnInit } from '@angular/core';
import { TableBase } from '../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-case-details-list',
  templateUrl: './case-details-list.component.html',
})
export class CaseDetailsListComponent implements OnInit {
  @Input() dataSource: any[] = [];

  columns: TableBase[] = [
    {
      key: 'gush',
      label: 'גוש',
    },
    {
      key: 'division',
      label: 'חלקה',
    },
    {
      key: 'totalSum',
      label: 'סכום',
    },
    {
      key: 'area',
      label: 'שטח',
    },
    {
      key: 'pricePerMeter',
      label: 'מחיר למ"ר',
    },
    {
      key: 'כתובת',
      label: 'address',
    },
    {
      key: 'dealType',
      label: 'סוג עסקה',
    },
    {
      key: 'dealSubType',
      label: 'תת סוג עסקה',
    },
    {
      key: 'sellers',
      label: 'מוכרים',
      button: { type: 'inlineExpand', icon: 'keyboard_arrow_down' },
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
