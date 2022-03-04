import { NgModule } from '@angular/core';
import { KKLTableCellFormComponentModule } from './table-cell-form/table-cell-form.module';
import { KKLTableDataCellModule } from './table-data-cell/table-data-cell.module';
import { TableActionCellComponent } from './table-action-cell/table-action-cell.component';

@NgModule({
  imports: [KKLTableCellFormComponentModule, KKLTableDataCellModule],
  exports: [KKLTableCellFormComponentModule, KKLTableDataCellModule],
  declarations: [
    TableActionCellComponent
  ],
})
export class KKLTableCellModule {}
