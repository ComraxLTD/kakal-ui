import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLCardStepModule } from '../../cards/card-step/card-step.module';

import { StepGroupComponent } from './step-group.component';
import { KKLNavigationModule } from '../../navigation/navigation.module';

@NgModule({
  declarations: [StepGroupComponent],
  imports: [
    CommonModule,
    KKLDirectivesModule,
    FlexLayoutModule,
    KKLCardStepModule,
    KKLNavigationModule
  ],
  exports: [StepGroupComponent]
})
export class KKLStepGroupModule {}
