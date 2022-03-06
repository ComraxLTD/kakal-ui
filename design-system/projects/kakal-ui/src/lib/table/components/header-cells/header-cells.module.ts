import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCellComponent } from './components/header-cell/header-cell.component';
import { FilterHeaderCellComponent } from './components/filter-header-cell/filter-header-cell.component';
import { KKLHeaderCellDirective } from './cell-header.directive';
import { KKLTypographyModule } from '../../../typography/typography.module';

@NgModule({
  declarations: [
    KKLHeaderCellDirective,
    HeaderCellComponent,
    FilterHeaderCellComponent,
  ],
  imports: [CommonModule, KKLTypographyModule],
  exports: [KKLHeaderCellDirective, HeaderCellComponent],
})
export class KKLHeaderCellModule {}
