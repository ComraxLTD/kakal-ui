import { Component, Input, OnInit, Type } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'kkl-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class StepComponent implements OnInit {


  constructor() {}

  ngOnInit(): void {}
}
