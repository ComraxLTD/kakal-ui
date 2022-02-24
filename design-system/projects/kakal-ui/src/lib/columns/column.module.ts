import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KKLPipesModule } from '../../pipes/pipes.module';
import { KKLDirectivesModule } from '../directives/directives.module';

import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLColumnFormModule } from './column-form/column-form.module';
import { KKLColumnFilterModule } from './column-filter/column-filter.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLDirectivesModule,
    KKLPipesModule,
    KKLColumnFormModule,
    KKLColumnFilterModule,
  ],
  exports: [KKLColumnFormModule, KKLColumnFilterModule],
})
export class KKLColumnsModule {}
