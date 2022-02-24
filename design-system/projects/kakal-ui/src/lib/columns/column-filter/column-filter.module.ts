import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { KKLButtonDirective } from '../../directives/button.directive';
import { KKLFormCurrencyModule } from '../../form/form-currency/form-currency.module';
import { KKLFormDateModule } from '../../form/form-date/form-date.module';
import { KKLFormInputModule } from '../../form/form-input/form-input.module';
import { KKLFormModule } from '../../form/form/form.module';
import { FormService } from '../../form/services/form.service';
import { KKLTypographyModule } from '../../typography/typography.module';

import { ColumnFilterComponent } from './column-filter.component';
import { ColumnFilterService } from './column-filter.service';

@NgModule({
  declarations: [ColumnFilterComponent],
  imports: [
    CommonModule,

    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,

    FlexLayoutModule,

    KKLButtonDirective,

    KKLTypographyModule,
    KKLFormModule,
    KKLFormInputModule,
    KKLFormDateModule,
    KKLFormCurrencyModule,
  ],
  providers: [ColumnFilterService, FormService],
  exports: [ColumnFilterComponent],
})
export class KKLColumnFormModule {}
