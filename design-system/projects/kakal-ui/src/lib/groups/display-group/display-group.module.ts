import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisplayGroupComponent } from './display-group.component';
import { KKLStatusStepsModule } from '../../status-steps/status-steps.module';
import { KKLPipesModule } from '../../pipes/pipes.module';
import { MatDividerModule } from '@angular/material/divider';

import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';

@NgModule({
  declarations: [DisplayGroupComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    KKLTypographyModule,
    KKLPipesModule,
    KKLStatusStepsModule,
    KKLIconModule,
  ],
  exports: [DisplayGroupComponent],
})
export class KKLDisplayGroupModule {}
