import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionStepperComponent } from './accordion-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLIconModule } from '../../icon/icon.module';



@NgModule({
  declarations: [
    AccordionStepperComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatTooltipModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLDirectivesModule
  ],
  exports: [MatStepperModule, AccordionStepperComponent]
})
export class KKLAccordionStepperModule { }
