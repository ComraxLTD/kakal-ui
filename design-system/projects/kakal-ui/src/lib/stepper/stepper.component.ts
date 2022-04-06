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
import { QuestionSelectModel } from '../form/form-select/question-select.model';
import { FormService, Question } from '../form/services/form.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'kkl-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() question$: Observable<Question>;
  @Input() steps$: Observable<CardStepModel[]>;
  @Input() direction: StepperDirection;
  @Input() stepRef: ElementRef;

  public mobile$: Observable<boolean>;
  public selectQuestion$: Observable<Question>;

  @Output() changeStep = new EventEmitter<CardStepModel>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
  }

  public onChangeStep(step: CardStepModel) {
    this.changeStep.emit(step);
  }
}
