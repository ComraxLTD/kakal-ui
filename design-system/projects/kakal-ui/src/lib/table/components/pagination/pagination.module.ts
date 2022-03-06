import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginationComponent } from './pagination.component';
import { KKLPaginationDirective } from './pagination.directive';

@NgModule({
  declarations: [
    PaginationComponent,
    KKLPaginationDirective,
  ],
  imports: [CommonModule, FlexLayoutModule, NgxPaginationModule],
  exports: [
    PaginationComponent,
    NgxPaginationModule,
    KKLPaginationDirective,
  ],
})
export class KKLPaginationModule {}
