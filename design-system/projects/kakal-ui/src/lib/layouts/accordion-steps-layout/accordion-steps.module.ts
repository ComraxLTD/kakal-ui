import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionStepsComponent } from './accordion-steps.component';
import { KKLVerticalStepsModule } from '../../vertical-steps/vertical-steps.module';
import { KKLAccordionLayoutModule } from '../accordion-layout/accordion-layout.module';

@NgModule({
  declarations: [AccordionStepsComponent],
  imports: [CommonModule, KKLVerticalStepsModule, KKLAccordionLayoutModule],
  exports: [AccordionStepsComponent],
})
export class KKLAccordionStepsModule {}
