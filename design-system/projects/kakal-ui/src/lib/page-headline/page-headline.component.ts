import { Component, Input, OnInit } from '@angular/core';
import { PageHeadlineService } from './page-headline.service';
import { Observable, tap } from 'rxjs';

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

  constructor() {}

  ngOnInit(): void {}
}
