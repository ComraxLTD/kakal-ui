import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { PageHeadline } from './page-headline.component';

@Injectable({
  providedIn: 'root',
})
export class PageHeadlineService {

  private buttonClicked$: Subject<PageHeadline> = new Subject();
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


  public listenToHeadlineClick(): Observable<PageHeadline> {
    return this.buttonClicked$;
  }

  public emitHeadlineClick(pageHeadline: PageHeadline): void {
    this.buttonClicked$.next(pageHeadline);
  }
}
