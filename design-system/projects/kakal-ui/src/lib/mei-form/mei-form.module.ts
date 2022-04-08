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
import { SumInputDirective } from  './mei-directives/sum.directive';
import { PhoneInputDirective } from  './mei-directives/phone.directive';
import { MeiDatepickerComponent } from './mei-datepicker/mei-datepicker.component';
import { DateFnsAdapter, MatDateFnsModule, MAT_DATE_FNS_FORMATS } from '@angular/material-date-fns-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { he } from 'date-fns/locale';
import { MeiRangeDatepickerComponent } from './mei-range-datepicker/mei-range-datepicker.component';
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatChipsModule,
    KKLIconModule,
    MatInputModule,
    MatDateFnsModule,
    MatDatepickerModule
  ],
  declarations: [MeiFormComponent, MeiSelectComponent, MeiAutocompleteComponent, MeiCheckboxComponent, MeiMultiAutocompleteComponent, MeiInputComponent,
     SumInputDirective, PhoneInputDirective, MeiDatepickerComponent, MeiRangeDatepickerComponent],
  exports: [MeiFormComponent, MeiSelectComponent, MeiMultiAutocompleteComponent, MeiAutocompleteComponent, MeiInputComponent, MeiCheckboxComponent,
    SumInputDirective, PhoneInputDirective, MeiDatepickerComponent, MeiRangeDatepickerComponent],
    providers: [
      { provide: DateAdapter, useClass: DateFnsAdapter },
      { provide: MAT_DATE_LOCALE, useValue: he },
      { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS },
    //   {
    //   provide: DateAdapter,
    //   useClass: DateFnsAdapter,
    //   deps: [MAT_DATE_LOCALE, MAT_DATE_FN],
    // },

    // {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class MeiFormModule {}
