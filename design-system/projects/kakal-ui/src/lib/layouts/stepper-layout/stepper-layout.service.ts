import { Injectable } from '@angular/core';
import { CardStepModel } from '../../cards/card-step/card-step.model';
import { StepperSelectEvent } from '../../stepper/stepper.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepperLayoutService {
  private steps$: BehaviorSubject<CardStepModel[]>;
  private displayDrawer$: Subject<boolean>;
  private stepperSelectEvent$: Subject<StepperSelectEvent>;

  constructor() {
    this.steps$ = new BehaviorSubject<CardStepModel[]>([]);
    this.displayDrawer$ = new Subject<boolean>();
    this.stepperSelectEvent$ = new Subject<StepperSelectEvent>();
  }

  getSteps(): CardStepModel[] {
    return this.steps$.getValue();
  }

  emitSteps(steps: CardStepModel[]): void {
    this.steps$.next(steps);
  }

  listenToSteps(): Observable<CardStepModel[]> {
    return this.steps$.asObservable();
  }

  emitDisplayDrawer(value: boolean): void {
    this.displayDrawer$.next(value);
  }

  listenToDisplayDrawer(): Observable<boolean> {
    return this.displayDrawer$.asObservable();
  }

  listenToStepperSelect(): Observable<StepperSelectEvent> {
    return this.stepperSelectEvent$.asObservable();
  }
  
  emitStepperSelectEvent  (value: StepperSelectEvent): void {
    this.stepperSelectEvent$.next(value);
  }
}
