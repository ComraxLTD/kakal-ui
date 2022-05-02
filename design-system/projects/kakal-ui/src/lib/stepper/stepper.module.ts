import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper.component';
import { KKLDirectivesModule } from '../directives/directives.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { KKLCardStatusModule } from '../cards/card-status/card-status.module';
import { KKLCardStepModule } from '../cards/card-step/card-step.module';

@NgModule({
  imports: [
    KKLDirectivesModule,
    FlexLayoutModule,
    CommonModule,
    KKLCardStepModule,
    KKLCardStatusModule,
  ],
  declarations: [StepperComponent],
  exports: [StepperComponent],
})
export class KKLStepperModule {}
