import { NgModule } from '@angular/core';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormRadioComponent } from './form-radio/form-radio.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [FormComponent, FormGroupComponent, FormInputComponent, FormRadioComponent],
  exports: [FormComponent, FormGroupComponent, FormInputComponent, FormRadioComponent],
  imports: []

})
export class FormModule { }
