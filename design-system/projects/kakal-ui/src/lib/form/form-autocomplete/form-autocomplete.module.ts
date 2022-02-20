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


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule
  ],
  declarations: [FormAutocompleteComponent],
  exports: [FormAutocompleteComponent]
})
export class KKLFormAutoCompleteModule {
}