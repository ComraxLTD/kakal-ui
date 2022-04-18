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
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-accordion-steps-layout',
  templateUrl: './accordion-steps.component.html',
  styleUrls: ['./accordion-steps.component.scss'],
})
export class AccordionStepsComponent implements OnInit {
  // ** Panels instance array for accordion UI **
  @Input() panels: Panel[];

  // ** Step array for steps UI **
  @Input() steps: Step[];

  // ** Template map for panel and step content **
  @Input() templates: { [key: string]: TemplateRef<any> };

  @Input() complete$: Observable<boolean>;

  // optional

  // ** When set to true disable self navigation of vertical steps **
  @Input() manuel: boolean;

  // ** When given add a button to the accordion UI **
  @Input() buttonLabel: string;

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
