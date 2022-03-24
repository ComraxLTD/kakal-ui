import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormUploadComponent } from './form-upload.component';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { KKLButtonModule } from '../../button/button.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatListModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    KKLButtonModule,
    KKLIconModule,
    KKLTypographyModule
  ],
  declarations: [FormUploadComponent],
  exports: [FormUploadComponent]
})
export class KKLFormUploadModule {
}
