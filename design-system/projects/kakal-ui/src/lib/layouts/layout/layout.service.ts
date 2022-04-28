import { Injectable } from '@angular/core';
import { CardStepModel } from '../../cards/card-step/card-step.model';
import { StepsSelectionEvent } from '../../stepper/stepper.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private startDrawer$: Subject<boolean>;

  constructor() {
    this.startDrawer$ = new Subject<boolean>();
  }

  emitStartDrawer(value: boolean): void {
    this.startDrawer$.next(value);
  }

  listenToStartDrawer(): Observable<boolean> {
    return this.startDrawer$.asObservable();
  }

}
