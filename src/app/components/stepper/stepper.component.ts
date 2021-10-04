import { ListItemKeys } from '../menu/list-item.model';
import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { StepModel } from '../step/step.model';
import { StepperService } from './stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {

  @Input() steps: StepModel[] = [];
  @Input() direction: string;
  @Input() routePrefix: string;
  @Input() double: number;
  @Input() stepRef: ElementRef;

  @Output() changStep = new EventEmitter<StepModel>();

  constructor(
    private stepperService: StepperService,
  ) {
  }

  ngOnInit(): void {
    this.setStepsStatus();
    console.log(this.steps)
  }

  private setStepsStatus() {
    this.stepperService.setSteps(this.steps, ListItemKeys.PATH)
  }

  public onStepClick(step: StepModel) {
    if (this.stepRef) {
      this.steps = this.stepperService.updateSteps(
        this.steps,
        ListItemKeys.PATH,
        step.path
      );
    }

  }

  public onStepChange(step: StepModel) {
    this.changStep.emit(step);
    const path :string = `${this.routePrefix}/${step.path}`
    this.stepperService.navigate(path)
  }
}
