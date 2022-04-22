import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { BreakpointService } from '../../services/breakpoint.service';
import {
  CardStepModel,
  StepperDirection,
} from '../cards/card-step/card-step.model';
import { CardStatusModel } from '../cards/card-status/card-status.model';
import { Observable } from 'rxjs';
import { CardOptions } from '../cards/card.model';



export interface StepsSelectionEvent {
  selectedIndex: number;
  /** Index of the step previously selected. */
  previouslySelectedIndex?: number;
  /** The step instance now selected. */
  selectedStep: CardStatusModel | CardStepModel;

  /** The step instance previously selected. */
  previouslySelectedStep?: CardStatusModel | CardStepModel;

  /** If this step is the last */
  last: boolean;

  /** If this step is the first */
  first: boolean;

  source?: CardStatusModel[] | CardStepModel[];
}

@Component({
  selector: 'kkl-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() variant: 'step' | 'status';
  @Input() steps: CardStepModel[] | CardStatusModel[];
  @Input() direction: StepperDirection;
  @Input() stepRef: ElementRef;
  @Input() options: CardOptions;

  mobile$: Observable<boolean>;

  @Output() selectStep = new EventEmitter<StepsSelectionEvent>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
  }

  public onStepSelect(
    step: CardStepModel | CardStatusModel,
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
