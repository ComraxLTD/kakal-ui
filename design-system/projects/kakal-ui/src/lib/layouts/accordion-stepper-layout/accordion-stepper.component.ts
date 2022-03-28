import { Component, Input, OnInit, TemplateRef, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Step } from '../../vertical-steps/step/step.model';
import { Panel } from '../accordion-layout/accordion-types';

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
