import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface AccordionState {
  expendAll: boolean;
  expended: number[];
}

@Injectable({
  providedIn: 'root',
})
export class AccordionDataSource {
  private accordionState$: BehaviorSubject<AccordionState>;

  constructor() {
    this.accordionState$ = new BehaviorSubject<AccordionState>({
      expendAll: false,
      expended: [0],
    });
  }

  public listen() {
    return this.accordionState$.asObservable();
  }

  public dispatch() {
    const accordionState = this.accordionState$.getValue();
    this.accordionState$.next(accordionState);
  }
}
