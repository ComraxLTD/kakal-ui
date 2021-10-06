import { Component, Input } from '@angular/core';
import { StepModel } from '../../step/step.model';

@Component({
  selector: 'app-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent  {

  @Input() public status: StepModel;

  constructor() {}
}
