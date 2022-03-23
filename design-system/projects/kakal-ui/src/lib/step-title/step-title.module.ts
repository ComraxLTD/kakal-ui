import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core-module/core.module';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { StepTitleComponent } from './step-title.component';

@NgModule({
  declarations: [StepTitleComponent],
  exports: [StepTitleComponent],
  imports: [KKLDirectivesModule, KKLTypographyModule,CommonModule,CoreModule],
})
export class KKLStepTitleModule {}
