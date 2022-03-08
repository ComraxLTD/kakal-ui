import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLFormInputModule } from '../form-input/form-input.module';
import { FormComponent } from './form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLFormUploadModule } from '../form-upload/form-upload.module';
import { KKLFormCurrencyModule } from '../form-currency/form-currency.module';
import { KKLFormDateModule } from '../form-date/form-date.module';
import { KKLFormSelectModule } from '../form-select/form-select.module';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';
import { KKLFormRadioModule } from '../form-radio/form-radio.module';
import { KKLFormTextEditorModule } from '../form-texteditor/form-texteditor.module';
import { KKLFormCheckboxModule } from '../form-checkbox/form-checkbox.module';
import { KKLFormCheckboxGroupModule } from '../form-checkbox-group/form-checkbox-group.module';

@NgModule({
  declarations: [FormComponent],
  imports: [
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    KKLIconModule,
    MatGridListModule,
    FlexLayoutModule,

    // form components
    KKLFormDateModule,
    KKLFormInputModule,
    KKLFormSelectModule,
    KKLFormAutoCompleteModule,
    KKLFormCurrencyModule,
    KKLFormUploadModule,
    KKLFormTextEditorModule,
    KKLFormCheckboxModule,
    KKLFormCheckboxGroupModule,
    KKLFormRadioModule,
  ],
  exports: [FormComponent, KKLFormInputModule],
})
export class KKLFormModule {}
