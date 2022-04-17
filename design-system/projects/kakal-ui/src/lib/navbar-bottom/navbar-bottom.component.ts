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
import { StepperSelectEvent } from '../stepper/stepper.component';
import { ROOT_PREFIX } from '../../constants/root-prefix';
import { combineLatest, merge, Observable, of } from 'rxjs';
import { map, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'kkl-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss'],
})
export class NavbarBottomComponent implements OnInit {
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
  @Output() next = new EventEmitter<StepperSelectEvent>();
  @Output() save = new EventEmitter();

  constructor(
    private navbarBottomService: NavbarBottomService,
    private stepperLayoutService: StepperLayoutService,
    private routerService: RouterService,
    @Inject(ROOT_PREFIX) private rootPrefix
  ) {}

  ngOnInit(): void {
    if (this.stepper) {
      this.steps$ = this.stepperLayoutService.listenToSteps();
      this.nextStep$ = this.navbarBottomService.getNextStepObs();
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
          this.handleOnNext(),
          this.onChangedStep(),
          this.setShowNextStep$()
        )
      : of(this.showNext);
  }

  // Event emitter section
  public onPrevious(): void {
    this.previous.emit();
  }

  public onSave(): void {
    this.save.emit();
  }

  private onNextStep(step: CardStepModel) {
    this.next.emit({ selectedStep: step } as StepperSelectEvent);
  }

  public onNext(): void {
    if (this.showNext && this.stepper) {
      this.navbarBottomService.emitNextStep();
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
      switchMap((step : CardStepModel) => {
        return this.steps$.pipe(
          map((steps) => {
            const nextIndex = this.findNextStepIndex(steps, step);
            return nextIndex === steps.length ? false : true;
          })
        );
      })
    );
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
