import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';

import { FormDateRangeComponent } from './form-date-range.component';

@NgModule({
  declarations: [FormDateRangeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    NgxCleaveDirectiveModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  exports: [FormDateRangeComponent],
})
export class KKLFormDateRangeModule {}
