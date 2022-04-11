import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStatusModel } from './card-status.model';

@Component({
  selector: 'kkl-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent implements OnInit {
  @Input() public status: CardStatusModel;
  @Output() stepSelect: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStepSelect(): void {
    this.stepSelect.emit();
  }
}
