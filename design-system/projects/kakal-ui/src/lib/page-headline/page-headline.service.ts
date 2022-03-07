import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PageHeadlineModel } from './page-headline.model';

@Injectable({
  providedIn: 'root',
})
export class PageHeadlineService {
  private pageHeadlineitems$: BehaviorSubject<PageHeadlineModel[]> =
    new BehaviorSubject<PageHeadlineModel[]>([]);

  constructor() {}

public getPageHeadlineItemsAsObs(): Observable<PageHeadlineModel[]>{
  return this.pageHeadlineitems$.asObservable()
}

public emitPageHeadlineItems(pageHeadlineitems:PageHeadlineModel[]):void{
  this.pageHeadlineitems$.next(pageHeadlineitems)
}

}
