import { Component, Input, OnInit } from '@angular/core';
import { IconsService } from '../../icon/icons.service';

export interface MenuCard {
  label: string;
  svgIcon: string;
  active?: boolean;
  path?: string;
}

@Component({
  selector: 'kkl-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
})
export class MenuCardComponent implements OnInit {
  @Input() card!: MenuCard;

  constructor(private iconService: IconsService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.card.svgIcon);
  }
}
