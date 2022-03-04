import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KKLIconModule } from '../../../icon/icon.module';
import { KKLTypographyModule } from '../../../typography/typography.module';
import { TableActionCellComponent } from './table-action-cell.component';


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLTypographyModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [TableActionCellComponent],
  exports: [TableActionCellComponent],
})
export class KKLTableActionsCellModule {}
