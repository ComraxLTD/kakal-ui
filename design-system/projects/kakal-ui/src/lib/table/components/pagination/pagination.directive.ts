import { Directive, Host, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { TableDataSource } from '../../models/table-datasource';
import { TableSelector } from '../../models/table.selectors';
import { TableState } from '../../models/table.state';
import { TableComponent } from '../table/table.component';
import IPaginationChangeEvent from './pagination.types';

import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';
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
    private tableDataSource: TableDataSource,
  ) {}

  ngOnInit(): void {
    this.hostTable.pagination$ = this.setPagination$();
  }

  private setPagination$() {
    const totalItems$: Observable<number> = this.tableDataSource
      .select(TableSelector.PAGINATION)
      .pipe(
        map((pagination: PaginationInstance) => pagination.totalItems),
        distinctUntilChanged()
      );

    const itemsPerPage$: Observable<number> = this.tableDataSource
      .select(TableSelector.PAGINATION)
      .pipe(
        map((pagination: PaginationInstance) => pagination.itemsPerPage),
        distinctUntilChanged()
      );

    return combineLatest([totalItems$, itemsPerPage$]).pipe(
      map(([totalItems, itemsPerPage]) => totalItems > itemsPerPage)
    );
  }


}
