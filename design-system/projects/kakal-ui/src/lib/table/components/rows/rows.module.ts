import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormRowDirective } from './form-row/form-row.directive';

import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormRowComponent } from './form-row/form-row.component';
import { KKLTypographyModule } from '../../../typography/typography.module';
import { KKLFormCellModule } from '../cells/table-form-cell/table-cell-form.module';

@NgModule({
  declarations: [FormRowDirective, FormRowComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    KKLFormCellModule,
    KKLTypographyModule,
  ],
  exports: [FormRowDirective, FormRowComponent],
})
export class KKLRowsModule {}
