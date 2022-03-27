import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLIconModule } from '../../icon/icon.module';
import { KKLFormGridModule } from '../form-grid/form-grid.module';
import { KKLFormFlexModule } from '../form-flex/flex-form.module';

import { FormComponent } from './form.component';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,

    FlexLayoutModule,
    KKLIconModule,
    // form components

    KKLFormGridModule,
    KKLFormFlexModule,
  ],
  exports: [FormComponent, KKLFormGridModule, KKLFormFlexModule],
})
export class KKLFormModule {}
