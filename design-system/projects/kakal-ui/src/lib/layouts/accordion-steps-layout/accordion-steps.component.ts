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
import { Observable, of } from 'rxjs';
import { StepperSelectionEvent, CdkStep } from '@angular/cdk/stepper';

@Component({
  selector: 'kkl-accordion-steps-layout',
  templateUrl: './accordion-steps.component.html',
  styleUrls: ['./accordion-steps.component.scss'],
})
export class AccordionStepsComponent implements OnInit {
  @Input() complete$: Observable<boolean>;
  @Input() steps: Step[];
  @Input() panels: Panel[];
  @Input() templates: { [key: string]: TemplateRef<any> };

  @Input() options: {
    isLinear?: boolean;
  } = {};


  @Output() selectionChanged: EventEmitter<StepperSelectionEvent> =
    new EventEmitter();

  @Output() interacted: EventEmitter<CdkStep> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onSelectionChanged(event: StepperSelectionEvent) {
    this.selectionChanged.emit(event);
  }

  onInteractedStream(event: CdkStep) {
    // console.log('step', event);
    this.interacted.emit(event);
  }
}
