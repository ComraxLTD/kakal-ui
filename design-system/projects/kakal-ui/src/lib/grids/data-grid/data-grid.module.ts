import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataGridComponent } from './data-grid.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';

@NgModule({
  declarations: [DataGridComponent],
  imports: [CommonModule, FlexLayoutModule, KKLTypographyModule],
  exports: [DataGridComponent],
})
export class KKLDataGridModule {}
