import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KakalUiComponent } from './kakal-ui.component';
import { FormComponent } from './form/form/form.component';
import { FormDateComponent } from './form/form-date/form-date.component';
import { FormInputComponent } from './form/form-input/form-input.component';
import { FormRadioComponent } from './form/form-radio/form-radio.component';
import { FormCurrencyComponent } from './form/form-currency/form-currency.component';
import { MaterialModule } from './angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core-module/core.module';

import { KKLButtonModule } from './button/button.module';
import { KKLFormAutoCompleteModule } from './form/form-autocomplete/form-autocomplete.module';
import { KKLFormUploadModule } from './form/form-upload/form-upload.module';
import { KKLIconModule } from './icon/icon.module';
import { KKLTypographyModule } from './typography/typography.module';
import { FormSelectComponent } from './form/form-select/form-select.component';
import { KKLMenuItemModule } from './menu-item/menu-item.module';
import { ListItemComponent } from './list-item/list-item.component';
import { KKLMenuModule } from './menu/menu.module';
import { KklTitleModule } from './kkl-title/kkl-title.module';
import { KKLStepTitleModule } from './step-title/step-title.module';
import { FormExampleComponent } from './examples/form-example/form-example.component';
import { KKLDirectivesModule } from './directives/directives.module';
import { KKLPipesModule } from '../pipes/pipes.module';

const formComps = [
  FormComponent,
  FormDateComponent,
  FormInputComponent,
  FormRadioComponent,
  FormCurrencyComponent,
];
@NgModule({
  declarations: [
    ...formComps,
    FormSelectComponent,
    ListItemComponent,
    FormExampleComponent,
  ],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    KKLDirectivesModule,
    KKLPipesModule,
    KKLMenuModule,
    KklTitleModule,
    KKLIconModule,
    KKLStepTitleModule,
  ],
  exports: [
    ...formComps,
    KKLMenuItemModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLFormAutoCompleteModule,
    KKLFormUploadModule,
    KKLPipesModule,
    KKLDirectivesModule,
  ],
})
export class KakalUiModule {}
