import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormRadioComponent } from './form-radio.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatRadioModule,
    BrowserAnimationsModule,
  ],
  declarations: [FormRadioComponent],
  exports: [FormRadioComponent],
})
export class KKLFormRadioModule {}
