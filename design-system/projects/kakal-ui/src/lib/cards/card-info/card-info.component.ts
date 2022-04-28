import { Component, Input, OnInit } from '@angular/core';
import { IconService } from '../../icon/icons.service';
import { CardOptions } from '../card.model';
import { CardInfo } from './card-info.model';

@Component({
  selector: 'kkl-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() card: CardInfo;
  @Input() options: CardOptions;

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.card.svgIcon);

    this.options = this.setOptions();
  }

  private setOptions(): CardOptions {
    return {
      ...this.options,
      color: 'primary',
      size: 3.5,
      variant: 'square',
      type: 'info',
    };
  }
}
