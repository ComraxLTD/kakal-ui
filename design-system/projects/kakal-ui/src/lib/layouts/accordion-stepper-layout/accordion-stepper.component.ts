import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Step } from '../../vertical-steps/step/step.model';
import { Panel } from '../accordion-layout/accordion-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-accordion-stepper-layout',
  templateUrl: './accordion-stepper.component.html',
  styleUrls: ['./accordion-stepper.component.scss'],
})
export class AccordionStepperComponent implements OnInit {

  @Input()complete$: Observable<boolean>;
  @Input() steps: Step[];
  @Input() panels: Panel[];

  @Input() templates: { [key: string]: TemplateRef<any> };

  constructor() {}

  ngOnInit(): void {}
}
