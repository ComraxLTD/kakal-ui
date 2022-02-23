import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoreModule } from '../core-module/core.module';
import { DirectivesModule } from '../directives/directives.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { TitleComponent } from './kkl-title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [DirectivesModule, KKLTypographyModule,CommonModule,CoreModule],
})
export class KklTitleModule {}
