import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StepModel, StepType } from './step.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {

  @Input() public step: StepModel;

  public type: StepType;
  public $active: Observable<boolean>;

  @Output() onStepChange: EventEmitter<StepModel> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.type = this.step.type;
    this.$active = this.step.getActiveObs();
  }

  public onStepClick(): void {
    if (!this.step.isActive) {
      this.onStepChange.emit(this.step);
    }
  }

}
