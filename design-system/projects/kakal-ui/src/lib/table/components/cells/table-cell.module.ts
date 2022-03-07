import { NgModule } from '@angular/core';
import { KKLTableFormCellComponentModule } from './table-cell-form/table-cell-form.module';
import { KKLTableDataCellModule } from './table-data-cell/table-data-cell.module';
import { KKLTableActionsCellModule } from './table-cell-action/table-actions-cell.module';
import { KKLDirectivesModule } from '../../../directives/directives.module';

@NgModule({
  imports: [
    KKLTableFormCellComponentModule,
    KKLTableDataCellModule,
    KKLTableActionsCellModule,
    KKLDirectivesModule,
  ],
  exports: [
    KKLTableFormCellComponentModule,
    KKLTableDataCellModule,
    KKLTableActionsCellModule,
  ],
})
export class KKLTableCellModule {}
