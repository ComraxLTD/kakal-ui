import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { KKLFormDateModule } from '../form-date/form-date.module';
import { KKLFormSelectModule } from '../form-select/form-select.module';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';
import { KKLFormRangeModule } from '../form-range/form-range.module';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { KKLFormUploadModule } from '../form-upload/form-upload.module';
import { KKLFormCurrencyModule } from '../form-currency/form-currency.module';
import { KKLButtonModule } from '../../button/button.module';
import { KKLFormCounterModule } from '../form-counter/form-counter.module';
import { KKLFormRadioModule } from '../form-radio/form-radio.module';
import { KKLFormTextEditorModule } from '../form-texteditor/form-texteditor.module';

import { FlexFormInputDirective } from './flex-form-input.directive';
import { FormFlexComponent } from './flex-form.component';

@NgModule({
  declarations: [FormFlexComponent, FlexFormInputDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatSlideToggleModule,
    MatCheckboxModule,

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
    KKLFormRadioModule,
    KKLFormTextEditorModule,
  ],
  exports: [FormFlexComponent],
})
export class KKLFormFlexModule {}
