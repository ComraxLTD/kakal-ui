import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';

import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { KKLColumnsModule } from '../../columns/column.module';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLPipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    KKLColumnsModule,
    KKLIconModule,
    KKLTypographyModule,

    KKLDirectivesModule,
    KKLPipesModule,
  ],
  declarations: [TableComponent],
  providers: [],
  exports: [TableComponent],
})
export class KKLTableModule {}
