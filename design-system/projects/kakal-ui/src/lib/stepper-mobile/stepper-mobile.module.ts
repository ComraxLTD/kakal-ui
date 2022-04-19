import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLButtonModule } from '../button/button.module';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLPipesModule } from '../pipes/pipes.module';
import { StepperMobileComponent } from './stepper-mobile.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLDirectivesModule,
    KKLIconModule,
    KKLPipesModule,
    KKLButtonModule,
  ],
  declarations: [StepperMobileComponent],
  exports: [StepperMobileComponent],
})
export class KKLStepperMobileModule {}
