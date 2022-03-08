import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLFormCurrencyModule } from '../../../../form/form-currency/form-currency.module';
import { KKLFormDateModule } from '../../../../form/form-date/form-date.module';
import { KKLFormInputModule } from '../../../../form/form-input/form-input.module';
import { KKLFormSelectModule } from '../../../../form/form-select/form-select.module';
import { KKLFormUploadModule } from '../../../../form/form-upload/form-upload.module';
import { TableFormCellComponent } from './table-cell-form.component';

@NgModule({
  declarations: [TableFormCellComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    KKLFormInputModule,
    KKLFormCurrencyModule,
    KKLFormSelectModule,
    KKLFormDateModule,
    KKLFormUploadModule,
  ],
  exports: [TableFormCellComponent],
})
export class KKLTableFormCellModule {}
