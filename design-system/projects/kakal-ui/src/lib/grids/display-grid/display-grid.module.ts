import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';

import { DisplayGridComponent } from './display-grid.component';
import { KKLPipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [DisplayGridComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLPipesModule,
  ],
  exports: [DisplayGridComponent],
})
export class KKLDisplayGridModule {}
