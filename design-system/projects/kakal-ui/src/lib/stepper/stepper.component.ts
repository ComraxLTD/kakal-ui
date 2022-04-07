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
import { Observable } from 'rxjs';
import { CardStatusModel } from '../../public-api';

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
  @Input() steps$: Observable<CardStepModel[]>;
  @Input() direction: StepperDirection;
  @Input() stepRef: ElementRef;

  public mobile$: Observable<boolean>;

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
