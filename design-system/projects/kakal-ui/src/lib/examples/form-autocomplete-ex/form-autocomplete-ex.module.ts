import { NgModule } from '@angular/core';
import { FormAutocompleteExComponent } from './form-autocomplete-ex.component';

import { KKLFormAutoCompleteModule } from '../../form/form-autocomplete/form-autocomplete.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [KKLFormAutoCompleteModule, CommonModule],
  declarations: [FormAutocompleteExComponent],
  exports: [FormAutocompleteExComponent],
})
export class KKLFormAutoCompleteExModule {}
