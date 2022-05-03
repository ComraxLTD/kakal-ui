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

  @Input() stepsSelectionEvent: StepsSelectionEvent;

  mobile$: Observable<boolean>;

  previouslySelectedIndex: number;

  @Output() stepSelection = new EventEmitter<StepsSelectionEvent>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
    this.previouslySelectedIndex =
      this.stepsSelectionEvent.previouslySelectedIndex;
  }



  onStepSelect(step: CardStep, index: number, last: boolean, first: boolean) {
    const event: StepsSelectionEvent = {
      ...this.stepsSelectionEvent,
        selectedStep: { ...step, selected: true },
        selectedIndex: index,
        last,
        first,
        previouslySelectedIndex : this.previouslySelectedIndex,
      };

      this.previouslySelectedIndex = index;
      this.stepSelection.emit(event);
    //   if (!step.selected) {
    // }
  }
}
