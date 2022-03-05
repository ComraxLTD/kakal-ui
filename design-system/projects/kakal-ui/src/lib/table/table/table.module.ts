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
import { KKLTableCellModule } from '../cells/table-cell.module';

import { KKLTableDirective} from '../table/table.directive';
import { KKLCellDirective } from '../directives/cell.directive';
import { KKLDirectivesModule } from '../../directives/directives.module';

import { KKLPipesModule } from '../../pipes/pipes.module';

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
  declarations: [TableComponent, KKLCellDirective, KKLTableDirective ],
  providers: [],
  exports: [TableComponent, KKLCellDirective, KKLTableDirective],
})
export class KKLTableModule {}
