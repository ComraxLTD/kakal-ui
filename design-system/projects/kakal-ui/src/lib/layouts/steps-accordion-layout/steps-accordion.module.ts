import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepsAccordionComponent } from './steps-accordion.component';
import { KKLVerticalStepsModule } from '../../vertical-steps/vertical-steps.module';
import { KKLAccordionLayoutModule } from '../accordion-layout/accordion-layout.module';

@NgModule({
  declarations: [StepsAccordionComponent],
  imports: [CommonModule, KKLVerticalStepsModule, KKLAccordionLayoutModule],
  exports: [StepsAccordionComponent],
})
export class KKLStepsAccordionModule {}
