import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { PageHeadlineModel } from './page-headline.model';
import { PageHeadlineService } from './page-headline.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'kkl-page-headline',
  templateUrl: './page-headline.component.html',
  styleUrls: ['./page-headline.component.scss'],
})
export class PageHeadlineComponent implements OnInit {
  // @Input() templates!: { [key: string]: TemplateRef<any> };

  pageHeadline$!: Observable<PageHeadlineModel[]>;

  // sizeIndexMap: { [key: number]: number } = {
  //   0: 3.2,
  //   1: 1.8,
  // };

  // weightIndexMap: { [key: number]: number } = {
  //   0: 600,
  // };

  constructor(private pageHeadlineService: PageHeadlineService) {}

  ngOnInit(): void {
    this.pageHeadline$ = this.pageHeadlineService.listenToPageHeadline();
  }
  // getHeadlineItems(): Observable<PageHeadlineModel[]> {
  //   return this.pageHeadline$.pipe(
  //     tap((pageHeadlines: PageHeadlineModel[]) =>
  //       pageHeadlines.forEach((headline, index) => {
  //         index === 0
  //           ? (this.sizeIndexMap[index] = 3.2)
  //           : (this.sizeIndexMap[index] = 1.8);
  //       })
  //     )
  //   );
  // }
}
