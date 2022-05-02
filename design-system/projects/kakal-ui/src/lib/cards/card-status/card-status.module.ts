import { NgModule } from '@angular/core';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { CardStatusComponent } from './card-status.component';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatBadgeModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLIconModule,
  ],
  declarations: [CardStatusComponent],
  exports: [CardStatusComponent],
})
export class KKLCardStatusModule {}
