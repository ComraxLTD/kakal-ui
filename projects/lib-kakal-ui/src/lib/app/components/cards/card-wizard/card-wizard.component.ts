import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Classes } from '../../../utilities/directives/classes.directive';
import { CardStepModel, StepType } from '../card-step/card-step.model';

@Component({
  selector: 'kkl-card-wizard',
  templateUrl: './card-wizard.component.html',
  styleUrls: ['./card-wizard.component.scss']
})
export class CardWizardComponent implements OnInit {

  @Input() public step: CardStepModel;

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

  @Output() onStepChange: EventEmitter<CardStepModel> = new EventEmitter();

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
