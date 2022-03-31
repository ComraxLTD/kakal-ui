import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { CardInfoComponent } from './card-info.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLDirectivesModule,
  ],
  declarations: [CardInfoComponent],
  exports: [CardInfoComponent],
})
export class KKLCardInfoModule {}
