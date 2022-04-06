import { Injectable } from '@angular/core';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { BehaviorSubject, mergeAll, Observable } from 'rxjs';
import { PageHeadlineModel } from '../page-headline/page-headline.model';
import { CardStatusModel } from '../cards/card-status/card-status.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private headers: { [key: string]: string };

  private titleSubject: BehaviorSubject<string>;
  private headersSubject: BehaviorSubject<Observable<PageHeadlineModel[]>>;
  private statusSubject: BehaviorSubject<CardStatusModel[]>;
  private selectStatusSubject: BehaviorSubject<CardStatusModel>;

  constructor() {
    this.titleSubject = new BehaviorSubject<string>('');
    this.statusSubject = new BehaviorSubject<CardStatusModel[]>([]);
    this.selectStatusSubject = new BehaviorSubject<CardStatusModel>(null);
  }

  // headers section
  public setHeaders(headers: { [key: string]: string }): void {
    this.headers = headers;
  }
  
  public setHeadersObs(headers: Observable<PageHeadlineModel[]>): void {
    this.headersSubject = new BehaviorSubject<Observable<PageHeadlineModel[]>>(headers);
  }

  public getHeadersObs(): Observable<PageHeadlineModel[]> {
    return this.headersSubject?.asObservable().pipe(mergeAll());
  }

  // title section
  public getTitleObs(): Observable<string> {
    return this.titleSubject.asObservable();
  }

  public emitTitle(key: string): void {
    this.titleSubject.next(this.headers[key]);
  }

  // status section
  public getStatusObs(): Observable<CardStatusModel[]> {
    return this.statusSubject.asObservable();
  }

  public emitStatus(value: CardStatusModel[]): void {
    const status: CardStatusModel[] = [...value].map(
      (status: CardStatusModel) => {
        return {
          ...status,
          size: 6,
        };
      }
    );
    this.statusSubject.next(status);
  }

  // status section
  public getSelectStatusObs(): Observable<CardStepModel> {
    return this.selectStatusSubject.asObservable();
  }

  public emitSelectStatus(value: CardStatusModel): void {
    this.selectStatusSubject.next(value);
  }
}
