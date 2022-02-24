import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KKLPipesModule } from '../../pipes/pipes.module';
import { KKLDirectivesModule } from '../directives/directives.module';

import { KKLFormModule } from '../form/form/form.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { MatIconModule } from '@angular/material/icon';
import { KKLColumnFormModule } from './column-form/column-form.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    KKLFormModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLDirectivesModule,
    KKLPipesModule,
    KKLColumnFormModule,
  ],
})
export class KKLColumnsModule {}
