import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  CardStep,
  CardStatusModel,
  BreakpointService,
} from '../../../public-api';

export interface StepsSelectionEvent {
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
  _steps: CardStep[] | CardStatusModel[];
  @Input() set steps(val: CardStep[] | CardStatusModel[]) {
    this._steps = val;
  }
  @Input() direction: 'row' | 'column';
  @Input() stepRef: ElementRef;

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
    step: CardStatusModel,
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
