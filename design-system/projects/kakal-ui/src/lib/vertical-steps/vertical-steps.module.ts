import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatStepperModule } from '@angular/material/stepper';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLStepsModule } from './step/step.module';
import { KKLTypographyModule } from '../typography/typography.module';

import { VerticalStepsComponent } from './vertical-steps.component';
import { VerticalStepsDirective } from './vertical-steps.directive';

@NgModule({
  declarations: [VerticalStepsComponent, VerticalStepsDirective],
  imports: [
    CommonModule,
    MatStepperModule,
    MatTooltipModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLStepsModule
  ],
  exports: [MatStepperModule, KKLStepsModule, VerticalStepsComponent, VerticalStepsDirective],
})
export class KKLVerticalStepsModule {}
