import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MeiFormComponent } from './mei-form/mei-form.component';
import { MeiSelectComponent } from './mei-select/mei-select.component';
import { MeiAutocompleteComponent } from './mei-autocomplete/mei-autocomplete.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MeiCheckboxComponent } from './mei-checkbox/mei-checkbox.component';
import { KKLIconModule } from '../icon/icon.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MeiMultiAutocompleteComponent } from './mei-multi-autocomplete/mei-multi-autocomplete.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    KKLIconModule,
    MatInputModule
  ],
  declarations: [MeiFormComponent, MeiSelectComponent, MeiAutocompleteComponent, MeiCheckboxComponent, MeiMultiAutocompleteComponent],
  exports: [MeiFormComponent, MeiSelectComponent],
})
export class MeiFormModule {}