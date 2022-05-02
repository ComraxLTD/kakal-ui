import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CardStatus } from '../cards/card-status/card-status.component';
import { CardStep, StepOptions } from '../cards/card-step/card-step.component';

export interface StepsSelectionEvent {
  selectedIndex: number;
  /** Index of the step previously selected. */
  previouslySelectedIndex?: number;
  /** The step instance now selected. */
  selectedStep: CardStatus | CardStep;

  /** The step instance previously selected. */
  previouslySelectedStep?: CardStatus | CardStep;

  /** If this step is the last */
  last: boolean;

  /** If this step is the first */
  first: boolean;

  source?: CardStatus[] | CardStep[];
}

@Component({
  selector: 'kkl-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() variant: 'step' | 'status' = 'step';
  _steps: CardStep[] | CardStatus[];
  @Input() set steps(val: CardStep[] | CardStatus[]) {
    this._steps = val;
  }
  @Input() direction: 'row' | 'column' = 'row';
  @Input() stepRef: ElementRef;
  @Input() options: StepOptions;

  @Output() selectStep = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {}

  onStepSelect(step: CardStep, index: number, last: boolean, first: boolean) {
    this._steps.forEach((a) => (a.selected = false));
    step.selected = true;
    const event: StepsSelectionEvent = {
      selectedStep: step,
      selectedIndex: index,
      last,
      first,
      source: this.steps,
    };
    this.selectStep.emit(event);
  }

  onStepStatusSelect(
    step: CardStatus,
    index: number,
    last: boolean,
    first: boolean
  ) {
    const event: StepsSelectionEvent = {
      selectedStep: step,
      selectedIndex: index,
      last,
      first,
      source: this.steps,
    };
    this.selectStep.emit(event);
  }
}
