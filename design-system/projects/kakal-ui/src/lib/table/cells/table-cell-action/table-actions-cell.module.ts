import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { KKLIconModule } from '../../../icon/icon.module';
import { KKLTypographyModule } from '../../../typography/typography.module';
import { TableActionCellComponent } from './table-action-cell.component';
import {KKLActionCellDirective} from './cell-action.directive'
import { KKLDirectivesModule } from '../../../directives/directives.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    KKLIconModule,
    KKLTypographyModule,
    KKLDirectivesModule,
    MatButtonModule,
    MatTooltipModule,
  ],
  declarations: [TableActionCellComponent, KKLActionCellDirective],
  exports: [TableActionCellComponent, KKLActionCellDirective],
})
export class KKLTableActionsCellModule {}
