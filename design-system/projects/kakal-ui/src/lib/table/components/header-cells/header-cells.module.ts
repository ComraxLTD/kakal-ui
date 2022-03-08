import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCellComponent } from './components/header-cell/header-cell.component';
import { FilterHeaderCellComponent } from './components/filter-header-cell/filter-header-cell.component';
import { KKLHeaderCellDirective } from './cell-header.directive';
import { KKLTypographyModule } from '../../../typography/typography.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLDirectivesModule } from '../../../directives/directives.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    KKLHeaderCellDirective,
    HeaderCellComponent,
    FilterHeaderCellComponent,
  ],
  imports: [
    CommonModule,
    KKLTypographyModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLDirectivesModule
  ],
  exports: [KKLHeaderCellDirective, HeaderCellComponent],
})
export class KKLHeaderCellModule {}
