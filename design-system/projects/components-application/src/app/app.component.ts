import { Component, OnInit } from '@angular/core';
import { OrderDetailsBidComponent } from './components/order-details-bid/order-details-bid.component';
import { FormFilterSearchComponent } from './components/form-filter-search/form-filter-search.component';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  public steps: Step[] = [
    { key: 'filterForm', label: 'working'},
    { key: 'groupForm', label: 'working2'},
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

  constructor() {}

  ngOnInit(): void {}
}
