import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginationComponent } from './pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule, FlexLayoutModule, NgxPaginationModule],
  exports: [PaginationComponent],
})
export class KKLPaginationModule {}
