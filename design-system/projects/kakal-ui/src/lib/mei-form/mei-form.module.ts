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
import { MeiInputComponent } from './mei-input/mei-input.component';
import { SumInputDirective } from  './mei-directivs/sum.directive';
import { PhoneInputDirective } from  './mei-directivs/phone.directive';
import { MeiDatepickerComponent } from './mei-datepicker/mei-datepicker.component';

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
  declarations: [MeiFormComponent, MeiSelectComponent, MeiAutocompleteComponent, MeiCheckboxComponent, MeiMultiAutocompleteComponent, MeiInputComponent,
     SumInputDirective, PhoneInputDirective, MeiDatepickerComponent],
  exports: [MeiFormComponent, MeiSelectComponent, MeiMultiAutocompleteComponent, MeiAutocompleteComponent, MeiInputComponent, MeiCheckboxComponent,
    SumInputDirective, PhoneInputDirective, MeiDatepickerComponent]
})
export class MeiFormModule {}
