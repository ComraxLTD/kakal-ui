import { Component, Input, OnInit } from '@angular/core';
import { MenuCard } from '../menu-card/menu-card.component';

@Component({
  selector: 'kkl-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
})
export class MenuBarComponent implements OnInit {
  @Input() cards: MenuCard[];

  constructor() {}

  ngOnInit(): void {}
}
