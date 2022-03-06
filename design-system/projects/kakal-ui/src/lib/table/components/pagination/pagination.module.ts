import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginationComponent } from './pagination.component';
import { UrlPaginationDirective } from './url-pagination.directive';

@NgModule({
  declarations: [PaginationComponent, UrlPaginationDirective],
  imports: [CommonModule, FlexLayoutModule, NgxPaginationModule],
  exports: [PaginationComponent, UrlPaginationDirective],
})
export class KKLPaginationModule {}
