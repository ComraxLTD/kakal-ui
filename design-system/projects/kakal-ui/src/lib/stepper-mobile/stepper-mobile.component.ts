import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StepsSelectionEvent } from '../stepper/stepper.component';
import { CardStep } from '../cards/card-step/card-step.component';
import { CardStatus } from '../cards/card-status/card-status.component';
@Component({
  selector: 'kkl-stepper-mobile',
  templateUrl: './stepper-mobile.component.html',
  styleUrls: ['./stepper-mobile.component.scss'],
})
export class StepperMobileComponent implements OnInit {
  @Input() steps: CardStep[] | CardStatus[];

  start: number = 0;
  previous: boolean = false;
  next: boolean = true;

  @Output() selectStep = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {
  }

  onStepSelect(index: number) {
    if('svgIcon' in this.steps[index]) {
      this.steps.forEach((a) => (a.selected = false));
      (this.steps[index] as CardStep).selected = true;
    }
    this.start = index;
    if(!this.start){
      this.previous = false;
      this.next = this.steps.length > 1;
    } else if(this.start == this.steps.length-1) {
      this.next = false;
      this.previous = this.steps.length > 1;
    } else {
      this.previous = true;
      this.next = true;
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
    if('svgIcon' in this.steps[this.start]) {
      this.steps.forEach((a) => (a.selected = false));
      (this.steps[this.start] as CardStep).selected = true;
    }
    this.onStepSelect(this.start);
    if(!this.start){
      this.previous = false;
    }
    this.next = true;
  }

  onNext() {
    if (!this.next) return;
    this.start++;
    if('svgIcon' in this.steps[this.start]) {
      this.steps.forEach((a) => (a.selected = false));
      (this.steps[this.start] as CardStep).selected = true;
    }
    this.onStepSelect(this.start);
    if(this.start == this.steps.length){
      this.next = false;
    }
    this.previous = true;
  }

}
