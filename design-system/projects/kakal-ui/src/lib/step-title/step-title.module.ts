import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core-module/core.module';
import { DirectivesModule } from '../directives/directives.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { StepTitleComponent } from './step-title.component';

@NgModule({
  declarations: [StepTitleComponent],
  imports: [DirectivesModule, KKLTypographyModule,CommonModule,CoreModule],
})
export class StepTitleModule {}
