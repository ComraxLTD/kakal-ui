import { NgModule } from '@angular/core';
import { FormAutocompleteExComponent } from './form-autocomplete-ex.component';

import { KKLFormAutoCompleteModule } from '../../form/form-autocomplete/form-autocomplete.module';


@NgModule({
  imports: [
      KKLFormAutoCompleteModule
  ],
  declarations: [FormAutocompleteExComponent],
  exports: [FormAutocompleteExComponent]
})
export class KKLFormAutoCompleteExModule {
}