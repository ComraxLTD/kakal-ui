import { Component, OnInit } from '@angular/core';
import { TableBase } from '@ComraxLTD/kakal-ui/lib/kkl-table/table.model';

@Component({
  selector: 'app-marketers-charged',
  templateUrl: './marketers-charged.component.html',
  styleUrls: ['./marketers-charged.component.scss'],
})
export class MarketersChargedComponent implements OnInit {
  dataSource: any[] = [
    {
      kklCredit: '17 שח',
      ChargedByUnit: '1600',
      customerCharged: 'kkt jhuc',
      prePay: { label: '32', paid: true },
      payLeft: '1290',
    },
  ];

  columns: TableBase[] = [
    { key: 'kklCredit', label: 'תקצוב בקק/"ל' },
    { key: 'ChargedByUnit', label: 'חיוב ע/"פ מרכז שדה' },
    {
      key: 'customerCharged',
      label: 'חיוב לקוח',
      templateName: 'customerCharged',
    },
    { key: 'prePay', label: 'דמי קדימה', templateName: 'prePay' },
    { key: 'payLeft', label: 'סה/"כ לחוב' },
  ];
 
  constructor() {}

  ngOnInit(): void {}
}
