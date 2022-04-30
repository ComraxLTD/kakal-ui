import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.model';
import { StepsSelectionEvent } from '../stepper/stepper.component';
import { CardStatusModel } from '../cards/card-status/card-status.model';
@Component({
  selector: 'kkl-stepper-mobile',
  templateUrl: './stepper-mobile.component.html',
  styleUrls: ['./stepper-mobile.component.scss'],
})
export class StepperMobileComponent implements OnInit {
  @Input() steps: CardStep[] | CardStatusModel[];

  start: number = 0;
  previous: boolean = false;
  next: boolean = true;

  @Output() selectStep = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {
  }

  onStepSelect(index: number) {
    if('selected' in this.steps[index]) {
      this.steps.forEach((a) => (a.selected = false));
      (this.steps[index] as CardStep).selected = true;
    }
    const event: StepsSelectionEvent = {
      selectedStep: this.steps[index],
      selectedIndex: index,
      last: index == this.steps.length,
      first: !index,
      source: this.steps,
    };
    this.selectStep.emit(event);
  }


  onPrevious() {
    if (!this.previous) return;
    this.start--;
    this.onStepSelect(this.start);
    if(!this.start){
      this.previous = false;
    }
    this.next = true;
  }

  onNext() {
    if (!this.next) return;
    this.start++;
    this.onStepSelect(this.start);
    if(this.start == this.steps.length){
      this.next = false;
    }
    this.previous = true;
  }

}
