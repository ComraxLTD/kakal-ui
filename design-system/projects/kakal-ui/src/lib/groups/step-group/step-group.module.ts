import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLCardStepModule } from '../../cards/card-step/card-step.module';

import { StepGroupComponent } from './step-group.component';

@NgModule({
  declarations: [StepGroupComponent],
  imports: [
    CommonModule,
    KKLDirectivesModule,
    FlexLayoutModule,
    KKLCardStepModule,
  ],
  exports: [StepGroupComponent]
})
export class KKLStepGroupModule {}
