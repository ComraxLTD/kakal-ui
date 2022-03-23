import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { KKLIconModule } from '../../icon/icon.module';
import { FormComponent } from './form.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLFormGridModule } from '../form-grid/form-grid.module';

import { CommonModule } from '@angular/common';
import { KKLFormFlexModule } from '../flex-form/flex-form.module';

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
