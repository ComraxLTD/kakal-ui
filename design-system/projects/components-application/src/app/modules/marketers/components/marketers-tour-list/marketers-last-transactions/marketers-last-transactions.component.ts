import { Component, OnInit } from '@angular/core';

interface Transaction {
  date: Date;
  label: string;
}

@Component({
  selector: 'app-marketers-last-transactions',
  templateUrl: './marketers-last-transactions.component.html',
  styleUrls: ['./marketers-last-transactions.component.scss'],
})
export class MarketersLastTransactionsComponent implements OnInit {
  transactions: Transaction[] = [
    { date: new Date(), label: 'הזמנה הדרכה מספר 3 נוספו שורות חדשות:1' },
    { date: new Date(), label: 'הזמנה הדרכה מספר 3 נוספו שורות חדשות:1' },
    { date: new Date(), label: 'הזמנה הדרכה מספר 3 נוספו שורות חדשות:1' },
    { date: new Date(), label: 'הזמנה הדרכה מספר 3 נוספו שורות חדשות:1' },
    { date: new Date(), label: 'הזמנה הדרכה מספר 3 נוספו שורות חדשות:1' },
    { date: new Date(), label: 'הזמנה הדרכה מספר 3 נוספו שורות חדשות:1' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
