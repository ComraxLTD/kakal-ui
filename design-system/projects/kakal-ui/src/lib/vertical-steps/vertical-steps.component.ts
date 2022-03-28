import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Step } from './step/step.model';
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
  @Input() isLinear = false;

  @Input() steps: Step[];

  @Input() templates: { [key: string]: TemplateRef<any> };

  constructor() {}

  ngOnInit(): void {
    console.log('working');
  }
}
