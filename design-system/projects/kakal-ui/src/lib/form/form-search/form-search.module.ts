import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search.component';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';
import { MatButtonModule } from '@angular/material/button';
import { KKLButtonModule } from '../../button/button.module';

@NgModule({
  declarations: [FormSearchComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLButtonModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLFormAutoCompleteModule,
  ],
  exports: [FormSearchComponent],
})
export class KKLFormSearchModule {}
