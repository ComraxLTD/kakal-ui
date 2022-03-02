import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';

import { TableComponent } from './table.component';
import { MatTableModule } from '@angular/material/table';
import { KKLColumnsModule } from '../../columns/column.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatTableModule,
    KKLColumnsModule,
    KKLIconModule,
    KKLTypographyModule,
  ],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class KKLTableModule {}
