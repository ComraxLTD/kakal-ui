import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from '../../icon/icons.service';

export interface MenuCard {
  label: string;
  svgIcon: string;
  selected?: boolean;
  path?: string;
}

export interface MenuSelectEvent {
  /** The card instance now selected. */
  selectCard: MenuCard;

  /** Index of the step now selected. */
  selectedIndex: number;
}

@Component({
  selector: 'kkl-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() card!: MenuCard;
  @Input() index!: number;

  @Output() cardSelect: EventEmitter<MenuSelectEvent> = new EventEmitter();

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.card.svgIcon);
  }

  onSelect() {
    const event: MenuSelectEvent = {
      selectCard: this.card,
      selectedIndex: this.index,
    };
    this.cardSelect.emit(event);
  }
}
