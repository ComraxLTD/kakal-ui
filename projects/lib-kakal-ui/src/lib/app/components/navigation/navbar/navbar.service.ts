import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardStepModel } from '../../cards/card-step/card-step.model';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private title$: BehaviorSubject<string>;
  private status$: BehaviorSubject<CardStepModel[]>;
  private showStatus$: BehaviorSubject<boolean>;

  constructor() {
    this.title$ = new BehaviorSubject<string>('');
    this.status$ = new BehaviorSubject<CardStepModel[]>([]);
    this.showStatus$  = new BehaviorSubject<boolean>(true)
  }

  public getTitleObs(): Observable<string> {
    return this.title$.asObservable();
  }

  public emitTitle(value: string) {
    return this.title$.next(value);
  }

  public getStatusObs(): Observable<CardStepModel[]> {
    return this.status$.asObservable();
  }

  public emitStatus(value: CardStepModel[]): void {
    console.log(value)
    this.status$.next(value);
  }

  public getShowStatusObs(): Observable<boolean> {
    return this.showStatus$.asObservable();
  }

  public emitShowStatus(value: boolean): void {
    this.showStatus$.next(value);
  }

  public toggleStatus(show: boolean, status: CardStepModel[]): void {
    show ? this.emitStatus(status) : this.emitStatus([]);
  }
}
