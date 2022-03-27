import { Component, Input, OnInit, Type } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'kkl-vertical-stepper',
  templateUrl: './vertical-stepper.component.html',
  styleUrls: ['./vertical-stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class VerticalStepperComponent implements OnInit {

  @Input() isLinear = false;

  @Input() steps : {comp :  Type<any>, label : string, key : string}[]

  constructor() {}

  ngOnInit(): void {}
}
