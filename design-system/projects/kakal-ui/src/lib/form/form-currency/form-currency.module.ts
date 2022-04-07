import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormCurrencyComponent } from './form-currency.component';
import { CurrencyService } from './form-currency.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { KKLFormSelectModule } from '../form-select/form-select.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    KKLFormInputModule,
    KKLFormSelectModule,
    KKLIconModule,
  ],
  providers: [CurrencyService, FormBuilder],
  declarations: [FormCurrencyComponent],
  exports: [FormCurrencyComponent],
})
export class KKLFormCurrencyModule {}
