import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
  @Input() pageHeadline$!: Observable<PageHeadline[]>;
  @Input() mobile: boolean;

  slice: number;

  constructor() {}

  ngOnInit(): void {
    this.slice = this.mobile ? 1 : 1000;
  }
}
