import { Component, Input } from '@angular/core';
import { CardStepModel } from '../../components/cards/card-step/card-step.model';
import {
  StepModel,
  StepperDirection,
} from '../../components/step/step.model';
import { StepperService } from '../../components/stepper/stepper.service';

@Component({
  selector: 'app-stepper-ex',
  templateUrl: './stepper-ex.component.html',
  styleUrls: ['./stepper-ex.component.scss'],
})
export class StepperExComponent {
  constructor(private stepperService: StepperService) {}

  @Input() public steps: CardStepModel[];
  @Input() public direction: StepperDirection;

  public onStepChange(step: StepModel) {
    this.steps = this.stepperService.setSteps(this.steps, 'path', step.path);
  }
}
