import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card.component';


@Component({
  selector: 'kkl-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() cards: MenuCard[];
  @Input() templates: { [key: string]: TemplateRef<any> };

  @Output() menuSelected: EventEmitter<MenuCard> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onCardSelect(card: MenuCard): void {
    this.menuSelected.emit(card);
  }
}
