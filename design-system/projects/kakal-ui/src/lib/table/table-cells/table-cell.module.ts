import { NgModule } from '@angular/core';
import { KKLTableCellFormComponentModule } from './table-cell-form/table-cell-form.module';
import { KKLTableDataCellModule } from './table-data-cell/table-data-cell.module';

@NgModule({
  imports: [KKLTableCellFormComponentModule, KKLTableDataCellModule],
  exports: [KKLTableCellFormComponentModule, KKLTableDataCellModule],
})
export class KKLTableCellModule {}
