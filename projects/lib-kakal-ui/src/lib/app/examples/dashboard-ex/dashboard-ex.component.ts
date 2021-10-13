import { Component, Input, OnInit } from '@angular/core';
import { CardDashboardModel } from '../../components/cards/card-dashboard/card-dashboard.model';

@Component({
  selector: 'kkl-dashboard-ex',
  templateUrl: './dashboard-ex.component.html',
  styleUrls: ['./dashboard-ex.component.scss']
})
export class DashboardExComponent implements OnInit {

  @Input() public cards: CardDashboardModel[];
  @Input() public width: number;
  @Input() public moduleTitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
