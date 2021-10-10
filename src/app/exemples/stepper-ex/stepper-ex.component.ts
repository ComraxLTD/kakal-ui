import { Component, OnInit } from '@angular/core';
import { StepModel } from 'src/app/components/step/step.model';
import { StepperService } from 'src/app/components/stepper/stepper.service';

@Component({
  selector: 'app-stepper-ex',
  templateUrl: './stepper-ex.component.html',
  styleUrls: ['./stepper-ex.component.scss']
})
export class StepperExComponent implements OnInit {

  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {}

  public steps = [
    new StepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      isActive: true,
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 3,
      divider: 5,
    }),
    new StepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 3,
    }),
  ];

  public direction: string = 'row';

  public onStepChange(step: StepModel) {
    this.steps = this.stepperService.setSteps(this.steps, 'path', step.path);
  }
}
