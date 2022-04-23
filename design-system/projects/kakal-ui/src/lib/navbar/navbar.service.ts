import { Injectable } from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.model';
import { BehaviorSubject, mergeAll, Observable } from 'rxjs';
import { CardStatusModel } from '../cards/card-status/card-status.model';
import { PageHeadline } from '../page-headline/page-headline.component';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {

  private selectedStatus$: BehaviorSubject<CardStatusModel>;

  constructor() {
    this.selectedStatus$ = new BehaviorSubject<CardStatusModel>(null);
  }

  // status section
  public getSelectStatusObs(): Observable<CardStep> {
    return this.selectedStatus$.asObservable();
  }

  public emitSelectStatus(value: CardStatusModel): void {
    this.selectedStatus$.next(value);
  }
}
