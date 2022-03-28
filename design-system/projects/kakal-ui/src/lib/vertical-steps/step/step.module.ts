import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepper, MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLIconModule } from '../../icon/icon.module';
import { StepComponent } from './step.component';
import { StepDirective } from './step.directive';

@NgModule({
  declarations: [StepComponent, StepDirective],
  imports: [
    CommonModule,
    MatStepperModule,
    MatTooltipModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  providers: [MatStepper],
  exports: [MatStepperModule, StepComponent, StepDirective],
})
export class KKLStepsModule {}
