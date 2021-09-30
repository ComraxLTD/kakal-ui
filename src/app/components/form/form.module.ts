import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { FormAutocompleteComponent } from './form-autocomplete/form-autocomplete.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';



@NgModule({
  declarations: [FormComponent,FormAutocompleteComponent,FormGroupComponent,FormInputComponent,FormRadioComponent],
  exports:[FormComponent,FormAutocompleteComponent,FormGroupComponent,FormInputComponent,FormRadioComponent],
  imports: [
    CommonModule
  ]
})
export class FormModule { }
