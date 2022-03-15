import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search.component';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';

@NgModule({
  declarations: [FormSearchComponent],
  imports: [CommonModule, KKLFormAutoCompleteModule],
  exports: [FormSearchComponent],
})
export class KKLFormSearchModule {}
