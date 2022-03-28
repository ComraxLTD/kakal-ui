import { Component, OnInit } from '@angular/core';
import { OrderDetailsBidComponent } from './components/order-details-bid/order-details-bid.component';
import { FormFilterSearchComponent } from './components/form-filter-search/form-filter-search.component';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';

import { FormControl } from '@angular/forms';
import { CurrencyService } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public steps: Step[] = [
    { key: 'filterForm', label: 'working' },
    { key: 'groupForm', label: 'working2' },
  ];
  public panels = [
    { label: 'working', comp: OrderDetailsBidComponent },
    {
      controlType: 'input',
      key: 'poCodes',
      label: `PO#`,
      group: 'poCodes',
    },
    {
      controlType: 'input',
      key: 'suppliers',
      label: `Supplier`,
      group: 'poCodes',
    },
    {
      controlType: 'date',
      key: 'recordedTime',
      label: `Recorded time`,
      button: {
        type: 'inlineExpand',
        icon: 'expand',
      },
    },
    {
      controlType: 'input',
      key: 'status',
      label: `Status`,
      // colIcon: {key: 'add'},
      templateName: 'status',
    },
  ];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.setCurrencies([{ id: 0, label: '$', value: 0 }]);
  }
}
