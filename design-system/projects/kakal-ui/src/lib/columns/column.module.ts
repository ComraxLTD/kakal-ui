import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { KKLPipesModule } from '../../pipes/pipes.module';
import { KKLDirectivesModule } from '../directives/directives.module';

import { CoreModule } from '../core-module/core.module';
import { KKLFormModule } from '../form/form/form.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { ColumnFilterComponent } from './column-filter/column-filter.component';
import { ColumnFormComponent } from './column-form/column-form.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ColumnFormComponent, ColumnFilterComponent],
  imports: [
    CommonModule,
    CoreModule,
    MatIconModule,
    KKLFormModule,
    KKLTypographyModule,
    KKLIconModule,
    KKLDirectivesModule,
    KKLPipesModule,
  ],
})
export class KKLColumnsModule {}
