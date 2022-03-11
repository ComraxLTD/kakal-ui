import { NgModule } from '@angular/core';
import { KKLTableDataCellModule } from './table-data-cell/table-data-cell.module';
import { KKLDirectivesModule } from '../../../directives/directives.module';
import { KKLActionsCellModule } from './table-action-cell/table-actions-cell.module';
import { KKLFormCellModule } from './table-form-cell/table-cell-form.module';
import { KKLCellDirective } from './cell.directive';

@NgModule({
  declarations: [KKLCellDirective],
  imports: [
    KKLFormCellModule,
    KKLTableDataCellModule,
    KKLActionsCellModule,
    KKLDirectivesModule,
  ],
  exports: [
    KKLCellDirective,
    KKLFormCellModule,
    KKLTableDataCellModule,
    KKLActionsCellModule,
  ],
})
export class KKLTableCellModule {}
