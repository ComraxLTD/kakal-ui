import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDataCellComponent } from './table-data-cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KKLTableCellDirective } from '../../directives/table-cell.directive';
import { KKLPipesModule } from '../../../pipes/pipes.module';



@NgModule({
  declarations: [
    TableDataCellComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    KKLPipesModule,
  ],exports : [
    TableDataCellComponent,

  ]
})
export class KKLTableDataCellModule { }
