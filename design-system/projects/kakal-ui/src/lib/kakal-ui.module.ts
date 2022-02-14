import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { ButtonComponent } from './button/button.component';
import { TypographyComponent } from './typography/typography.component';
import { IconComponent } from './icon/icon.component';
import { TitleComponent } from './title/title.component';
import { StepTitleComponent } from './step-title/step-title.component';
import { FormComponent } from './form/form/form.component';
import { FormDateComponent } from './form/form-date/form-date.component';
import { FormInputComponent } from './form/form-input/form-input.component';
import { FormRadioComponent } from './form/form-radio/form-radio.component';
import { FormAutocompleteComponent } from './form/form-autocomplete/form-autocomplete.component';
import { FormUploadComponent } from './form/form-upload/form-upload.component';
import { FormCurrencyComponent } from './form/form-currency/form-currency.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';
import { MatRadioButton } from '@angular/material/radio';
import { MaterialModule } from './angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '@angular/flex-layout';

const angularMaterial = [MatRadioButton];

const exportPipes = [];
const exportDirective = [];

const formComps = [
  FormComponent,
  FormDateComponent,
  FormInputComponent,
  FormUploadComponent,
  FormRadioComponent,
  FormAutocompleteComponent,
  FormCurrencyComponent,
];
const components = [
  TitleComponent,
  TypographyComponent,
  IconComponent,
  ButtonComponent,
  ButtonsetComponent,
  StepTitleComponent
]
@NgModule({
  declarations: [
    KakalUiComponent,
    ...components,
    ...exportPipes,
    ...exportDirective,
    ...formComps,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, CoreModule],
  exports: [
    KakalUiComponent,
    ReactiveFormsModule,
    ...components,
    ...exportPipes,
    ...exportDirective,
    ...formComps,
  ],
})
export class KakalUiModule { }
