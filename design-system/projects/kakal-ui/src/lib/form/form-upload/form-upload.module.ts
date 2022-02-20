import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormUploadComponent } from './form-upload.component';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    KKLIconModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    KKLTypographyModule
  ],
  declarations: [FormUploadComponent],
  exports: [FormUploadComponent]
})
export class KKLFormUploadModule {
}