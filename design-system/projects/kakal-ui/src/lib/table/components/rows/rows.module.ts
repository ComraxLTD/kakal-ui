import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRowDirective } from './form-row/form-row.directive';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormRowComponent } from './form-row/form-row.component';
import { KKLTypographyModule } from '../../../typography/typography.module';
import { KKLTableCellModule } from '../cells/table-cell.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { KKLIconModule } from '../../../icon/icon.module';

@NgModule({
  declarations: [FormRowDirective, FormRowComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDividerModule,
    KKLIconModule,
    KKLTableCellModule,
    KKLTypographyModule,
  ],
  exports: [FormRowDirective, FormRowComponent],
})
export class KKLRowsModule {}
