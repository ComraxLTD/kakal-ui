import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
  Inject,
  ViewContainerRef,
} from '@angular/core';
import { NavbarBottomService } from './navbar-bottom.service';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { RouterService } from '../../services/route.service';
import { StepperLayoutService } from '../layouts/stepper-layout/stepper-layout.service';
import { StepsAccordionLayoutService } from '../layouts/accordion-steps-layout/steps-accordion-layout.service';
import { StepperSelectEvent } from '../stepper/stepper.component';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { combineLatest, iif, merge, Observable, of } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'kkl-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss'],
})
export class NavbarBottomComponent implements OnInit {
  @Input() manual = true;

  showNext: boolean = true;

  @Input()
  set hideNext(value: boolean) {
    this.showNext = value === false ? false : true;
  }

  @Input() disableNext$: Observable<boolean>;

  showSave: boolean = true;
  @Input()
  set hideSave(value: boolean) {
    this.showSave = value === false ? false : true;
  }

  @Input() stepperSelectEvent: StepperSelectEvent;

  // @Input() showSave$: Observable<boolean>;

  // when set to true bottom navbar is consider part of stepper-layout for steps navigation logic
  @Input() stepper: boolean = true;

  @Input() nextLabel: string;
  @Input() buttonTemplate: TemplateRef<any>;

  private steps$: Observable<CardStepModel[]>;
  private nextStep$: Observable<void>;
  // private selectStep$: Observable<CardStepModel>;
  private stepperSelectEvent$: Observable<StepperSelectEvent>;

  bottomIcon: string = 'bottom_tree_';
  buttonState$: Observable<{ [x: string]: boolean }>;

  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<StepperSelectEvent>();
  @Output() save = new EventEmitter();

  constructor(
    private stepperLayoutService: StepperLayoutService,
    private stepsAccordionLayoutService: StepsAccordionLayoutService,
    private routerService: RouterService,
    @Inject(ROOT_PREFIX) private rootPrefix
  ) {}

  ngOnInit(): void {
    if (this.stepper) {
      this.steps$ = this.stepperLayoutService.listenToSteps();
      // this.nextStep$ = this.navbarBottomService.getNextStepObs();
      this.stepperSelectEvent$ =
        this.stepperLayoutService.listenToStepperSelect();
      // this.selectStep$ = this.stepperLayoutService.getChangeStepObs();
    }

    this.buttonState$ = this.setShowButtons();
    this.bottomIcon = this.setBottomIcon();
  }

  private setBottomIcon() {
    return this.bottomIcon + this.rootPrefix;
  }

  private setShowButtons() {
    return combineLatest([
      this.setShowNext(),
      this.setShowSave(),
      this.setDisabledNext(),
    ]).pipe(
      map(([next, save, disableNext]) => {
        return { save, next, disableNext };
      })
    );
  }

  private setDisabledNext(): Observable<boolean> {
    return this.disableNext$ ? this.disableNext$ : of(false);
  }

  private setShowSave() {
    return of(this.showSave);
    // return this.hasSave ? this.showSave$ : of(false);
  }

  private setShowNext(): Observable<boolean> {
    return this.showNext && this.stepper
      ? merge(
          // this.handleOnNext(),
          // this.onChangedStep(),
          this.setShowNextStep$()
        )
      : of(this.showNext);
  }

  onSave(): void {
    this.save.emit();
  }

  // onPrevious(): void {
  //   const currentPath = this.getLastPath();
  //   const isStartStep = this.committeeLayoutService.isStartStep();
  //   const isComplete = this.committeeLayoutService.isComplete();
  //   if (currentPath === 'remi-portfolio' && !isStartStep && !isComplete) {
  //     this.committeeLayoutService.previous();
  //   } else {
  //     this.routerService.goBack();
  //   }
  // }

  private onPreviousStep() {
    const event = this.stepperLayoutService.getStepperSelectEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();

    const { selectedStep, first } = event;

    console.log(first)

    if (selectedStep.hasSteps && !first && !isComplete) {
      this.stepsAccordionLayoutService.previous();
    } else {
      this.routerService.goBack();
    }
  }

  // Event emitter section
  onPrevious(): void {
    this.manual ? this.previous.emit() : this.onPreviousStep();
  }

  private onStepNext() {
    const event = this.stepperLayoutService.getStepperSelectEvent();
    const isComplete = this.stepsAccordionLayoutService.isComplete();
    const { selectedStep, last } = event;
    if (selectedStep.hasSteps) {
      if (!last) {
        this.stepsAccordionLayoutService.next();
      } else if (isComplete) {
        this.stepsAccordionLayoutService.complete();
      } else {
        this.nextStep.emit(event);
      }
    } else {
      this.nextStep.emit(event);
    }
  }

  onNext(): void {
    const event = this.stepperLayoutService.getStepperSelectEvent();

    if (this.stepper) {
      this.manual ? this.nextStep.emit(event) : this.onStepNext();
    } else {
      this.next.emit();
    }
  }

  private findNextStepIndex(
    steps: CardStepModel[],
    currentStep?: CardStepModel
  ): number {
    const currentStepIndex = currentStep
      ? steps.findIndex((item) => item.path === currentStep.path)
      : steps.findIndex((step) => {
          return step.selected;
        });
    return currentStepIndex + 1;
  }

  private onChangedStep() {
    return this.stepperSelectEvent$.pipe(
      pluck('selectedStep'),
      switchMap((step: CardStepModel) => {
        return this.steps$.pipe(
          map((steps) => {
            const nextIndex = this.findNextStepIndex(steps, step);
            return nextIndex === steps.length ? false : true;
          })
        );
      })
    );
  }

  private onNextStep(step: CardStepModel) {
    // this.next.emit({ selectedStep: step } as StepperSelectEvent);
  }

  private handleOnNext() {
    return this.nextStep$.pipe(
      switchMap(() => {
        return this.steps$.pipe(
          map((steps) => {
            const nextIndex = this.findNextStepIndex(steps);
            this.onNextStep(steps[nextIndex]);
            return nextIndex + 1 === steps.length ? false : true;
          })
        );
      })
    );
  }

  private setShowNextStep$(): Observable<boolean> {
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
