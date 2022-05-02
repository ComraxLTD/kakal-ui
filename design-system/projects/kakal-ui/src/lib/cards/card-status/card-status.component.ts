import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOption } from '../../form/models/form.types';
import { IconService } from '../../icon/icons.service';
import { CardOptions } from '../card.model';
export interface CardStatus {
  key: string;
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  disabled?: boolean;
  options: SelectOption[];
}

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
