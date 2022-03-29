import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { CardFilterComponent } from './card-filter.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  declarations: [CardFilterComponent],
  exports: [CardFilterComponent],
})
export class KKLCardFilterModule {}
