import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormCurrencyComponent } from './form-currency.component';
import { CurrencyService } from './form-currency.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { KKLIconModule } from '../../icon/icon.module';
import { MatSelectModule } from '@angular/material/select';
import { KKLFormSelectModule } from '../form-select/form-select.module';

@NgModule({
  imports: [
    CommonModule,
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
