import { Directive, Host, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { TableDataSource } from '../../models/table-datasource';
import { TableSelector } from '../../models/table.selectors';
import { PageState, TableState } from '../../models/table.state';
import { TableComponent } from '../table/table.component';
import IPaginationChangeEvent from './pagination.types';

import {
  combineLatest,
  distinctUntilChanged,
  map,
  Observable,
  pipe,
  tap,
} from 'rxjs';
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
    private tableDataSource: TableDataSource
  ) {}

  ngOnInit(): void {
    this.hostTable.pagination$ = this.setPagination$();
  }

  private setPagination$() {
    // const totalItems$: Observable<number> = this.tableDataSource
    //   .select(TableSelector.PAGINATION)
    //   .pipe(
    //     map((pagination: PageState) => pagination.totalItems),
    //     distinctUntilChanged()
    //   );

    // const itemsPerPage$: Observable<number> = this.tableDataSource
    //   .select(TableSelector.PAGINATION)
    //   .pipe(
    //     map((pagination: PageState) => pagination.itemsPerPage),
    //     distinctUntilChanged()
    //   );

    return this.tableDataSource.select(TableSelector.PAGINATION).pipe(
      map((pagination: PageState) => {
        return {
          totalItems: pagination.totalItems,
          itemsPerPage: pagination.itemsPerPage,
        };
      }),
      tap(({ totalItems, itemsPerPage }) =>
        console.log(totalItems, itemsPerPage)
      ),
      map(({ totalItems, itemsPerPage }) => totalItems > itemsPerPage)
    );
  }
}
