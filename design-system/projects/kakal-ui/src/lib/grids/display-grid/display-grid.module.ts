import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLDisplayDataModule } from '../../display-data/display-data.module';

import { DisplayGridComponent } from './display-grid.component';
import { KKLPipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [DisplayGridComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLPipesModule,
    KKLDisplayDataModule
  ],
  exports: [DisplayGridComponent],
})
export class KKLDisplayGridModule {}
