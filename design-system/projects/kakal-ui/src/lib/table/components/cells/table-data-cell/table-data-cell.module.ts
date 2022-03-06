import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataCellComponent } from './table-data-cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLDataCellDirective } from './cell-data.directive';
import { KKLPipesModule } from '../../../../pipes/pipes.module';

@NgModule({
  declarations: [TableDataCellComponent, KKLDataCellDirective],
  imports: [CommonModule, BrowserAnimationsModule, KKLPipesModule],
  exports: [TableDataCellComponent, KKLDataCellDirective],
})
export class KKLTableDataCellModule {}
