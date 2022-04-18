import { Injectable } from '@angular/core';
import { last, map, Observable, Subject, switchMap } from 'rxjs';
import {
  CardStepModel,
  RouterService,
  StepperLayoutService,
  StepperSelectEvent,
  StepsChangedEvent,
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
    const stepperSelectEvent =
      this.stepperLayoutService.getStepperSelectEvent();
    const stepsChangedEvent =
      this.stepsAccordionLayoutService.getStepsChangedEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();

    const { selectedStep, selectedIndex } =
      stepperSelectEvent as StepperSelectEvent;
    if (selectedStep.hasSteps) {
      const { event } = stepsChangedEvent as StepsChangedEvent;
      console.log(event);
      console.log(isComplete, 'complete');
      if (!event.last) {
        this.stepsAccordionLayoutService.next();
      } else if (!isComplete) {
        this.stepsAccordionLayoutService.complete();
      } else {
        console.log('navigation');
        this.onNextStepNavigation(selectedIndex);
      }
    } else {
      this.onNextStepNavigation(selectedIndex);
    }
  }

  onPreviousStep() {
    const stepperSelectEvent =
      this.stepperLayoutService.getStepperSelectEvent();
    const stepsChangedEvent =
      this.stepsAccordionLayoutService.getStepsChangedEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();

    const { selectedStep } = stepperSelectEvent as StepperSelectEvent;

    if (stepsChangedEvent) {
      const { event } = stepsChangedEvent as StepsChangedEvent;
      if (selectedStep.hasSteps && !event.first && !isComplete) {
        this.stepsAccordionLayoutService.previous();
      } else {
        this.routerService.goBack();
      }
    } else {
      this.routerService.goBack();
    }
  }

  setShowNextStep$(): Observable<boolean> {
    return this.stepperLayoutService.listenToSteps().pipe(
      switchMap((steps: CardStepModel[]) => {
        return this.routerService.getLastPath$().pipe(
          map((url: string) => {
            const index = steps.findIndex((item) => item.path === url);
            return !(steps.length === index + 1);
          })
        );
      })
    );
  }
}
