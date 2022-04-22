import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { FlexLayoutModule } from '@angular/flex-layout';

import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLButtonModule } from '../../button/button.module';

import { CardStatusComponent } from './card-status.component';

@NgModule({
  imports: [
    MatBadgeModule,
    FlexLayoutModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    KKLIconModule,
    KKLButtonModule,
  ],
  declarations: [CardStatusComponent],
  exports: [CardStatusComponent],
})
export class KKLCardStatusModule {}
