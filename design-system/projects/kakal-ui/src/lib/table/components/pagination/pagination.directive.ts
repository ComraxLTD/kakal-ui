import { Directive, Host, Input, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import {
  combineLatest,
  distinctUntilChanged,
  map,
  Observable,
  tap,
} from 'rxjs';
import { TableDataSource } from '../../models/table-datasource';
import { TableState } from '../../models/table.state';
import { TableComponent } from '../table/table.component';
/**
 * This directive listens to the pageChange event
 * and stores the current page in the url query params
 */
@Directive({
  selector: '[kklPagination]',
})
export class KKLPaginationDirective implements OnInit {

  @Input() pagination: PaginationInstance;

  constructor(
    @Host() private hostTable: TableComponent,
    private tableDataSource: TableDataSource
  ) {}

  ngOnInit(): void {
    this.hostTable.hasPagination = true;
    this.hostTable.pagination$ = this.setPagination$();
  }

  private setPagination$() {
    const itemsPerPage$ = this.tableDataSource.connectTableState().pipe(
      map((tableState: TableState) => tableState.pagination.itemsPerPage),
      distinctUntilChanged()
    );
    const totalItems$ = this.tableDataSource.connectTableState().pipe(
      map((tableState: TableState) => tableState.pagination.totalItems),
      distinctUntilChanged()
    );

    return combineLatest([totalItems$, itemsPerPage$]).pipe(
      tap(([totalItems, itemsPerPage]) =>
        console.log([totalItems, itemsPerPage])
      ),
      map(([totalItems, itemsPerPage]) => totalItems > itemsPerPage)
    );
  }
}
