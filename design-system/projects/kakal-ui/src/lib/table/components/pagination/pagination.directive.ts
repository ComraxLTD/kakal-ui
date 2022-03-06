import { Directive, Host, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IPaginationChangeEvent from './pagination.types';
import { TableComponent } from '../table/table.component';
/**
 * This directive listens to the pageChange event
 * and stores the current page in the url query params
 */
@Directive({
  selector: '[kklPagination]',
})
export class KKLPaginationDirective implements OnInit {

  constructor(
    @Host() private hostTable: TableComponent,
  ) {}

  ngOnInit(): void {
    this.hostTable.pagination = true
  }
}
