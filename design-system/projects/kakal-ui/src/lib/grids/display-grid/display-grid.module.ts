import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KKLTypographyModule } from '../../typography/typography.module';

import { DisplayGridComponent } from './display-grid.component';

@NgModule({
  declarations: [DisplayGridComponent],
  imports: [CommonModule, FlexLayoutModule, KKLTypographyModule],
  exports: [DisplayGridComponent],
})
export class KKLDisplayGridModule {}
