import { NgModule } from '@angular/core';
import { FiltersComponent } from './filters.component';
import { CommonModule } from '@angular/common';
import { KKLChipsModule } from '../chips/chips.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FiltersComponent],
  imports: [CommonModule, MatButtonModule, KKLChipsModule, KKLTypographyModule],
  exports: [FiltersComponent],
})
export class KKLFiltersModule {}
