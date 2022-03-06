import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';


import { KKLColumnsModule } from '../../../columns/column.module';
import { KKLDirectivesModule } from '../../../directives/directives.module';
import { KKLIconModule } from '../../../icon/icon.module';
import { KKLPipesModule } from '../../../pipes/pipes.module';
import { KKLTypographyModule } from '../../../typography/typography.module';

import { KKLTableCellModule } from '../../components/cells/table-cell.module';
import { KKLHeaderCellModule } from '../../components/header-cells/header-cells.module';
import { KKLPaginationModule } from '../../components/pagination/pagination.module';
import { KKLCellDirective } from '../../directives/cell.directive';

import { TableComponent } from './table.component';
import { KKLTableDirective } from './table.directive';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,

    KKLColumnsModule,
    KKLHeaderCellModule,
    KKLTableCellModule,
    KKLPaginationModule,

    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLPipesModule,
  ],
  declarations: [TableComponent, KKLCellDirective, KKLTableDirective ],
  providers: [],
  exports: [TableComponent, KKLCellDirective, KKLTableDirective],
})
export class KKLTableModule {}
