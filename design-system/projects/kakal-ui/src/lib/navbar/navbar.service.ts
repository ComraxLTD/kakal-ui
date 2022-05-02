import { Injectable } from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.component';
import { CardStatus } from '../cards/card-status/card-status.component';
import { PageHeadline } from '../page-headline/page-headline.component';
import { BehaviorSubject, mergeAll, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private headers: { [key: string]: string };

  private titleSubject: BehaviorSubject<string>;
  private headersSubject: BehaviorSubject<Observable<PageHeadline[]>>;
  private statusSubject: BehaviorSubject<CardStatus[]>;
  private selectStatusSubject: BehaviorSubject<CardStatus>;

  constructor() {
    this.titleSubject = new BehaviorSubject<string>('');
    this.statusSubject = new BehaviorSubject<CardStatus[]>([]);
    this.selectStatusSubject = new BehaviorSubject<CardStatus>(null);
  }

  // headers section
  public setHeaders(headers: { [key: string]: string }): void {
    this.headers = headers;
  }

  public setHeadersObs(headers: Observable<PageHeadline[]>): void {
    this.headersSubject = new BehaviorSubject<Observable<PageHeadline[]>>(
      headers
    );
  }

  public getHeadersObs(): Observable<PageHeadline[]> {
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
  public getStatusObs(): Observable<CardStatus[]> {
    return this.statusSubject.asObservable();
  }

  public emitStatus(value: CardStatus[]): void {
    const status: CardStatus[] = [...value].map(
      (status: CardStatus) => {
        return {
          ...status,
          size: 6,
        };
      }
    );
    this.statusSubject.next(status);
  }

  // status section
  public getSelectStatusObs(): Observable<CardStep> {
    return this.selectStatusSubject.asObservable();
  }

  public emitSelectStatus(value: CardStatus): void {
    this.selectStatusSubject.next(value);
  }
}
