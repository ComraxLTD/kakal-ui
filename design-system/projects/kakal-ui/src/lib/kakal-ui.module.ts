import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { ButtonComponent } from './button/button.component';
import { FormComponent } from './form/form/form.component';
import { FormDateComponent } from './form/form-date/form-date.component';
import { FormInputComponent } from './form/form-input/form-input.component';
import { FormRadioComponent } from './form/form-radio/form-radio.component';
import { FormAutocompleteComponent } from './form/form-autocomplete/form-autocomplete.component';
import { FormUploadComponent } from './form/form-upload/form-upload.component';
import { FormCurrencyComponent } from './form/form-currency/form-currency.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';
import {MatRadioButton } from '@angular/material/radio';

const angularMaterial=[MatRadioButton]


const exportPipes = [];
const exportDirective = [
];


const formComps = [
  // FormComponent,
  // FormDateComponent,
  // FormInputComponent,
  FormRadioComponent,
  // FormAutocompleteComponent,
  // FormUploadComponent,
  // FormCurrencyComponent,
];

@NgModule({
  declarations: [
    KakalUiComponent,
    ButtonComponent,
    
    ButtonsetComponent,
    ...exportPipes,
    ...exportDirective,
    ...formComps,
  ],
  imports: [CommonModule],
  exports: [
    KakalUiComponent,
    ButtonComponent,
    ButtonsetComponent,
    ...exportPipes,
    ...exportDirective,
    ...formComps,
  ],
})
export class KakalUiModule {}
