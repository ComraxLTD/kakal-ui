import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { IconService } from '../../icon/icons.service';

export interface MenuCard {
  label: string;
  svgIcon: string;
  selected?: boolean;
  path?: string;
  templateName?: string;
}



@Component({
  selector: 'kkl-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() card!: MenuCard;
  @Input() template: TemplateRef<any>;

  @Output() cardSelect: EventEmitter<MenuCard> = new EventEmitter();

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.card.svgIcon);
  }

  onSelect() {
    this.cardSelect.emit();
  }
}
