import { NgModule } from '@angular/core';
import { CardStepComponent } from './card-step.component';
import { MatCardModule } from '@angular/material/card';
import { KKLTypographyModule } from '../../typography/typography.module';
import { CommonModule } from '@angular/common';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { MatBadgeModule } from '@angular/material/badge';
import { KKLIconModule } from '../../icon/icon.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLButtonModule } from '../../button/button.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatBadgeModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLButtonModule,
    KKLIconModule,
  ],
  declarations: [CardStepComponent],
  exports: [CardStepComponent],
})
export class KKLCardStepModule {}
