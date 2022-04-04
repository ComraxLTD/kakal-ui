import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperLayoutService } from './stepper-layout.service';

import { RouterService, BreakpointService } from '../../../services/services';

import { CardStepModel } from '../../cards/card-step/card-step.model';

import { map, mergeMap, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.scss'],
})
export class StepperLayoutComponent {
  @Input() steps: CardStepModel[];

  // control end drawer open and close width
  @Input() drawerPortion: { open: number; close: number } = {
    open: 0,
    close: 100,
  };
  @Input() drawerType: 'file' | 'notes';

  @Input() hasEndDrawer: boolean;

  // steps props
  steps$: Observable<CardStepModel[]>;

  // drawer props
  portion$: Observable<number> = of(100);
  showStartDrawer$: Observable<boolean>;
  endDrawerSize$: Observable<number>;

  //end drawer opened/closed
  _endDrawerOpen: boolean = false;

  //drawer sizes
  _openDrawer!: number;
  _closedDrawer!: number;

  // drawer btn
  drawerBtn: {
    icon: string;
    label: string;
  };

  @Output() openChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() stepChanged: EventEmitter<CardStepModel> = new EventEmitter();

  constructor(
    private stepperLayoutService: StepperLayoutService,
    private routerService: RouterService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.stepperLayoutService.setSteps(this.setSteps());

    this.steps$ = this.setSteps$();

    this._openDrawer = this.drawerPortion.open;
    this._closedDrawer = this.drawerPortion.close;

    this.drawerBtn = this.setDrawerBtn();

    this.showStartDrawer$ = this.stepperLayoutService.getDisplayDrawerObs();

    this.portion$ = this.getBreakPoints();
  }

  private setSteps(): CardStepModel[] {
    return this.steps.map((step: CardStepModel) => {
      return {
        ...step,
        size: 3,
        variant: 'circle',
        type: 'step',
      };
    });
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

  private setDrawerBtn() {
    if (this.drawerType === 'file') {
      return { icon: 'portfolio', label: 'מסמכים' };
    }
  }

  // PORTION LOGIC SECTION

  // breakpoints
  private mergeBreakPoints() {
    return this.breakpointService
      .isSmall()
      .pipe(
        mergeMap((isSmall) =>
          this.breakpointService
            .isMobile()
            .pipe(map((isMobile) => [isSmall, isMobile]))
        )
      );
  }

  private getBreakPoints() {
    return this.mergeBreakPoints().pipe(
      map((value: boolean[]) => {
        if (value.includes(true)) {
          this._openDrawer = 1;
          this._closedDrawer = 99;
        } else {
          this._openDrawer = this.drawerPortion.open;
          this._closedDrawer = this.drawerPortion.close;
        }
        this.endDrawerSize$ = of(this._openDrawer);
        return 100 - this._openDrawer;
      })
    );
  }

  // function called each time the left(end) drawer is closed/opened
  onEndDrawerEmitted() {
    let portion: number = 0;

    this._endDrawerOpen = !this._endDrawerOpen;
    if (!this._endDrawerOpen) {
      portion = 100 - this._openDrawer;
      this.portion$ = of(portion);
      this.endDrawerSize$ = of(this._openDrawer);
    } else {
      portion = 100 - this._closedDrawer;
      this.portion$ = of(portion);
      this.endDrawerSize$ = of(this._closedDrawer);
    }
    this.openChanged.emit(this._endDrawerOpen);
  }

  // DOM EVENTS
  public onChangeStep(step: CardStepModel): void {
    this.stepChanged.emit(step);
  }

  public emitEndDrawer(): void {
    this.onEndDrawerEmitted();
  }
}
