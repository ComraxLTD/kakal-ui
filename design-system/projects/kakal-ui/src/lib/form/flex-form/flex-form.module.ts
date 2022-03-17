import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLFormDateModule } from '../form-date/form-date.module';
import { KKLFormSelectModule } from '../form-select/form-select.module';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';
import { KKLFormRangeModule } from '../form-range/form-range.module';

import { FlexFormComponent } from './flex-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FlexFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

    // form components
    KKLFormDateModule,
    KKLFormInputModule,
    KKLFormSelectModule,
    KKLFormRangeModule,
    KKLFormAutoCompleteModule,
  ],
  exports: [FlexFormComponent],
})
export class KKLFlexFormModule {}
