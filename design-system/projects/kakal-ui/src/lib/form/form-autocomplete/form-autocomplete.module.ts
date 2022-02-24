import { NgModule } from '@angular/core';
import { FormAutocompleteComponent } from './form-autocomplete.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { KKLIconModule } from '../../icon/icon.module';
import { FormService } from '../services/form.service';
import { MessageService } from '../services/message.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    KKLIconModule,
  ],
  providers: [FormService, MessageService],
  declarations: [FormAutocompleteComponent],
  exports: [FormAutocompleteComponent],
})
export class KKLFormAutoCompleteModule {}
