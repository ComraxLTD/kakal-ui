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
  StepOptions,
  StepperDirection,
} from '../cards/card-step/card-step.model';
import { CardStatusModel } from '../cards/card-status/card-status.model';
import { Observable } from 'rxjs';

export interface StepperSelectEvent {
  selectedStep: CardStepModel;
  selectedIndex: number;
  previousSelectedStep?: CardStepModel;
  previousSelectedIndex?: number;
}

@Component({
  selector: 'kkl-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() variant : 'step' | 'status'
  @Input() steps$: Observable<CardStepModel[]>;
  @Input() direction: StepperDirection;
  @Input() stepRef: ElementRef;
  @Input() options : StepOptions;

   mobile$: Observable<boolean>;

  @Output() selectStep = new EventEmitter<StepperSelectEvent>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
  }

  public onStepSelect(step: CardStepModel | CardStatusModel, index: number) {
    const event: StepperSelectEvent = {
      selectedStep: step,
      selectedIndex: index,
    };
    this.selectStep.emit(event);
  }
}
