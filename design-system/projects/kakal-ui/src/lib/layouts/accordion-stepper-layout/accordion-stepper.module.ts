import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionStepperComponent } from './accordion-stepper.component';
import { KKLVerticalStepsModule } from '../../vertical-steps/vertical-steps.module';
import { KKLAccordionLayoutModule } from '../accordion-layout/accordion-layout.module';

@NgModule({
  declarations: [AccordionStepperComponent],
  imports: [CommonModule, KKLVerticalStepsModule, KKLAccordionLayoutModule],
  exports: [AccordionStepperComponent],
})
export class KKLAccordionStepperModule {}
