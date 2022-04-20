import { Injectable } from '@angular/core';
import { CardStepModel } from '../../cards/card-step/card-step.model';
import { StepsSelectionEvent } from '../../stepper/stepper.component';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepsLayoutService {
  private steps$: BehaviorSubject<CardStepModel[]>;
  private displayDrawer$: Subject<boolean>;
  private stepperSelectEvent$: BehaviorSubject<StepsSelectionEvent>;

  constructor() {
    this.steps$ = new BehaviorSubject<CardStepModel[]>([]);
    this.displayDrawer$ = new Subject<boolean>();
    this.stepperSelectEvent$ = new BehaviorSubject<StepsSelectionEvent>(null);
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

  getStepperSelectEvent(): StepsSelectionEvent {
    return this.stepperSelectEvent$.getValue();
  }

  listenToStepperSelect(): Observable<StepsSelectionEvent> {
    return this.stepperSelectEvent$.asObservable();
  }

  emitStepperSelectEvent(value: StepsSelectionEvent): void {
    this.stepperSelectEvent$.next(value);
  }
}
