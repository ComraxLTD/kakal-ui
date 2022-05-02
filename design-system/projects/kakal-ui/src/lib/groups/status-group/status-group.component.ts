import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CardStatus } from '../../cards/card-status/card-status.component';
import { CardOptions } from '../../cards/card.model';

export interface StatusSelectionEvent {
  selectedIndex: number;

  /** The step instance now selected. */
  selectedStatus: CardStatus;

  source?: CardStatus[];
}
@Component({
  selector: 'kkl-status-group',
  templateUrl: './status-group.component.html',
  styleUrls: ['./status-group.component.scss'],
})
export class StatusGroupComponent implements OnInit {
  @Input() status: CardStatus[];
  @Input() direction: 'row' | 'column' = 'row';
  @Input() options: CardOptions;

  @Output() statusSelection = new EventEmitter<StatusSelectionEvent>();

  constructor() {}

  ngOnInit(): void {}

  onStepStatusSelect(status: CardStatus, index: number) {
    const event: StatusSelectionEvent = {
      selectedStatus: status,
      selectedIndex: index,
      source: this.status,
    };
    this.statusSelection.emit(event);
  }
}
