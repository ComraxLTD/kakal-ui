import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { KKLFormCurrencyModule } from '../../form/form-currency/form-currency.module';
import { KKLFormDateModule } from '../../form/form-date/form-date.module';
import { KKLFormInputModule } from '../../form/form-input/form-input.module';
import { KKLFormUploadModule } from '../../form/form-upload/form-upload.module';
import { KKLFormModule } from '../../form/form/form.module';
import { ColumnFormComponent } from './column-form.component';

@NgModule({
  declarations: [ColumnFormComponent],
  imports: [
    CommonModule,
    MatIconModule,
    KKLFormModule,
    KKLFormInputModule,
    KKLFormDateModule,
    KKLFormUploadModule,
    KKLFormCurrencyModule,
  ],
  exports: [ColumnFormComponent],
})
export class KKLColumnFormModule {}
