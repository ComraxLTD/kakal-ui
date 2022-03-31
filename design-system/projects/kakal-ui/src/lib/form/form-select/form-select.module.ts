import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLIconModule } from '../../icon/icon.module';
import { MessageService } from '../services/message.service';
import { FormSelectComponent } from './form-select.component';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    
    ReactiveFormsModule,
    KKLIconModule
  ],
  declarations: [FormSelectComponent],
  providers: [MessageService],
  exports: [FormSelectComponent],
})
export class KKLFormSelectModule {}
