import { Directive, Host, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import IPaginationChangeEvent from './pagination.types';
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
    @Host() private hostTable: TableComponent,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const currentPage = this.route.snapshot.queryParamMap.get('page');

    if (currentPage) {
      this.hostTable.pagination.currentPage = Number(currentPage);
    }
  }
}
