import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TableDataCellComponent } from './table-data-cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLDataCellDirective } from './cell-data.directive';
import { KKLPipesModule } from '../../../../pipes/pipes.module';
import { KKLFormCellModule } from '../table-form-cell/table-cell-form.module';

@NgModule({
  declarations: [TableDataCellComponent, KKLDataCellDirective],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    KKLPipesModule,
    KKLFormCellModule
  ],
  exports: [TableDataCellComponent, KKLDataCellDirective],
})
export class KKLTableDataCellModule {}
