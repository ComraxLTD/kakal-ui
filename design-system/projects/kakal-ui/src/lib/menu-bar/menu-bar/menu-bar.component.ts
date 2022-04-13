import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuCard, MenuSelectEvent } from '../menu-card/menu-card.component';

export interface MenuChangedEvent {
  source: MenuCard[];
  event: MenuSelectEvent;
}

@Component({
  selector: 'kkl-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() cards: MenuCard[];

  @Output() menuChanged: EventEmitter<MenuChangedEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardSelect(selectEvent: MenuSelectEvent): void {
    const event: MenuChangedEvent = { source: this.cards, event: selectEvent };
    this.menuChanged.emit(event);
  }
}
