import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { PageHeadlineModel } from './page-headline.model';

@Injectable({
  providedIn: 'root',
})
export class PageHeadlineService {

  private pageHeadlineSource$: Subject<PageHeadlineModel[]> = new Subject<
    PageHeadlineModel[]
  >();

  constructor() {}

  public listenToPageHeadline(): Observable<PageHeadlineModel[]> {
    return this.pageHeadlineSource$.asObservable();
  }

  public emitPageHeadlineItems(pageHeadline: PageHeadlineModel[]): void {
    this.pageHeadlineSource$.next(pageHeadline);
  }
}
