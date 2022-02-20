import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { FormComponent } from './form/form/form.component';
import { FormDateComponent } from './form/form-date/form-date.component';
import { FormInputComponent } from './form/form-input/form-input.component';
import { FormRadioComponent } from './form/form-radio/form-radio.component';
import { FormCurrencyComponent } from './form/form-currency/form-currency.component';
import { ButtonsetComponent } from './buttonset/buttonset.component';
import { MatRadioButton } from '@angular/material/radio';
import { MaterialModule } from './angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core-module/core.module';
import { AreaPipe } from '../pipes/area.pipe';
import { FormatPipe } from '../pipes/format.pipe';
import { LocationPipe } from '../pipes/location.pipe';
import { PrefixPipe } from '../pipes/prefix.pipe';
import { RangePipe } from '../pipes/range.pipe';
import { KKLButtonModule } from './button/button.module';
import { KKLFormAutoCompleteModule } from './form/form-autocomplete/form-autocomplete.module'; 
import { KKLFormUploadModule } from './form/form-upload/form-upload.module'; 
import { KKLIconModule } from './icon/icon.module'; 
import { KKLTypographyModule } from './typography/typography.module'; 

const exportPipes = [];
const exportDirective = [];

const formComps = [
  FormComponent,
  FormDateComponent,
  FormInputComponent,
  FormRadioComponent,
  FormCurrencyComponent,
];
const components = [
  ButtonsetComponent,
];
const directives = [
];

const pipes = [
  AreaPipe,
  FormatPipe,
  LocationPipe,
  PrefixPipe,
  RangePipe
]
@NgModule({
  declarations: [
    KakalUiComponent,
    ...components,
    ...exportPipes,
    ...exportDirective,
    ...formComps,
    ...directives,
    ...pipes,
  ],
  imports: [CommonModule, MaterialModule, ReactiveFormsModule, CoreModule],
  exports: [
    KakalUiComponent,
    ReactiveFormsModule,
    KKLButtonModule,
    KKLFormAutoCompleteModule,
    KKLIconModule,
    KKLFormUploadModule,
    KKLTypographyModule,
    ...components,
    ...exportPipes,
    ...exportDirective,
    ...formComps,
    ...directives,
    ...pipes,
  ],
})
export class KakalUiModule { }
