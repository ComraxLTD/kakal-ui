import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconService } from '../../icon/icons.service';
import { CardOptions } from '../card.model';
import { CardStatusModel } from './card-status.model';

@Component({
  selector: 'kkl-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent implements OnInit {
  @Input() public status: CardStatusModel;
  @Output() stepSelect: EventEmitter<void> = new EventEmitter();
  @Input() options: CardOptions;

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

  onStepSelect(): void {
    this.stepSelect.emit();
  }
}
