import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperLayoutService } from './stepper-layout.service';

import { RouterService, BreakpointService } from '../../../services/services';

import { CardStepModel } from '../../cards/card-step/card-step.model';

import { ButtonModel } from '../../button/models/button.types';
import { FormActions } from '../../form/models/form.actions';
import { StepperSelectEvent } from '../../stepper/stepper.component';
import { IconsService } from '../../icon/icons.service';

import { map, mergeMap, switchMap } from 'rxjs/operators';
import { merge, Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.scss'],
})
export class StepperLayoutComponent {
  @Input() steps: CardStepModel[];

  // control content width when end drawer is open and close in %
  @Input() contentPortion: { open: number; close: number } = {
    open: 0,
    close: 100,
  };

  @Input() actions: ButtonModel[];

  // when set to true disable default navigation
  @Input() manuel: boolean;

  // steps props
  steps$: Observable<CardStepModel[]>;

  // drawer props
  portion$: Observable<number> = of(100);
  showStartDrawer$: Observable<boolean>;
  endDrawerSize$: Observable<number>;

  //end drawer opened/closed
  _endDrawerOpen: boolean = false;
  showEndDrawer!: boolean;

  //drawer sizes
  _openDrawer!: number;
  _closedDrawer!: number;

  //
  drawerAction: ButtonModel;
  rowActions!: ButtonModel[];

  @Output() openChanged: EventEmitter<boolean> = new EventEmitter();
  @Output() stepSelect: EventEmitter<StepperSelectEvent> = new EventEmitter();
  @Output() actionChanged: EventEmitter<ButtonModel> = new EventEmitter();

  constructor(
    private stepperLayoutService: StepperLayoutService,
    private routerService: RouterService,
    private breakpointService: BreakpointService,
    private iconService: IconsService
  ) {}

  ngOnInit(): void {
    this.stepperLayoutService.setSteps(this.setSteps());

    this.steps$ = this.setSteps$();

    this._openDrawer = this.contentPortion.open;
    this._closedDrawer = this.contentPortion.close;

    // init actions if array exist
    if (this.actions && this.actions.length) {
      this.rowActions = this.setRowActions();

      this.drawerAction = this.setDrawerAction();

      this.showEndDrawer = this.actions.some(
        (action) => action.type === 'portion'
      );

      this.showStartDrawer$ = merge(
        of(!!this.drawerAction),
        this.stepperLayoutService.getDisplayDrawerObs()
      );
    }

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

  // ACTIONS SECTION
  private setDrawerAction(): ButtonModel {
    const iconMap = {
      file: 'file',
      notes: 'bell',
    };

    const action = this.actions.find(
      (action: ButtonModel) => action.type === 'file' || action.type === 'notes'
    );

    return action ? { ...action, svgIcon: iconMap[action.type] } : null;
  }

  private setRowActions() {
    const iconLabelMap = {
      [FormActions.EDIT]: { svgIcon: 'edit', label: 'עריכה' },
      [FormActions.SUBMIT]: { svgIcon: 'save', label: 'שמירה' },
    };

    return this.actions
      .filter((action: ButtonModel) => action.type === 'form')
      .map((action: ButtonModel) => {
        return {
          ...action,
          ...iconLabelMap[action.action],
        };
      });
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
          this._openDrawer = this.contentPortion.open;
          this._closedDrawer = this.contentPortion.close;
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

  // NAVIGATE HELPER METHODS
  private getUrl(path: string) {
    const routes = this.routerService.currentRoute.split('/');
    routes.unshift();
    routes.pop();
    routes.push(path);
    return routes.join('/');
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    const url = this.getUrl(path);
    this.routerService.navigate(url);
  }

  // DOM EVENTS

  onSelectStep(event: StepperSelectEvent): void {
    if (!this.manuel) {
      this.navigate(event.selectedStep.path);
    }
    this.stepSelect.emit(event);
  }

  emitEndDrawer(): void {
    this.onEndDrawerEmitted();
  }

  onAction(event: ButtonModel): void {
    this.actionChanged.emit(event);
  }
}
