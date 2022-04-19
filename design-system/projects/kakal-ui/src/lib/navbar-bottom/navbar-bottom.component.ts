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
import { StepsLayoutService } from '../layouts/steps-layout/steps-layout.service';
import { StepsSelectionEvent } from '../stepper/stepper.component';
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

  @Input() stepperSelectEvent: StepsSelectionEvent;

  // @Input() showSave$: Observable<boolean>;

  // when set to true bottom navbar is consider part of steps-layout for steps navigation logic
  @Input() stepper: boolean = true;

  @Input() nextLabel: string;
  @Input() buttonTemplate: TemplateRef<any>;

  private steps$: Observable<CardStepModel[]>;
  private nextStep$: Observable<void>;
  // private selectStep$: Observable<CardStepModel>;
  private stepperSelectEvent$: Observable<StepsSelectionEvent>;

  bottomIcon: string = 'bottom_tree_';
  buttonState$: Observable<{ [x: string]: boolean }>;

  @Output() previous = new EventEmitter();
  @Output() next = new EventEmitter<void>();
  @Output() nextStep = new EventEmitter<StepsSelectionEvent>();
  @Output() save = new EventEmitter();

  constructor(
    private stepsLayoutService: StepsLayoutService,
    private navbarBottomService: NavbarBottomService,
    @Inject(ROOT_PREFIX) private rootPrefix
  ) {}

  ngOnInit(): void {
    if (this.stepper) {
      this.stepperSelectEvent$ =
        this.stepsLayoutService.listenToStepperSelect();
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
          this.navbarBottomService.setShowNextStep$()
        )
      : of(this.showNext);
  }

  onSave(): void {
    this.save.emit();
  }


  // Event emitter section
  onPrevious(): void {
    this.manual
      ? this.previous.emit()
      : this.navbarBottomService.onPreviousStep();
  }

  onNext(): void {
    const event = this.stepsLayoutService.getStepperSelectEvent();

    if (this.stepper) {
      this.manual
        ? this.nextStep.emit(event)
        : this.navbarBottomService.onNextStep();
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

  private onStepNext(step: CardStepModel) {
    // this.next.emit({ selectedStep: step } as StepsSelectionEvent);
  }

  private handleOnNext() {
    return this.nextStep$.pipe(
      switchMap(() => {
        return this.steps$.pipe(
          map((steps) => {
            const nextIndex = this.findNextStepIndex(steps);
            this.onStepNext(steps[nextIndex]);
            return nextIndex + 1 === steps.length ? false : true;
          })
        );
      })
    );
  }
}
