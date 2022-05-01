import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStep } from '../../cards/card-step/card-step.component';
import { StepsSelectionEvent } from '../step-group/step-group.component';

@Component({
  selector: 'kkl-circle-group',
  templateUrl: './circle-group.component.html',
  styleUrls: ['./circle-group.component.scss'],
})
export class CircleGroupComponent implements OnInit {
  @Input() steps!: CardStep[];
  @Input() selectedIndex: number = 0;

  private previouslySelectedIndex: number;

  private event: StepsSelectionEvent;

  constructor() {}

  @Output() selectStep: EventEmitter<StepsSelectionEvent> = new EventEmitter();

  ngOnInit(): void {
    this.event = this.setEvent(this.selectedIndex);
    console.log(this.event);
  }

  private setEvent(index: number) {
    const event = {
      selectedIndex: index,
      selectedStep: this.steps[index],

      previouslySelectedIndex: this.previouslySelectedIndex
        ? this.previouslySelectedIndex !== index
          ? this.previouslySelectedIndex
          : this.event.previouslySelectedIndex
        : null,

      previouslySelectedStep: this.previouslySelectedIndex
        ? this.previouslySelectedIndex !== index
          ? this.steps[this.previouslySelectedIndex]
          : this.event.previouslySelectedStep
        : null,

      last: index === this.steps.length - 1,

      first: index === 0,
    } as StepsSelectionEvent;

    return event;
  }

  onSelectStep(index: number) {
    this.event = this.setEvent(index);
    this.previouslySelectedIndex = index;
    this._emitSelectStep();
  }

  private _emitSelectStep() {
    this.selectStep.emit(this.event);
  }
}
