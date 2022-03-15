import { NgModule } from '@angular/core';
import { FiltersComponent } from './filters.component';
import { CommonModule } from '@angular/common';
import { KKLChipsModule } from '../chips/chips.module';

@NgModule({
  imports: [CommonModule, KKLChipsModule],
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
})
export class KKLFiltersModule {}
