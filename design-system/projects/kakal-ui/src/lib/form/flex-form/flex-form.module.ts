import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLFormDateModule } from '../form-date/form-date.module';
import { KKLFormSelectModule } from '../form-select/form-select.module';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';
import { KKLFormRangeModule } from '../form-range/form-range.module';

import { FlexFormComponent } from './flex-form.component';

@NgModule({
  declarations: [FlexFormComponent],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
