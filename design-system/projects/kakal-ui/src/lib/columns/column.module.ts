import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from '../../pipes/pipes.module';

import { CoreModule } from '../core-module/core.module';
import { DirectivesModule } from '../directives/directives.module';
import { KKLFormModule } from '../form/form/form.module';
import { KKLIconModule } from '../icon/icon.module';
import { KKLTypographyModule } from '../typography/typography.module';
import { ColumnFilterComponent } from './column-filter/column-filter.component';
import { ColumnFormComponent } from './column-form/column-form.component';

@NgModule({
  declarations: [ColumnFormComponent, ColumnFilterComponent],
  imports: [
    CommonModule,
    CoreModule,
    KKLFormModule,
    KKLTypographyModule,
    KKLIconModule,
    DirectivesModule,
    PipesModule,
  ],
})
export class KKLColumnsModule {}
