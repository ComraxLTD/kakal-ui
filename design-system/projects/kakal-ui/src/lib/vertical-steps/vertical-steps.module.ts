import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { VerticalStepsComponent } from './vertical-steps.component';

@NgModule({
  declarations: [VerticalStepsComponent],
  imports: [
    CommonModule,
    MatStepperModule,
    MatTooltipModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  exports: [MatStepperModule, VerticalStepsComponent],
})
export class KKLVerticalStepsModule {}
