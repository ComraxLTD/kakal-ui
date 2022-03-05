import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderCellComponent } from './components/header-cell/header-cell.component';
import { FilterHeaderCellComponent } from './components/filter-header-cell/filter-header-cell.component';



@NgModule({
  declarations: [
    HeaderCellComponent,
    FilterHeaderCellComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TableHeaderCellsModule { }
