import { Component, Input, OnInit } from '@angular/core';
import { CardOptions } from '../card.model';
import { CardInfoModel } from './card-info.model';

@Component({
  selector: 'kkl-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
  @Input() card: CardInfoModel;
  @Input() options: CardOptions;

  constructor() {}

  ngOnInit(): void {
    this.options = {
      ...this.options,
      color: 'primary',
      size: 3.5,
      variant: 'square',
      type: 'info',
    };
  }
}

// this.color = options?.color || 'primary';
//     this.variant = 'square';
//     this.type = 'info';
//     this.size = options?.size || 3.5;
