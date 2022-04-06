import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  EventEmitter,
  Output,
} from '@angular/core';
import {
  CdkStep,
  StepperSelectionEvent,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { Step } from './step/step.model';
@Component({
  selector: 'kkl-vertical-steps',
  templateUrl: './vertical-steps.component.html',
  styleUrls: ['./vertical-steps.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class VerticalStepsComponent implements OnInit {
  @Input() linear = false;

  @Input() steps: Step[];

  @Input() templates: { [key: string]: TemplateRef<any> };

  @Output() selectionChanged: EventEmitter<StepperSelectionEvent> =
    new EventEmitter();

  @Output() interacted: EventEmitter<CdkStep> =
    new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged(event: StepperSelectionEvent) {
    this.selectionChanged.emit(event)
  }

  onInteractedStream(event: CdkStep) {
    // console.log('step', event);
    this.interacted.emit(event)
  }
}
