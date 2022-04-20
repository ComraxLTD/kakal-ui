import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { PageHeadline } from './page-headline.model';

@Injectable({
  providedIn: 'root',
})
export class PageHeadlineService {

  private pageHeadlineSource$: BehaviorSubject<PageHeadline[]> = new BehaviorSubject<
    PageHeadline[]
  >([]);

  constructor() {}

  public listenToPageHeadline(): Observable<PageHeadline[]> {
    return this.pageHeadlineSource$.asObservable();
  }

  public emitPageHeadlineItems(pageHeadlines: PageHeadline[]): void {
    this.pageHeadlineSource$.next(pageHeadlines);
  }

  public addPageHeadlineItems(pageHeadlines: PageHeadline[]): void {
    this.pageHeadlineSource$.next(this.pageHeadlineSource$.getValue().concat(pageHeadlines));
  }
}
