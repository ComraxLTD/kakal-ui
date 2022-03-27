import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';

import { KKLButtonModule } from '../../button/button.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLFormFlexModule } from '../../form/flex-form/flex-form.module';
import { KKLFormAutoCompleteModule } from '../../form/form-autocomplete/form-autocomplete.module';

import { AdvancedSearchLayoutComponent } from './advanced-search-layout.component';
import { KKLFiltersModule } from '../../filters/filters.module';
import { KKLAdvancedSearchContentDirective } from './advanced-search.directive';

@NgModule({
  declarations: [
    AdvancedSearchLayoutComponent,
    KKLAdvancedSearchContentDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatExpansionModule,
    KKLButtonModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLFormAutoCompleteModule,
    KKLFormFlexModule,
    KKLFiltersModule,
  ],
  exports: [AdvancedSearchLayoutComponent, KKLAdvancedSearchContentDirective],
})
export class KKLAdvancedSearchLayoutModule {}
