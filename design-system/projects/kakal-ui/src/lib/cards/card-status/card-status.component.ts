import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from '../../icon/icons.service';
import { CardOptions } from '../card.model';
import { CardStatus } from './card-status.model';

@Component({
  selector: 'kkl-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent implements OnInit {

  @Input() status: CardStatus;

  @Input() options: CardOptions;

  @Output() statusSelect: EventEmitter<void> = new EventEmitter();

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.setIcon(this.status.svgIcon);
    this.options = {
      ...this.options,
      color: 'primary',
      variant: 'circle',
      type: 'status',
    };
  }

  onStatusSelect(): void {
    if (!this.status.disabled) {
      this.statusSelect.emit();
    }
  }
}
