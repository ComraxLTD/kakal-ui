import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

import { KKLDirectivesModule } from '../../../directives/directives.module';
import { KKLFormDateModule } from '../../../form/form-date/form-date.module';
import { KKLFormAutoCompleteModule } from '../../../form/form-autocomplete/form-autocomplete.module';
import { KKLSortButtonModule } from '../../../button/components/sort-button/sort-button.module';
import { KKLFormInputModule } from '../../../form/form-input/form-input.module';
import { KKLTypographyModule } from '../../../typography/typography.module';

import { HeaderCellComponent } from './components/header-cell/header-cell.component';
import { FilterRangeCellComponent } from './components/filter-range-cell/filter-range-cell.component';
import { FilterHeaderCellComponent } from './components/filter-header-cell/filter-header-cell.component';
import { KKLHeaderCellDirective } from './cell-header.directive';

@NgModule({
  declarations: [
    KKLHeaderCellDirective,
    HeaderCellComponent,
    FilterHeaderCellComponent,
    FilterRangeCellComponent,
  ],
  imports: [
    CommonModule,
    KKLTypographyModule,
    MatButtonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    FlexLayoutModule,
    KKLSortButtonModule,
    KKLTypographyModule,
    KKLFormAutoCompleteModule,
    KKLFormInputModule,
    KKLFormDateModule,
    KKLDirectivesModule,
  ],
  exports: [KKLHeaderCellDirective, HeaderCellComponent],
})
export class KKLHeaderCellModule {}
