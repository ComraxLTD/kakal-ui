import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.component';
import { CardStatus } from '../cards/card-status/card-status.component';
import { StepsSelectionEvent } from '../groups/step-group/step-group.component';
@Component({
  selector: 'kkl-stepper-mobile',
  templateUrl: './stepper-mobile.component.html',
  styleUrls: ['./stepper-mobile.component.scss'],
})
export class StepperMobileComponent implements OnInit {
  _steps: CardStep[];

  @Input() set steps(value: CardStep[]) {
    this._steps = value;
  }

  @Input() stepsSelectionEvent: StepsSelectionEvent;

  previouslySelectedIndex: number;


  @Output() selectStep = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {
    this.previouslySelectedIndex =
      this.stepsSelectionEvent.previouslySelectedIndex;
  }





  onStepSelect(index: number) {

    const event: StepsSelectionEvent = {
      ...this.stepsSelectionEvent,
      selectedStep: { ...this._steps[index], selected: true },
      selectedIndex: index,
      last: index == this._steps.length,
      first: !index,
      previouslySelectedIndex: this.previouslySelectedIndex,
    };

    this.previouslySelectedIndex = index;
    this.selectStep.emit(event);
  }


  onPrevious() {
    if (!this.stepsSelectionEvent.selectedIndex) return;
    this.onStepSelect(this.stepsSelectionEvent.selectedIndex-1);
  }

  onNext() {
    if (this.stepsSelectionEvent.selectedIndex == this._steps.length-1) return;
    this.onStepSelect(this.stepsSelectionEvent.selectedIndex+1);
  }

}
