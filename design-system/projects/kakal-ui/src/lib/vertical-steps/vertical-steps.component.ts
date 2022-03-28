import { Component, Input, OnInit, Type } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

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

  @Input() steps: { comp: Type<any>; label: string; key: string }[];

  constructor() {}

  ngOnInit(): void {}
}
