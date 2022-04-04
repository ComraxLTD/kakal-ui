import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { StepperLayoutService } from './stepper-layout.service';
import { FormControl } from '@angular/forms';

import { RouterService, BreakpointService } from '../../../services/services';

import { CardStepModel } from '../../cards/card-step/card-step.model';

import { map, switchMap } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.scss'],
})
export class StepperLayoutComponent {
  //mat split drawer
  // @ViewChild('sidenav') sidenav: MatSidenav;

  @Input() steps: CardStepModel[];
  @Input() portion$: Observable<number> = of(100);
  @Input() drawerSize$: Observable<number>;

  @Input() hasTitle: boolean;

  @Input() hasDrawer: boolean;
  @Input() drawerBtn: {
    icon: string;
    label: string;
  };

  @Input() buttonLabel: ElementRef;

  @Output() emitEndDrawerBtn: EventEmitter<void> = new EventEmitter();

  // steps props
  steps$: Observable<CardStepModel[]>;
  showDrawer$: Observable<boolean>;
  showEndDrawer$: Observable<boolean>;
  mobile$: Observable<boolean>;

  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

  constructor(
    private stepperLayoutService: StepperLayoutService,
    private routerService: RouterService,
    private breakpointService: BreakpointService
  ) {}

  @Output() changeStep: EventEmitter<CardStepModel> = new EventEmitter();
  @Output() selectStep: EventEmitter<FormControl> = new EventEmitter();

  ngOnInit(): void {
    this.stepperLayoutService.setSteps(this.steps);

    this.steps$ = this.setSteps$();

    // this.question$ = this.setSelectQuestion();
    this.showDrawer$ = this.stepperLayoutService.getDisplayDrawerObs();
    this.drawerSize$ = this.stepperLayoutService.getDrawerSizeChanged();
    this.mobile$ = this.breakpointService.isMobile();
  }
  private setSteps$(): Observable<CardStepModel[]> {
    return this.stepperLayoutService.getStepsObs().pipe(
      switchMap((steps) => {
        return this.routerService.getLastPathObs(steps).pipe(
          map((url: string) => {
            steps.map((step) => {
              if (step.isActive) {
                step.isActive = false;
              }
              if (step.path === url) {
                this.stepperLayoutService.emitChangeStep(step);
                step.isActive = true;
              }
            });

            return steps;
          })
        );
      })
    );
  }

  // DO, EVENTS
  public onChangeStep(step: CardStepModel): void {
    this.changeStep.emit(step);
  }
  public onSelectStep(control: FormControl) {
    this.selectStep.emit(control);
  }

  emitEndDrawer(): void {
    this.emitEndDrawerBtn.emit();
  }

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
}
