import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginationComponent } from './pagination.component';
import { UrlPaginationDirective } from './url-pagination.directive';
import { KKLPaginationDirective } from './pagination.directive';

@NgModule({
  declarations: [
    PaginationComponent,
    UrlPaginationDirective,
    KKLPaginationDirective,
  ],
  imports: [CommonModule, FlexLayoutModule, NgxPaginationModule],
  exports: [
    PaginationComponent,
    NgxPaginationModule,
    UrlPaginationDirective,
    KKLPaginationDirective,
  ],
})
export class KKLPaginationModule {}
