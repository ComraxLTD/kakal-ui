import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UnderlineDirective } from '../../directives/underline.directive';
import { DirectivesModule } from '../../public-api';
import { CoreModule } from '../core-module/core.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { StepTitleComponent } from './step-title.component';

@NgModule({
  declarations: [StepTitleComponent],
  imports: [DirectivesModule, KKLTypographyModule,CommonModule,CoreModule],
})
export class StepTitleModule {}
