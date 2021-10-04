import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StepModel, StepType } from './step.model';
import { Observable } from 'rxjs';
import { Classes } from 'src/app/utilities/directives/classes.directive';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {

  @Input() public step: StepModel;

  public type: StepType;
  public active$: Observable<boolean>;


  public wizardClasses: Classes = {
    color: 'text',
    fontWeight: 500,
    fontSize: 1.1
  }
  public activeWizardClasses: Classes = {
    ...this.wizardClasses,
    color: 'paper',
    fontWeight: 600,
  }

  @Output() onStepChange: EventEmitter<StepModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.type = this.step.type;
    this.active$ = this.step.getActiveObs();
  }

  public onStepClick(): void {
    if (!this.step.isActive) {
      this.onStepChange.emit(this.step);
    }
  }



}
