import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageHeadlineModel } from './page-headline.model';

@Injectable({
  providedIn: 'root',
})
export class PageHeadlineService {

  private pageHeadlineSource$: BehaviorSubject<PageHeadlineModel[]> = new BehaviorSubject<
    PageHeadlineModel[]
  >([]);

  constructor() {}

  public listenToPageHeadline(): Observable<PageHeadlineModel[]> {
    return this.pageHeadlineSource$.asObservable();
  }

  public emitPageHeadlineItems(pageHeadlines: PageHeadlineModel[]): void {
    this.pageHeadlineSource$.next(pageHeadlines);
  }

  public addPageHeadlineItems(pageHeadlines: PageHeadlineModel[]): void {
    this.pageHeadlineSource$.next(this.pageHeadlineSource$.getValue().concat(pageHeadlines));
  }
}
