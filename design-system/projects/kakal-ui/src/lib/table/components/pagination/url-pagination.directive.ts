import { Directive, Host, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IPaginationChangeEvent from './pagination.types';
import { TableDataSource } from '../../models/table-datasource';
import { TableState } from '../../models/table.state';
import { TableComponent } from '../table/table.component';
/**
 * This directive listens to the pageChange event
 * and stores the current page in the url query params
 */
@Directive({
  selector: '[kklUrlPagination]',
})
export class UrlPaginationDirective implements OnInit {
  @Input() public page: any;

  /**
   * In order to keep the state of the pagination store the current page in the query params
   */
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
    private tableDataSource: TableDataSource,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
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
