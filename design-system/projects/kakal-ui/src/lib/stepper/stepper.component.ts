import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';
import { CardStep } from '../cards/card-step/card-step.model';
import { CardStatus } from '../cards/card-status/card-status.model';
import { Observable } from 'rxjs';
import { CardOptions } from '../cards/card.model';

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
  @Input() direction: 'row' | 'column';
  @Input() stepRef: ElementRef;
  @Input() options: CardOptions;

  mobile$: Observable<boolean>;

  @Output() selectStep = new EventEmitter<StepsSelectionEvent>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
  }

  onStepSelect(
    step: CardStep,
    index: number,
    last: boolean,
    first: boolean
  ) {
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
