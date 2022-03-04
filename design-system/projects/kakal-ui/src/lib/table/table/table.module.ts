import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';

import { TableComponent } from './table.component';
import { KKLColumnsModule } from '../../columns/column.module';
import { KKLPipesModule } from '../../pipes/pipes.module';
import { KKLTableCellModule } from '../table-cells/table-cell.module';

import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLCellDirective } from '../directives/cell.directive';
import { KKLTableCellDirective } from '../directives/table-cell.directive';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,
    KKLColumnsModule,

    KKLTableCellModule,

    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLPipesModule,
  ],
  declarations: [TableComponent, KKLTableCellDirective, KKLCellDirective],
  providers: [],
  exports: [TableComponent, KKLTableCellDirective, KKLCellDirective],
})
export class KKLTableModule {}
