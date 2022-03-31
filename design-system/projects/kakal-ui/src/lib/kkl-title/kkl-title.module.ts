import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core-module/core.module';
import { KKLDirectivesModule } from '../directives/directives.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { TitleComponent } from './kkl-title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [KKLDirectivesModule, KKLTypographyModule,CommonModule,CoreModule],
  exports: [TitleComponent],
})
export class KklTitleModule {}
