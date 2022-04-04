import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { CardStepModel } from '../../cards/card-step/card-step.model';

@Injectable({
  providedIn: 'root',
})
export class StepperLayoutService {
  private stepperSubject: BehaviorSubject<CardStepModel[]>;
  private showDrawer: BehaviorSubject<boolean>;

  private changedStep: Subject<CardStepModel>;

  constructor() {
    this.stepperSubject = new BehaviorSubject<CardStepModel[]>([]);
    this.showDrawer = new BehaviorSubject<boolean>(false);
    this.changedStep = new Subject<CardStepModel>();
  }

  public setSteps(steps: CardStepModel[]): void {
    this.stepperSubject.next(steps);
  }

  public getStepsObs(): Observable<CardStepModel[]> {
    return this.stepperSubject.asObservable();
  }

  public emitDisplayDrawer(value: boolean): void {
    this.showDrawer.next(value);
  }

  public getDisplayDrawerObs(): Observable<boolean> {
    return this.showDrawer.asObservable();
  }

  public emitChangeStep(step?: CardStepModel) {
    this.changedStep.next(step);
  }
  
  public getChangeStepObs(): Observable<CardStepModel> {
    return this.changedStep.asObservable();
  }
}
