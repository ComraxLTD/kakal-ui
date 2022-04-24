import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuItem, MenuSelectEvent } from '../menu-item/menu-item.component';


export interface MenuChangedEvent {

  // current state of cards
  source: MenuItem[];

  // current selected interface
  event: MenuSelectEvent;
}

@Component({
  selector: 'kkl-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() items: MenuItem[];

  @Output() menuChanged: EventEmitter<MenuChangedEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardSelect(selectEvent: MenuSelectEvent): void {
    const event: MenuChangedEvent = { source: this.items, event: selectEvent };
    this.menuChanged.emit(event);
  }
}
