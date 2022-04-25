import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card.component';


@Component({
  selector: 'kkl-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() cards: MenuCard[];

  @Output() menuSelected: EventEmitter<MenuCard> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardSelect(card: MenuCard): void {
    this.menuSelected.emit(card);
  }
}
