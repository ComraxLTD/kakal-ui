import { Component, OnInit } from '@angular/core';
import { Panel } from '../../../../../../../../../kakal-ui/src/public-api';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-everything',
  templateUrl: './everything.component.html',
  styleUrls: ['./everything.component.scss']
})
export class EverythingComponent implements OnInit {

  public panels: Panel[] = [
    { key: 'appActivity', label: '15.6.22 יום' },
    { key: 'appSleeping', label: '16.6.22 יום' },
    // { key: 'reservationDetails', label: 'פרטי הזמנה' },
  ];

  complete$!: Observable<boolean>;

  constructor() { }

  ngOnInit(): void {
    this.complete$ = of(true)
  }

}
