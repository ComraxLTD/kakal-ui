import { Directive, Host, HostBinding, Input } from '@angular/core';
import { VerticalStepsComponent } from './vertical-steps.component';

@Directive({
  selector: 'kkl-vertical-steps [manuel]',
})
export class VerticalStepsDirective {
  @Input() manuel: boolean;

  constructor(@Host() private hostStepper: VerticalStepsComponent) {}


  ngOnInit(): void {
    if (this.manuel) {
      // this.hostStepper.disableStepperSelect();
    }
  }
}
