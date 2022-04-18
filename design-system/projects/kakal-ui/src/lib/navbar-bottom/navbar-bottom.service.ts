import { Injectable } from '@angular/core';
import { map, Observable, Subject, switchMap } from 'rxjs';
import {
  CardStepModel,
  RouterService,
  StepperLayoutService,
  StepperSelectEvent,
} from '../../public-api';
import { StepsAccordionLayoutService } from '../layouts/accordion-steps-layout/steps-accordion-layout.service';

@Injectable({
  providedIn: 'root',
})
export class NavbarBottomService {
  private nextStep: Subject<void>;

  constructor(
    private stepperLayoutService: StepperLayoutService,
    private stepsAccordionLayoutService: StepsAccordionLayoutService,
    private routerService: RouterService
  ) {
    this.nextStep = new Subject<void>();
  }

  // public emitNextStep() {
  //   this.nextStep.next();
  // }
  // public getNextStepObs() {
  //   return this.nextStep.asObservable();
  // }

  private navigate(path: string) {
    const url = this.routerService.getUrl(path);
    this.routerService.navigate(url);
  }

  private onNextStepNavigation(selectedIndex: number) {
    const steps = this.stepperLayoutService.getSteps();
    const nextIndex = selectedIndex + 1;
    if (steps[nextIndex]) {
      const nextPath = steps[nextIndex].path;
      this.navigate(nextPath);
    }
  }

  onNextStep() {
    const event = this.stepperLayoutService.getStepperSelectEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();
    const { selectedStep, last, selectedIndex } = event as StepperSelectEvent;
    if (selectedStep.hasSteps) {
      if (!last) {
        this.stepsAccordionLayoutService.next();
      } else if (isComplete) {
        this.stepsAccordionLayoutService.complete();
      } else {
        this.onNextStepNavigation(selectedIndex);
      }
    } else {
      console.log('working');
      this.onNextStepNavigation(selectedIndex);
    }
  }

  onPreviousStep() {
    const event = this.stepperLayoutService.getStepperSelectEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();

    const { selectedStep, first } = event;

    console.log(first);

    if (selectedStep.hasSteps && !first && !isComplete) {
      this.stepsAccordionLayoutService.previous();
    } else {
      this.routerService.goBack();
    }
  }

  setShowNextStep$(): Observable<boolean> {
    return this.stepperLayoutService.listenToSteps().pipe(
      switchMap((steps: CardStepModel[]) => {
        return this.routerService.getLastPathObs().pipe(
          map((url: string) => {
            const index = steps.findIndex((item) => item.path === url);
            return !(steps.length === index + 1);
          })
        );
      })
    );
  }
}
