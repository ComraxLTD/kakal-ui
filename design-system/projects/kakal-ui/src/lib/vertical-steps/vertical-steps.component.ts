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
      useValue: { displayDefaultIndicatorType: false }
    }
  ]
})
export class VerticalStepsComponent implements OnInit {
  @Input() linear = false;

  @Input() steps: Step[];

  @Input() templates: { [key: string]: TemplateRef<any> };

  public _selectedIndex: number;

  @Input()
  set selectedIndex(value: number) {
    this._selectedIndex = value;
  }

  @Output() selectionChanged: EventEmitter<StepperSelectionEvent> =
    new EventEmitter();

  @Output() interacted: EventEmitter<CdkStep> = new EventEmitter();
  @Output() stepChanged: EventEmitter<Step> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setSelectedIndex(selected: number) {
    if (selected <= this.steps.length) {
      this._selectedIndex = selected;
    }
  }

  onSelectionChanged(event: StepperSelectionEvent) {
    this.selectionChanged.emit(event);
  }

  onInteractedStream(event: CdkStep) {
    // console.log('step', event);
    this.interacted.emit(event);
  }

  onStepClick(step: Step) {
    console.log(step);
    this.stepChanged.emit(step);
  }
}
