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
import { BreakpointService } from '../../services/breakpoint.service';
import { Observable, of, tap } from 'rxjs';

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
  isSmallScreen$: Observable<boolean>=of(true);

  @Input() linear: boolean;

  @Input() steps: Step[];

  @Input() templates: { [key: string]: TemplateRef<any> };

  cellTemplate: string;

  _selectedIndex: number = 0;
  @Input() set selectedIndex(val: number) {
    if (val || val ===0) {
      this._selectedIndex = val;
      if (this.steps) {
        this.cellTemplate = this.steps[val].key as string;
      }
    }
  }

  // @Output() selectionChanged: EventEmitter<StepperSelectionEvent> =
  //   new EventEmitter();

  // @Output() interacted: EventEmitter<CdkStep> = new EventEmitter();
  @Output() stepChanged: EventEmitter<StepSelectEvent> = new EventEmitter();

  constructor(private breakPointService: BreakpointService) {}

  ngOnInit(): void {
    this.cellTemplate = this.steps[this._selectedIndex].key as string;
    this.isSmallScreen$ = this.getIsSmallScreen();
  }

  getIsSmallScreen(): Observable<boolean> {
    return this.breakPointService.isMobile().pipe(
      tap((value) => {
        return value
      })
    );
  }

  onSelectionChanged(event: StepperSelectionEvent) {
    const { selectedIndex, previouslySelectedIndex } = event;

    const stepSelectEvent: StepSelectEvent = {
      selectedStep: this.steps[selectedIndex],
      previouslySelectedStep: this.steps[previouslySelectedIndex],
      selectedIndex,
      previouslySelectedIndex,
      first: selectedIndex === 0,
      last: selectedIndex === this.steps.length - 1,
    };
    this.cellTemplate = this.steps[selectedIndex].key as string;
    this.stepChanged.emit(stepSelectEvent);
  }
}
