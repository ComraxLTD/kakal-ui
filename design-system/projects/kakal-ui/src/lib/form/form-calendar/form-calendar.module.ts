import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NgxCleaveDirectiveModule } from 'ngx-cleave-directive';
import { KKLFormDateDirective } from '../form-date-range/form-date.directive';


import { MatIconModule } from '@angular/material/icon';
import { KKLFormRadioModule } from '../form-radio/form-radio.module';
import { KKLIconModule } from '../../icon/icon.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormCalendarComponent } from './form-calendar.component';
import { FormCalendarHeaderComponent } from './form-calendar-header/form-calendar-header.component';
import { KKLFormDateRangeModule } from '../form-date-range/form-date-range.module';

@NgModule({
  declarations: [
    FormCalendarHeaderComponent,
    FormCalendarComponent

    
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexLayoutModule,
    KKLFormRadioModule,
    MatIconModule,
    NgxCleaveDirectiveModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    KKLIconModule,
    KKLFormDateRangeModule
  ],
  exports: [FormCalendarComponent],
})
export class KklFormCalendarModule {}
