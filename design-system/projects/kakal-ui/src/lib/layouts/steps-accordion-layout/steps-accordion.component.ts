import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { Step } from '../../vertical-steps/step/step.model';
import { Panel } from '../accordion-layout/accordion-types';
import { StepSelectEvent } from '../../vertical-steps/vertical-steps.component';
import { StepsAccordionLayoutService } from './steps-accordion-layout.service';
import { Observable } from 'rxjs';

export interface SelectionChangedEvent {
  source: Step[];
  event: StepSelectEvent;
}

@Component({
  selector: 'kkl-steps-accordion-layout',
  templateUrl: './steps-accordion.component.html',
  styleUrls: ['./steps-accordion.component.scss'],
})
export class StepsAccordionComponent implements OnInit {
  // ** Panels instance array for accordion UI **
  @Input() panels: Panel[];

  // ** Step array for steps UI **
  @Input() steps: Step[];

  // ** Template map for panel and step content **
  @Input() templates: { [key: string]: TemplateRef<any> };

  // optional

  // ** When set to true disable self navigation of vertical steps **
  @Input() manuel: boolean;

  // ** When given add a button to the accordion UI **
  @Input() buttonLabel: string;

  selectedIndex$: Observable<number>;

  _selectedIndex: number;
  @Input()
  set selectedIndex(value: number) {
    this._selectedIndex = value || 0;
  }

  @Input() options: {
    isLinear?: boolean;
  } = {};

  @Output() selectionSteps: EventEmitter<SelectionChangedEvent> = new EventEmitter();

  complete$: Observable<boolean>;

  private stepsChangedEvent: SelectionChangedEvent;

  constructor(
    private stepsAccordionLayoutService: StepsAccordionLayoutService
  ) {}

  ngOnInit(): void {
    this.selectedIndex$ = this.stepsAccordionLayoutService.listenSelectIndex();
    this.complete$ = this.stepsAccordionLayoutService.listenComplete();
    this.stepsChangedEvent = this.initStepChangedEvent();
    this._emitChanged();
  }

  private initSelectEvent(): StepSelectEvent {
    const complete: boolean = this.stepsAccordionLayoutService.isComplete();

    return {
      selectedIndex: this._selectedIndex,
      last: complete ? complete : this._selectedIndex === this.steps.length - 1,
      first: this._selectedIndex === 0,
    } as StepSelectEvent;
  }

  private initStepChangedEvent() {
    const stepsChangedEvent = {
      source: this.steps,
      event: this.initSelectEvent(),
    };

    return stepsChangedEvent;
  }

  onStepChanged(event: StepSelectEvent) {
    this.stepsChangedEvent = { source: this.steps, event };
    this._emitChanged();
  }

  private _emitChanged() {
    this.selectionSteps.emit(this.stepsChangedEvent);
    this.stepsAccordionLayoutService.setStepsChangedEvent(
      this.stepsChangedEvent
    );
  }
}
