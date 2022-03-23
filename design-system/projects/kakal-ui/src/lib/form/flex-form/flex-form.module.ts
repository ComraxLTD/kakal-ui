import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLFormDateModule } from '../form-date/form-date.module';
import { KKLFormSelectModule } from '../form-select/form-select.module';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';
import { KKLFormRangeModule } from '../form-range/form-range.module';

import { FormFlexComponent } from './flex-form.component';
import { CommonModule } from '@angular/common';
import { KKLFormUploadModule } from '../form-upload/form-upload.module';
import { KKLFormCurrencyModule } from '../form-currency/form-currency.module';
import { KKLButtonModule } from '../../button/button.module';
import { KKLFormCounterModule } from '../form-counter/form-counter.module';

@NgModule({
  declarations: [FormFlexComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    KKLButtonModule,
    // form components
    KKLFormDateModule,
    KKLFormInputModule,
    KKLFormSelectModule,
    KKLFormCounterModule,
    KKLFormUploadModule,
    KKLFormCurrencyModule,
    KKLFormRangeModule,
    KKLFormAutoCompleteModule,
  ],
  exports: [FormFlexComponent],
})
export class KKLFormFlexModule {}
