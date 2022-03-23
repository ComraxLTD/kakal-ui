import { NgModule } from '@angular/core';
import { KKLTableDataCellModule } from './table-data-cell/table-data-cell.module';
import { KKLDirectivesModule } from '../../../directives/directives.module';
import { KKLTableActionsCellModule } from './table-action-cell/table-actions-cell.module';
import { KKLFormCellModule } from './table-form-cell/table-cell-form.module';

@NgModule({
  imports: [
    KKLFormCellModule,
    KKLTableDataCellModule,
    KKLTableActionsCellModule,
    KKLDirectivesModule,
  ],
  exports: [
    KKLFormCellModule,
    KKLTableDataCellModule,
    KKLTableActionsCellModule,
  ],
})
export class KKLTableCellModule {}
