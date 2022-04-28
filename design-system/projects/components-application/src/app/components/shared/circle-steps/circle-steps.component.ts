import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
export interface CardStep {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  selected?: boolean;
  disabled?: boolean;
  hasSteps?: boolean;
}
export interface StepsSelectionEvent {
  /** Index of the step selected. */
  selectedIndex: number;

  /** Index of the step previously selected. */
  previouslySelectedIndex?: number;

  /** The step instance now selected. */
  selectedStep: CardStep;

  /** The step instance previously selected. */
  previouslySelectedStep?: CardStep;

  /** If this step is the last */
  last: boolean;

  /** If this step is the first */
  first: boolean;

  source?: CardStep[];
}
@Component({
  selector: 'app-circle-steps',
  templateUrl: './circle-steps.component.html',
  styleUrls: ['./circle-steps.component.scss']
})
export class CircleStepsComponent implements OnInit {

  @Input() steps!: CardStep[];
  @Input() selectedIndex: number = 0;

  private previouslySelectedIndex!: number;

  private event!: StepsSelectionEvent;

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
    console.log(index);
    
    this.event = this.setEvent(index);
    this.previouslySelectedIndex = index;
    this._emitSelectStep();
  }

  private _emitSelectStep() {
    this.selectStep.emit(this.event);
  }
}
