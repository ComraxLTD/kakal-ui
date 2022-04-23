import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from '../../icon/icons.service';

export interface MenuItem {
  label: string;
  svgIcon: string;
  selected?: boolean;
  path?: string;
}

export interface MenuSelectEvent {
  /** The card instance now selected. */
  selectCard: MenuItem;

  /** Index of the step now selected. */
  selectedIndex: number;
}

@Component({
  selector: 'kkl-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
})
export class MenItemComponent implements OnInit {
  @Input() item!: MenuItem;
  @Input() index!: number;

  @Output() cardSelect: EventEmitter<MenuSelectEvent> = new EventEmitter();

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.item.svgIcon);
  }

  onSelect() {
    const event: MenuSelectEvent = {
      selectCard: this.item,
      selectedIndex: this.index,
    };
    this.cardSelect.emit(event);
  }
}
