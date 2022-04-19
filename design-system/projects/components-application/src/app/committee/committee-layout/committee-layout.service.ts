import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommitteeLayoutService {
  private selectedIndex$: BehaviorSubject<number>;
  private complete$: BehaviorSubject<boolean>;

  private innerStepsLength!: number;

  constructor() {
    this.selectedIndex$ = new BehaviorSubject<number>(0);
    this.complete$ = new BehaviorSubject<boolean>(false);
  }

  private dispatchSelectIndex(value: number): void {
    this.selectedIndex$.next(value);
  }

  setInnerStepsLength(value: number): void {
    this.innerStepsLength = value;
  }

  isLastStep(): boolean {
    const currentIndex = this.selectedIndex$.getValue();
    return currentIndex === this.innerStepsLength - 1;
  }

  isStartStep(): boolean {
    const currentIndex = this.selectedIndex$.getValue();
    return currentIndex === 0;
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
}
