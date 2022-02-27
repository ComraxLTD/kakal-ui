import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableActionsComponent } from './table-actions.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { KKLTypographyModule } from '../../typography/typography.module';
import { KKLIconModule } from '../../icon/icon.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLTypographyModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [TableActionsComponent],
  exports: [TableActionsComponent],
})
export class KKLTableActionsModule {}
