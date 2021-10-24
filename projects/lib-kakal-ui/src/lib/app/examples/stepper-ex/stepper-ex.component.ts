import { Component, Input } from '@angular/core';
import { CardStepModel, StepperDirection } from '../../components/cards/card-step/card-step.model';

import { StepperService } from '../../components/stepper/stepper.service';

@Component({
  selector: 'kkl-stepper-ex',
  templateUrl: './stepper-ex.component.html',
  styleUrls: ['./stepper-ex.component.scss'],
})
export class StepperExComponent {
  constructor(private stepperService: StepperService) {}

  @Input() public steps: CardStepModel[];
  @Input() public direction: StepperDirection;

  public onStepChange(step: CardStepModel) {
    this.steps = this.stepperService.setSteps(this.steps, 'path', step.path);
  }
}
