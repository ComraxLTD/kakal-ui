import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SelectionChangedEvent } from './steps-accordion.component';

@Injectable({
  providedIn: 'root',
})
export class StepsAccordionLayoutService {
  private selectedIndex$: BehaviorSubject<number>;
  private complete$: BehaviorSubject<boolean>;
  private stepsChangedEvent$: BehaviorSubject<SelectionChangedEvent>;

  constructor() {
    this.selectedIndex$ = new BehaviorSubject<number>(0);
    this.complete$ = new BehaviorSubject<boolean>(false);
    this.stepsChangedEvent$ = new BehaviorSubject<SelectionChangedEvent>(null);
  }

  private dispatchSelectIndex(value: number): void {
    this.selectedIndex$.next(value);
  }

  next(): void {
    const currentIndex = this.selectedIndex$.getValue();
    this.dispatchSelectIndex(currentIndex + 1);
  }

  previous(): void {
    const currentIndex = this.selectedIndex$.getValue();
    this.dispatchSelectIndex(currentIndex - 1);
  }

  listenSelectIndex(): Observable<number> {
    return this.selectedIndex$.asObservable();
  }

  isComplete(): boolean {
    return this.complete$.getValue();
  }

  complete(): void {
    this.complete$.next(true);
  }

  listenComplete(): Observable<boolean> {
    return this.complete$.asObservable();
  }

  setStepsChangedEvent(value: SelectionChangedEvent): void {
    this.stepsChangedEvent$.next(value);
  }

  getStepsChangedEvent(): SelectionChangedEvent {
    return this.stepsChangedEvent$.value;
  }

  listenStepsChangedEvent(): Observable<SelectionChangedEvent> {
    return this.stepsChangedEvent$.asObservable();
  }
}
