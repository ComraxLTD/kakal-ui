import { Injectable } from '@angular/core';
import { CardStatusModel } from '../cards/card-status/card-status.model';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { SelectOption } from '../form/models/question-select.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, mergeAll, skipWhile } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private headers: { [key: string]: string };

  private titleSubject: BehaviorSubject<string>;
  private headersSubject: BehaviorSubject<Observable<string>>;
  private statusSubject: BehaviorSubject<CardStepModel[]>;
  private selectStatusSubject: BehaviorSubject<CardStepModel>;

  constructor() {
    this.titleSubject = new BehaviorSubject<string>('');
    this.statusSubject = new BehaviorSubject<CardStepModel[]>([]);
    this.selectStatusSubject = new BehaviorSubject<CardStepModel>(null);
  }

  // headers section
  public setHeaders(headers: { [key: string]: string }): void {
    this.headers = headers;
  }

  public setHeadersObs(headers: Observable<string>): void {
    this.headersSubject = new BehaviorSubject<Observable<string>>(headers);
  }

  public getHeadersObs(): Observable<string> {
    return this.headersSubject.asObservable().pipe(mergeAll());
  }

  // title section
  public getTitleObs(): Observable<string> {
    return this.titleSubject.asObservable();
  }

  public emitTitle(key: string): void {
    this.titleSubject.next(this.headers[key]);
  }

  // status section
  public getStatusObs(): Observable<CardStepModel[]> {
    return this.statusSubject.asObservable();
  }

  public emitStatus(value: CardStepModel[]): void {
    this.statusSubject.next(value);
  }

  // status section
  public getSelectStatusObs(): Observable<CardStepModel> {
    return this.selectStatusSubject.asObservable();
  }

  public emitSelectStatus(value: CardStepModel): void {
    this.selectStatusSubject.next(value);
  }
   // *** need table filters ****
  // public getSelectedStatusFilters(filters: FilterMap): Observable<FilterMap> {
  //   return this.getSelectStatusObs().pipe(
  //     skipWhile((status) => !status),
  //     map((status: CardStatusModel) => status.options),
  //     map((options: SelectOption[]) => {
  //       filters['status'] = options;
  //       return filters;
  //     })
  //   );
  // }
}
