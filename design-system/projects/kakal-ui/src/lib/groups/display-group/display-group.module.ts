import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLDisplayDataModule } from '../../display-data/display-data.module';
import { KKLPipesModule } from '../../pipes/pipes.module';
import { KKLIconModule } from '../../icon/icon.module';

import { DisplayGroupComponent } from './display-group.component';
import { StatusProgressModule } from '../../status-progress/status-progress.module';
import { KKLButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [DisplayGroupComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule,
    KKLIconModule,
    KKLButtonModule,
    KKLTypographyModule,
    KKLPipesModule,
    KKLDisplayDataModule,
    StatusProgressModule,
    KKLIconModule,

  ],
  exports: [DisplayGroupComponent],
})
export class KKLDisplayGroupModule {}
