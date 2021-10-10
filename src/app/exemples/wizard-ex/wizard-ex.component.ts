import { Component, OnInit } from '@angular/core';
import { CardStepModel } from 'src/app/components/cards/card-step/card-step.model';
import { StepperService } from 'src/app/components/stepper/stepper.service';

@Component({
  selector: 'app-wizard-ex',
  templateUrl: './wizard-ex.component.html',
  styleUrls: ['./wizard-ex.component.scss']
})
export class WizardExComponent implements OnInit {

  
  constructor(private stepperService: StepperService) {}

  ngOnInit(): void {}

  public steps = [
    new CardStepModel({
      label: 'פירוט הנכס',
      svgUrl: 'home',
      path: 'details',
      isActive: true,
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'תנועות',
      svgUrl: 'list',
      path: 'movements',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'עסקאות',
      svgUrl: 'transactions',
      path: 'transactions',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'תתי חלקה',
      svgUrl: 'building',
      path: 'subdivision',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
    new CardStepModel({
      label: 'פרצליציה',
      svgUrl: 'add',
      path: 'parcellation',
      size: 3,
      variant : 'square',
      type : 'wizard'
    }),
  ];

  public direction: string = 'column';

  public onStepChange(step: CardStepModel) {
    this.steps = this.stepperService.setSteps(this.steps, 'path', step.path);
  }
}
