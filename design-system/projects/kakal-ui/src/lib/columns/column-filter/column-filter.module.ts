import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { KKLFormModule } from '../../form/form/form.module';
import { KKLFormCurrencyModule } from '../../form/form-currency/form-currency.module';
import { KKLFormDateModule } from '../../form/form-date/form-date.module';
import { KKLFormInputModule } from '../../form/form-input/form-input.module';
import { FormService } from '../../form/services/form.service';
import { KKLTypographyModule } from '../../typography/typography.module';

import { ColumnFilterComponent } from './column-filter.component';
import { ColumnFilterService } from './column-filter.service';
import { KKLDirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [ColumnFilterComponent],
  imports: [
    CommonModule,

    MatButtonModule,
    MatMenuModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    KKLDirectivesModule,
    FlexLayoutModule,

    KKLTypographyModule,
    KKLFormModule,
    KKLFormInputModule,
    KKLFormDateModule,
    KKLFormCurrencyModule,
  ],
  providers: [ColumnFilterService, FormService],

  exports: [ColumnFilterComponent],
})
export class KKLColumnFilterModule {}
