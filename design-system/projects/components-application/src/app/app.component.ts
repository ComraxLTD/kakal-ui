import { Component, OnInit } from '@angular/core';
import { OrderDetailsBidComponent } from './components/order-details-bid/order-details-bid.component';
import { FormFilterSearchComponent } from './components/form-filter-search/form-filter-search.component';
import { FormControl } from '@angular/forms';
import { CurrencyService } from '../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  control = new FormControl();
  public steps = [
    { key: 1, label: 'working', comp: OrderDetailsBidComponent },
    { key: 2, label: 'working2', comp: FormFilterSearchComponent },
  ];
  public panels = [
    { label: 'working', comp: OrderDetailsBidComponent },
    {
      item: { birthDate: new Date(), location: 'city', test: 'test' },
      headers: [
        { key: 'location' },
        { key: 'birthDate', format: 'date' },
        { key: 'test' },
      ],
      comp: FormFilterSearchComponent,
    },
  ];

  constructor(private currencyService:CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.setCurrencies([{id:0,label:'$',value:0}])
    
  }
}
