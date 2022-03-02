import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';

import { TableComponent } from './table.component';
import { KKLColumnsModule } from '../../columns/column.module';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLPipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatExpansionModule,
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
