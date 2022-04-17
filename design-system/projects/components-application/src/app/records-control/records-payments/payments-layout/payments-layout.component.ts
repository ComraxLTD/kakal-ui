import { Component, OnInit } from '@angular/core';
import { Panel } from '../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-payments-layout',
  templateUrl: './payments-layout.component.html',
  styleUrls: ['./payments-layout.component.scss'],
})
export class PaymentsLayoutComponent implements OnInit {
  // array for accordion panels layout
  public panels: Panel[] = [
    { key: 'revenue', label: 'דיווח לרשות המיסים' },
    {
      key: 'seller',
      label: 'תשלום פעימות למוכר',
    },
    { key: 'lawyer', label: 'תשלום פעימות לעו"ד מטפל' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
