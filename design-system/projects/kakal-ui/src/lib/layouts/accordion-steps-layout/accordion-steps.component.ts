import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Step } from '../../vertical-steps/step/step.model';
import { Panel } from '../accordion-layout/accordion-types';
import { Observable, of } from 'rxjs';
import { StepperSelectionEvent, CdkStep } from '@angular/cdk/stepper';
import { VerticalStepsComponent } from '../../vertical-steps/vertical-steps.component';

@Component({
  selector: 'kkl-accordion-steps-layout',
  templateUrl: './accordion-steps.component.html',
  styleUrls: ['./accordion-steps.component.scss'],
})
export class AccordionStepsComponent implements OnInit {
  @ViewChild('verticalStepper')
  verticalStepper: VerticalStepsComponent;

  @Input() complete$: Observable<boolean>;
  @Input() steps: Step[];
  @Input() panels: Panel[];
  @Input() templates: { [key: string]: TemplateRef<any> };

  _selectedIndex: number;
  @Input()
  set selectedIndex(value: number) {
    this._selectedIndex = value;
  }

  @Input() options: {
    isLinear?: boolean;
  } = {};

  @Output() selectionChanged: EventEmitter<StepperSelectionEvent> =
    new EventEmitter();

  @Output() interacted: EventEmitter<CdkStep> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setSelectedIndex(selected: number) {
    this.verticalStepper.setSelectedIndex(selected);
  }

  onSelectionChanged(event: StepperSelectionEvent) {
    this.selectionChanged.emit(event);
  }

  onInteractedStream(event: CdkStep) {
    // console.log('step', event);
    this.interacted.emit(event);
  }
}
