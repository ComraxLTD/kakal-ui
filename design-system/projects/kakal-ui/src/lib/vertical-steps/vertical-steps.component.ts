import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import {
  CdkStep,
  StepperSelectionEvent,
  STEPPER_GLOBAL_OPTIONS,
} from '@angular/cdk/stepper';
import { Step } from './step/step.model';
import { MatStepper } from '@angular/material/stepper';

export interface StepSelectEvent {
  selectedIndex: number;
  /** Index of the step previously selected. */
  previouslySelectedIndex: number;
  /** The step instance now selected. */
  selectedStep: Step;
  /** The step instance previously selected. */
  previouslySelectedStep: Step;

  /** If this step is the last */
  last: boolean;

  /** If this step is the first */
  first: boolean;
}

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
  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  @Input() manuel = false;
  @Input() linear: boolean;

  @Input() steps: Step[];

  @Input() templates: { [key: string]: TemplateRef<any> };

  public _selectedIndex: number;
  public previouslySelectedIndex: number;

  @Input()
  set selectedIndex(value: number) {
    this._selectedIndex = value;
  }

  @Output() selectionChanged: EventEmitter<StepperSelectionEvent> =
    new EventEmitter();

  @Output() interacted: EventEmitter<CdkStep> = new EventEmitter();
  @Output() stepChanged: EventEmitter<StepSelectEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // if (this.manuel) {
    //   this.disableStepperSelect();
    // }
  }

  disableStepperSelect() {
    setTimeout(() => {
      this.stepper.steps.forEach((step, idx) => {
        step.select = () => {
          // Your custom code here
          // if you want to change step do execute code below
        };
      });
    });
  }

  onSelectionChanged(event: StepperSelectionEvent) {
    const { selectedIndex, previouslySelectedIndex } = event;
    // this._selectedIndex = previouslySelectedIndex;
  }

  onStepClick(step: Step, index: number, first: boolean, last: boolean) {
    this.previouslySelectedIndex = this._selectedIndex;
    this.stepChanged.emit({
      selectedStep: step,
      previouslySelectedStep: this.steps[this.previouslySelectedIndex],
      selectedIndex: index,
      previouslySelectedIndex: this.previouslySelectedIndex,
      first,
      last,
    });
  }
}
