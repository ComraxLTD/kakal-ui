import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PageHeadline } from './page-headline.component';

@Injectable({
  providedIn: 'root',
})
export class PageHeadlineService {

  private pageHeadlineSource$: Subject<PageHeadline[]> = new Subject<
    PageHeadline[]
  >();

  constructor() {}

  public listenToPageHeadline(): Observable<PageHeadline[]> {
    return this.pageHeadlineSource$.asObservable();
  }

  public emitPageHeadlineItems(pageHeadline: PageHeadline[]): void {
    this.pageHeadlineSource$.next(pageHeadline);
  }
}
