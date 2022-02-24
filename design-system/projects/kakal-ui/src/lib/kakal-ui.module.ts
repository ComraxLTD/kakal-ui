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
import { KKLDirectivesModule } from './directives/directives.module';
import { KKLPipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
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
