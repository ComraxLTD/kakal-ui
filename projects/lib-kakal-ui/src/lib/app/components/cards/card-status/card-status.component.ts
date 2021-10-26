import { Component, Input } from '@angular/core';
import { CardStepModel } from '../card-step/card-step.model';

@Component({
  selector: 'kkl-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent  {

  @Input() public status: CardStepModel;

  constructor() {}
}
