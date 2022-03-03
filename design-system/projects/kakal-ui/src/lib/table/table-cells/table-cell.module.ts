import { NgModule } from '@angular/core';
import { KKLTableCellFormComponentModule } from './table-cell-form/table-cell-form.module';

@NgModule({
  imports: [KKLTableCellFormComponentModule],
  exports: [KKLTableCellFormComponentModule],
})
export class KKLTableCellModule {}
