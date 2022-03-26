import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLDirectivesModule } from './../directives/directives.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLPipesModule } from '../pipes/pipes.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { KKLFiltersModule } from '..//filters/filters.module';

import { KKLTableCellModule } from './components/cells/table-cell.module';
import { KKLHeaderCellModule } from './components/header-cells/header-cells.module';
import { KKLPaginationModule } from './components/pagination/pagination.module';
import { KKLCellDirective } from './directives/cell.directive';

import { TableComponent } from './components/table/table.component';
import { KKLTableDirective } from './components/table/table.directive';

@NgModule({
  declarations: [TableComponent, KKLCellDirective, KKLTableDirective],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    MatExpansionModule,
    MatCheckboxModule,

    KKLHeaderCellModule,
    KKLTableCellModule,
    KKLPaginationModule,

    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLPipesModule,

    KKLFiltersModule
  ],
  providers: [],
  exports: [
    TableComponent,
    KKLCellDirective,
    KKLTableDirective,
    KKLPaginationModule,
  ],
})
export class KKLTableModule {}
