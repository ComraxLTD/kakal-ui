import { Component, Input, OnInit } from '@angular/core';
import { CardStepModel } from 'src/app/components/cards/card-step/card-step.model';
import { StepModel, StepperDirection } from 'src/app/components/step/step.model';
import { StepperService } from 'src/app/components/stepper/stepper.service';

@Component({
  selector: 'app-stepper-ex',
  templateUrl: './stepper-ex.component.html',
  styleUrls: ['./stepper-ex.component.scss']
})
export class StepperExComponent implements OnInit {

  constructor(private stepperService: StepperService) {}

  @Input() public steps : CardStepModel[]

  ngOnInit(): void {
    console.log(this.steps)
  }


  @Input() public direction: StepperDirection;

  public onStepChange(step: StepModel) {
    this.steps = this.stepperService.setSteps(this.steps, 'path', step.path);
  }
}
