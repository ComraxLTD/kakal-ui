import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSearchComponent } from './form-search.component';
import { KKLFormAutoCompleteModule } from '../form-autocomplete/form-autocomplete.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLButtonModule } from '../../button/button.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { KKLFlexFormModule } from '../flex-form/flex-form.module';

@NgModule({
  declarations: [FormSearchComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatExpansionModule,
    KKLButtonModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLFlexFormModule,
    KKLFormAutoCompleteModule,
  ],
  exports: [FormSearchComponent],
})
export class KKLFormSearchModule {}