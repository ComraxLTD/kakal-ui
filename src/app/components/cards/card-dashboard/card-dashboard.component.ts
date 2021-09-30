import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardDashboardModel } from './card-dashboard.model';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {

  @Input() card: CardDashboardModel

  @Output() onClick = new EventEmitter<CardDashboardModel>()

  constructor(
  ) { }

  ngOnInit(): void {
    this.card = new CardDashboardModel({
      ...this.card,
      size: 15,
      scale: 3,
    })
  }

  public onCardClick() {
    this.onClick.emit(this.card)
  }

}
