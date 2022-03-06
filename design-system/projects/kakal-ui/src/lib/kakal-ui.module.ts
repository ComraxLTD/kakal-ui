import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './angular-material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core-module/core.module';

import { KKLButtonModule } from './button/button.module';
import { KKLIconModule } from './icon/icon.module';
import { KKLTypographyModule } from './typography/typography.module';
import { KklTitleModule } from './kkl-title/kkl-title.module';

import { KKLMenuItemModule } from './menu-item/menu-item.module';
import { KKLMenuModule } from './menu/menu.module';
import { KKLStepTitleModule } from './step-title/step-title.module';

import { KKLFormAutoCompleteModule } from './form/form-autocomplete/form-autocomplete.module';
import { KKLFormModule } from './form/form/form.module';
import { KKLFormCurrencyModule } from './form/form-currency/form-currency.module';
import { KKLFormDateModule } from './form/form-date/form-date.module';
import { KKLFormRadioModule } from './form/form-radio/form-radio.module';
import { KKLFormSelectModule } from './form/form-select/form-select.module';
import { KKLFormTextEditorModule } from './form/form-texteditor/form-texteditor.module';
import { KKLFormUploadModule } from './form/form-upload/form-upload.module';

import { KKLTableModule } from './table/components/table/table.module';
import { KKLTableCellModule } from './table/components/cells/table-cell.module';
import { KKLHeaderCellModule } from './table/components/header-cells/header-cells.module';
import { KKLColumnsModule } from './columns/column.module';

import { SidenavModule } from './sidenav/sidenav.module';

import { KKLDialogModule } from './dialog/dialog.module';
import { SpinnerModule } from './spinner/spinner.module'

import { KKLDirectivesModule } from './directives/directives.module';
import { KKLPipesModule } from './pipes/pipes.module';

import { FormExampleComponent } from './examples/form-example/form-example.component';
import { SidenavExampleComponent } from './examples/sidenav-example/sidenav-example.component';
import { FormPhoneComponent } from './examples/form-phone/form-phone.component';

@NgModule({
  declarations: [FormExampleComponent, SidenavExampleComponent, FormPhoneComponent],
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

    // FORMS MODULES
    KKLFormModule,
    KKLFormAutoCompleteModule,
    KKLFormRadioModule,
    KKLFormDateModule,
    KKLFormSelectModule,
    KKLFormCurrencyModule,
    KKLFormUploadModule,
    KKLDialogModule,
    KKLFormTextEditorModule,

    // TABLE MODULES
    KKLTableModule,
    KKLHeaderCellModule,
    KKLTableCellModule,
    KKLColumnsModule,

    KKLDirectivesModule,
    KKLPipesModule,
    SpinnerModule
  ],
  exports: [
    MaterialModule,

    KKLMenuItemModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule,
    KklTitleModule,
    KKLStepTitleModule,
    SidenavModule,

    KKLFormModule,
    KKLFormTextEditorModule,
    KKLFormAutoCompleteModule,
    KKLFormRadioModule,
    KKLFormDateModule,
    KKLFormSelectModule,
    KKLFormCurrencyModule,
    KKLFormUploadModule,

    KKLTableModule,
    KKLHeaderCellModule,
    KKLTableCellModule,
    KKLColumnsModule,

    KKLDialogModule,

    KKLPipesModule,
    KKLDirectivesModule,
    SpinnerModule
  ],
})
export class KakalUiModule {}
