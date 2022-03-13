import { Injectable } from '@angular/core';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private statusSubject: BehaviorSubject<CardStepModel[]>;
  private selectStatusSubject: BehaviorSubject<CardStepModel>;
  private titleSubject: BehaviorSubject<string>;
  constructor() {
    this.statusSubject = new BehaviorSubject<CardStepModel[]>([]);
    this.selectStatusSubject = new BehaviorSubject<CardStepModel>(null);
    this.titleSubject = new BehaviorSubject('');
  }

  // title section

  getTitle(): Observable<string> {
    return this.titleSubject.asObservable();
  }

  setTitle(str: string): void {
    this.titleSubject.next(str);
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
