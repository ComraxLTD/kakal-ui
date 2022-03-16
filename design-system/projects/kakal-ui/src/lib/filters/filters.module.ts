import { NgModule } from '@angular/core';
import { FiltersComponent } from './filters.component';
import { CommonModule } from '@angular/common';
import { KKLChipsModule } from '../chips/chips.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { MatButtonModule } from '@angular/material/button';
import { KKLPipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [FiltersComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    KKLPipesModule,
    KKLChipsModule,
    KKLTypographyModule,
  ],
  exports: [FiltersComponent],
})
export class KKLFiltersModule {}
