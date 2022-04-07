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
import {
  StepSelectEvent,
  VerticalStepsComponent,
} from '../../vertical-steps/vertical-steps.component';

@Component({
  selector: 'kkl-accordion-steps-layout',
  templateUrl: './accordion-steps.component.html',
  styleUrls: ['./accordion-steps.component.scss'],
})
export class AccordionStepsComponent implements OnInit {
  
  @Input() complete$: Observable<boolean>;
  @Input() manuel: boolean;
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

  @Output() stepSelect: EventEmitter<StepSelectEvent> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onStepChanged(event: StepSelectEvent) {
    this.stepSelect.emit(event);
  }
}
