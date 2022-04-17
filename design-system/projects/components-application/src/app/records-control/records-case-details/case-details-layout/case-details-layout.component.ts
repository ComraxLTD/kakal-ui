import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-case-details-layout',
  templateUrl: './case-details-layout.component.html',
  styleUrls: ['./case-details-layout.component.scss'],
})
export class CaseDetailsLayoutComponent implements OnInit {

  transactionType!: string;

  tables: { label: string; data: any }[] = [
    {
      label: 'טפסי נכסי קנייה',
      data: [{}],
    },
    {
      label: 'טפסי נכסי מכירה',
      data: [{}],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // TODO - add logic to remove table according to transaction type
  private filterTableByTransactionType() {

  }
}
