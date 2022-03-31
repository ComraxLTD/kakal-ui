import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaginationComponent } from './pagination.component';
import { KKLPaginationDirective } from './pagination.directive';
import { UrlPaginationDirective } from './url-pagination.directive';
import { KKLFormSelectModule } from '../../../form/form-select/form-select.module';

@NgModule({
  declarations: [
    PaginationComponent,
    KKLPaginationDirective,
    UrlPaginationDirective,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxPaginationModule,
    KKLFormSelectModule,
  ],
  exports: [
    PaginationComponent,
    NgxPaginationModule,
    KKLPaginationDirective,
    UrlPaginationDirective,
  ],
})
export class KKLPaginationModule {}
