import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLPipesModule } from '../../pipes/pipes.module';
import { KKLIconModule } from '../../icon/icon.module';

import { DisplayGridComponent } from './display-grid.component';

@NgModule({
  declarations: [DisplayGridComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    KKLTypographyModule,
    KKLPipesModule,
    KKLIconModule,
  ],
  exports: [DisplayGridComponent],
})
export class KKLDisplayGridModule {}
