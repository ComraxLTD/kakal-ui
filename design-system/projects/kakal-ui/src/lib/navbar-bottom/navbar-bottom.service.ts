import { Injectable } from '@angular/core';
import { last, map, Observable, Subject, switchMap } from 'rxjs';
import { CardStepModel} from '../cards/card-step/card-step.model'
import { RouterService } from '../../services/route.service'
import { StepsLayoutService } from '../layouts/steps-layout/steps-layout.service'
import { StepsSelectionEvent } from '../stepper/stepper.component'
import { SelectionChangedEvent } from '../layouts/steps-accordion-layout/steps-accordion.component'
import { StepsAccordionLayoutService } from '../layouts/steps-accordion-layout/steps-accordion-layout.service';

@Injectable({
  providedIn: 'root',
})
export class NavbarBottomService {
  private nextStep: Subject<void>;

  constructor(
    private stepsLayoutService: StepsLayoutService,
    private stepsAccordionLayoutService: StepsAccordionLayoutService,
    private routerService: RouterService
  ) {
    this.nextStep = new Subject<void>();
  }

  private navigate(path: string) {
    const url = this.routerService.getUrl(path);
    this.routerService.navigate(url);
  }

  private onNextStepNavigation(selectedIndex: number) {
    const steps = this.stepsLayoutService.getSteps();
    const nextIndex = selectedIndex + 1;
    if (steps[nextIndex]) {
      const nextPath = steps[nextIndex].path;
      this.navigate(nextPath);
    }
  }

  onNextStep() {
    const stepperSelectEvent = this.stepsLayoutService.getStepperSelectEvent();
    const stepsChangedEvent =
      this.stepsAccordionLayoutService.getStepsChangedEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();

    const { selectedStep, selectedIndex } =
      stepperSelectEvent as StepsSelectionEvent;

    const step = selectedStep as CardStepModel;

    if (step.hasSteps) {
      const { event } = stepsChangedEvent as SelectionChangedEvent;
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
    const stepperSelectEvent = this.stepsLayoutService.getStepperSelectEvent();
    const stepsChangedEvent =
      this.stepsAccordionLayoutService.getStepsChangedEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();

    const { selectedStep } = stepperSelectEvent as StepsSelectionEvent;
    const step = selectedStep as CardStepModel;

    if (stepsChangedEvent) {
      const { event } = stepsChangedEvent as SelectionChangedEvent;
      if (step.hasSteps && !event.first && !isComplete) {
        this.stepsAccordionLayoutService.previous();
      } else {
        this.routerService.goBack();
      }
    } else {
      this.routerService.goBack();
    }
  }

  setShowNextStep$(): Observable<boolean> {
    return this.stepsLayoutService.listenToSteps().pipe(
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
