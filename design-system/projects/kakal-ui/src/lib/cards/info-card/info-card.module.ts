import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoCardComponent } from './info-card.component';
import { KKLDirectivesModule } from '../../directives/directives.module';
import { KKLIconModule } from '../../icon/icon.module';
import { KKLTypographyModule } from '../../typography/typography.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    KKLTypographyModule,
    KKLIconModule,
    
    KKLDirectivesModule,
    FlexLayoutModule,
    MatTooltipModule
  ],
  declarations: [InfoCardComponent],
  exports: [InfoCardComponent],
})
export class KKLInfoCardModule {}
