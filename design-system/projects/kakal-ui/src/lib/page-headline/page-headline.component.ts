import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PageHeadlineService } from './page-headline.service';

export interface PageHeadline {
  value: any;
  format?: string;
  status?: boolean;
}

@Component({
  selector: 'kkl-page-headline',
  templateUrl: './page-headline.component.html',
  styleUrls: ['./page-headline.component.scss'],
})
export class PageHeadlineComponent implements OnInit {
  @Input() mobile: boolean;

  slice: number;
  pageHeadline$!: Observable<PageHeadline[]>;

  constructor(
    private pageHeadlineService : PageHeadlineService
  ) {}

  ngOnInit(): void {
    this.pageHeadline$ = this.pageHeadlineService.listenToPageHeadline()
    this.slice = this.mobile ? 1 : 1000;
  }
}
