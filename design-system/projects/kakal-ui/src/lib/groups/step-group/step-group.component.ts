import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStep } from '../../cards/card-step/card-step.component';
import { BreakpointService } from '../../../services/breakpoint.service';
import { Observable } from 'rxjs';

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
  selector: 'kkl-step-group',
  templateUrl: './step-group.component.html',
  styleUrls: ['./step-group.component.scss'],
})
export class StepGroupComponent implements OnInit {
  _steps: CardStep[];

  @Input() set steps(value: CardStep[]) {
    this._steps = value;
  }
  @Input() direction: 'row' | 'column' = 'row';

  mobile$: Observable<boolean>;

  @Output() stepSelection = new EventEmitter<StepsSelectionEvent>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
  }

  // onStepSelect(step: CardStep, index: number, last: boolean, first: boolean) {
  //   const event: StepsSelectionEvent = {
  //     selectedStep: step,
  //     selectedIndex: index,
  //     last,
  //     first,
  //     source: this.steps,
  //   };
  //   this.stepSelection.emit(event);
  // }

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
    this.stepSelection.emit(event);
  }
}
