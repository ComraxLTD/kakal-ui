import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core-module/core.module';

import { KKLButtonModule } from './button/button.module';
import { KKLFormAutoCompleteModule } from './form/form-autocomplete/form-autocomplete.module';
import { KKLFormUploadModule } from './form/form-upload/form-upload.module';
import { KKLIconModule } from './icon/icon.module';
import { KKLTypographyModule } from './typography/typography.module';
import { KKLMenuItemModule } from './menu-item/menu-item.module';
import { KKLMenuModule } from './menu/menu.module';
import { KklTitleModule } from './kkl-title/kkl-title.module';
import { KKLStepTitleModule } from './step-title/step-title.module';
import { FormExampleComponent } from './examples/form-example/form-example.component';
import { KKLDirectivesModule } from './directives/directives.module';
import { KKLPipesModule } from '../pipes/pipes.module';
import { KKLFormModule } from './form/form/form.module';
import { KKLFormCurrencyModule } from './form/form-currency/form-currency.module';
import { KKLFormDateModule } from './form/form-date/form-date.module';
import { KKLFormRadioModule } from './form/form-radio/form-radio.module';
import { KKLFormSelectModule } from './form/form-select/form-select.module';
import { KKLTableActionsModule } from './table/table-actions/table-actions.module';
import { KKLColumnsModule } from './columns/column.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { SidenavExampleComponent } from './examples/sidenav-example/sidenav-example.component';
import { KKLDialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [FormExampleComponent, SidenavExampleComponent],
  imports: [
    CoreModule,
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    KKLMenuModule,
    KKLIconModule,
    KklTitleModule,
    KKLStepTitleModule,
    SidenavModule,
    KKLFormModule,
    KKLFormAutoCompleteModule,
    KKLFormRadioModule,
    KKLFormDateModule,
    KKLFormSelectModule,
    KKLFormCurrencyModule,
    KKLFormUploadModule,
    KKLDialogModule,
    // KKLColumnsModule,

    KKLDirectivesModule,
    KKLPipesModule,
  ],
  exports: [
    KKLMenuItemModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KklTitleModule,
    KKLStepTitleModule,
    SidenavModule,
    KKLFormModule,
    KKLFormAutoCompleteModule,
    KKLFormRadioModule,
    KKLFormDateModule,
    KKLFormSelectModule,
    KKLFormCurrencyModule,
    KKLFormUploadModule,
    KKLDialogModule,
    KKLTableActionsModule,
    KKLColumnsModule,

    KKLPipesModule,
    KKLDirectivesModule,
  ],
})
export class KakalUiModule {}
