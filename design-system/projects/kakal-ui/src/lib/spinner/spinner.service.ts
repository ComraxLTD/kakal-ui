import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private loading$: BehaviorSubject<boolean>;

  constructor() {
    this.loading$ = new BehaviorSubject<boolean>(false);
  }

  public open() {
    this.loading$.next(true);
  }

  public close() {
    setTimeout(() => {
      this.loading$.next(false);
    }, 500);
  }

  public getListen(): Observable<boolean> {
    return this.loading$.asObservable();
  }

}
