import { Directive, Host, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationInstance } from 'ngx-pagination';
import { combineLatest, distinctUntilChanged, map, tap } from 'rxjs';
import { TableDataSource } from '../../models/table-datasource';
import { TableState } from '../../models/table.state';
import { TableComponent } from '../table/table.component';
import IPaginationChangeEvent from './pagination.types';
/**
 * This directive listens to the pageChange event
 * and stores the current page in the url query params
 */
@Directive({
  selector: '[kklPagination]',
})
export class KKLPaginationDirective implements OnInit {
  @Input() pagination: PaginationInstance;

  @HostListener('pageChange', ['$event']) updateUrlQueryParams(
    $event: IPaginationChangeEvent
  ) {
    const { next } = $event;

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: next },
      queryParamsHandling: 'merge',
    });
  }

  constructor(
    @Host() private hostTable: TableComponent,
    private tableDataSource: TableDataSource,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.hostTable.pagination$ = this.setPagination$();
    this.setCurrentPageFromUrl();
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
      map(([totalItems, itemsPerPage]) => totalItems > itemsPerPage)
    );
  }

  private setCurrentPageFromUrl() {
    const currentPage = this.route.snapshot.queryParamMap.get('page');

    if (currentPage) {
      const oldState = this.tableDataSource.getTableState();
      const tableState = {
        ...oldState,
        pagination: {
          ...oldState.pagination,
          currentPage: Number(currentPage),
        },
      } as TableState;

      this.tableDataSource.loadTableState({ tableState });
      // this.hostTable.pagination.currentPage = Number(currentPage);
    }
  }
}
