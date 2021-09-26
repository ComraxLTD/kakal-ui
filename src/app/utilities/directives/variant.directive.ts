import { Directive, Input, HostBinding } from '@angular/core';
import { StepType, StepVariant } from '../../components/step/step.model';

@Directive({
  selector: '[appVariant]',
})
export class VariantDirective {
  @Input() variant: StepVariant = StepVariant.CIRCLE;
  @Input() type: StepType;

  @HostBinding('style.border') private border: string;
  @HostBinding('style.border-radius') private radius: string;
  @HostBinding('style.box-shadow') private boxShadow: string;
  @HostBinding('style.background') private background: string;
  @HostBinding('style.background-color') private backgroundColor: string;

  constructor() {}

  ngOnInit() {
    if (this.variant === StepVariant.CIRCLE) {
      this.radius = `${50}%`;

      if (this.type === StepType.STEP) {
        this.boxShadow =
          '0px 3px 3px 1px #dadada, 0px 0px 0px 9px #ececec !important';
        this.background = `linear-gradient(
          0deg, #eeeeee 0%, #fefefe 100%`;
      }

      if (this.type === StepType.STATUS) {
        this.boxShadow = '0px 0px 0px 6px #ffffff !important';
        this.backgroundColor = '#ffffff !important';
        this.border = `1px solid #00000029`;
      }
    }
  }
}
