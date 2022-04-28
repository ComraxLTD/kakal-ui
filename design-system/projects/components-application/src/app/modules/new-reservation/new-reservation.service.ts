import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewReservationService {
  private isSaved$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  private showNext$: BehaviorSubject<{ value: boolean }> = new BehaviorSubject<{
    value: boolean;
  }>({ value: false });

  constructor() {}

  public getIsSavedAsObs(): Observable<boolean> {
    return this.isSaved$.asObservable();
  }

  public emitNewIsSaved(value: boolean): void {
    this.isSaved$.next(!this.isSaved$.getValue());
  }

  public getShowNextAsObs(): Observable<{ value: boolean }> {
    return this.showNext$.asObservable();
  }

  public emitNewShowNext(value: boolean): void {
    console.log(value);
    
    this.showNext$.next({ value: value });
  }
}
