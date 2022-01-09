import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardStepModel, StepperDirection } from '../../components/cards/card-step/card-step.model';

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
  @Input() public stepWidth: number;

public steps$ : Observable<CardStepModel[]>
  ngOnInit() {
    this.steps$ = of(this.steps)
  }


  public onStepChange(step: CardStepModel) {
    this.steps = this.stepperService.setSteps(this.steps, 'path', step.path);
  }
}
