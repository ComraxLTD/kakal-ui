import { Injectable } from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.component';
import { CardStatus } from '../cards/card-status/card-status.component';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private selectedStatus$: BehaviorSubject<CardStatus>;

  constructor() {
    this.selectedStatus$ = new BehaviorSubject<CardStatus>(null);
  }

  // status section
  public getSelectStatusObs(): Observable<CardStep> {
    return this.selectedStatus$.asObservable();
  }

  public emitSelectStatus(value: CardStatus): void {
    this.selectedStatus$.next(value);
  }
}
