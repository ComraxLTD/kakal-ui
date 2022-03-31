import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Step } from '../../vertical-steps/step/step.model';
import { Panel } from '../accordion-layout/accordion-types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-accordion-steps-layout',
  templateUrl: './accordion-steps.component.html',
  styleUrls: ['./accordion-steps.component.scss'],
})
export class AccordionStepsComponent implements OnInit {

  @Input()complete$: Observable<boolean>;
  @Input() steps: Step[];
  @Input() panels: Panel[];

  @Input() templates: { [key: string]: TemplateRef<any> };

  constructor() {}

  ngOnInit(): void {}
}
