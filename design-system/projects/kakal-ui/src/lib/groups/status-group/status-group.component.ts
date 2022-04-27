import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CardStatus } from '../../cards/card-status/card-status.model';
import { CardOptions } from '../../cards/card.model';

export interface StepsSelectionEvent {
  selectedIndex: number;

  /** The step instance now selected. */
  selectedStep: CardStatus;

  source?: CardStatus[];
}
@Component({
  selector: 'kkl-status-group',
  templateUrl: './status-group.component.html',
  styleUrls: ['./status-group.component.scss'],
})
export class StatusGroupComponent implements OnInit {

  @Input() steps: CardStatus[];
  @Input() direction: 'row' | 'column' = 'row';
  @Input() options: CardOptions;

  @Output() statusSelection = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {
  }

  onStepStatusSelect(step: CardStatus, index: number) {
    const event: StepsSelectionEvent = {
      selectedStep: step,
      selectedIndex: index,
      source: this.steps,
    };
    this.statusSelection.emit(event);
  }
}
