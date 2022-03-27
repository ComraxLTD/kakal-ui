import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';

import { KKLButtonModule } from '../../button/button.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLFormAutoCompleteModule } from '../../form/form-autocomplete/form-autocomplete.module';

import { AdvancedSearchLayoutComponent } from './advanced-search-layout.component';
import { KKLAdvancedSearchContentDirective } from './advanced-search.directive';
import { KKLFiltersModule } from '../../filters/filters.module';
import { KKLFormModule } from '../../form/form/form.module';

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
    KKLFormModule,
    KKLFiltersModule,
  ],
  exports: [AdvancedSearchLayoutComponent, KKLAdvancedSearchContentDirective],
})
export class KKLAdvancedSearchLayoutModule {}
