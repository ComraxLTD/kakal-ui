import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperLayoutService } from './stepper-layout.service';

import { RouterService, BreakpointService } from '../../../services/services';

import { CardStepModel } from '../../cards/card-step/card-step.model';

import { ButtonModel } from '../../button/models/button.types';
import { FormActions } from '../../form/models/form.actions';
import { StepperSelectEvent } from '../../stepper/stepper.component';

import { map, mergeMap } from 'rxjs/operators';
import { BehaviorSubject, merge, Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.scss'],
})
export class StepperLayoutComponent {
  @Input() steps: CardStepModel[];

  @Input() actions: ButtonModel[];

  // when set to true disable default navigation
  @Input() manuel: boolean = true;

  // control content width when end drawer is open and close in %
  @Input() contentPortion: { open: number; close: number } = {
    open: 0,
    close: 100,
  };

  // stepperSelectEvent

  stepperSelectEvent: StepperSelectEvent;

  // steps props
  steps$: Observable<CardStepModel[]>;

  // drawer props
  portion$: Observable<number> = of(100);
  showStartDrawer$: Observable<boolean>;

  endDrawerSizeSource$: BehaviorSubject<number>;
  endDrawerSize$: Observable<number> = of(0);

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
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.steps$ = this.setSteps$();

    this._openDrawer = this.contentPortion.open;
    this._closedDrawer = this.contentPortion.close;

    this.endDrawerSizeSource$ = new BehaviorSubject(0);

    // init actions if array exist
    if (this.actions && this.actions.length) {
      this.rowActions = this.setRowActions();

      this.drawerAction = this.setDrawerAction();

      this.showEndDrawer = this.actions.some(
        (action) => action.type === 'portion'
      );

      this.showStartDrawer$ = merge(
        of(!!this.drawerAction),
        this.stepperLayoutService.listenToDisplayDrawer()
      );
    }

    this.portion$ = this.getBreakPoints();

    this.endDrawerSize$ = this.endDrawerSizeSource$.asObservable();
  }

  private setSteps$() {
    return merge(this.initSteps$(), this.changesStepOnRoute$());
  }

  private initSteps$() {
    this.stepperLayoutService.emitSteps(this.steps);
    return this.stepperLayoutService.listenToSteps();
  }

  private setStepperSelectEvent(steps: CardStepModel[], url: string) {
    const selectedIndex = steps.findIndex((step) => step.path === url);
    const previousSelectedIndex = steps.findIndex((step) => step.selected);

    const selectedStep = {
      ...steps[selectedIndex],
      selected: true,
    } as CardStepModel;

    const previousSelectedStep =
      previousSelectedIndex !== -1
        ? {
            ...steps[previousSelectedIndex],
            selected: false,
          }
        : null;

    const event: StepperSelectEvent = {
      selectedIndex,
      previousSelectedIndex,
      selectedStep,
      previousSelectedStep,
      first: selectedIndex === 0 || previousSelectedIndex === 0,
      last: selectedIndex === steps.length - 1,
    };

    return event;
  }

  private changesStepOnRoute$(): Observable<CardStepModel[]> {
    const steps = this.stepperLayoutService.getSteps();

    return this.routerService.getLastPath$(steps).pipe(
      map((url: string) => {
        const event: StepperSelectEvent = this.setStepperSelectEvent(
          steps,
          url
        );

        console.log(event)

        this.stepperLayoutService.emitStepperSelectEvent(event);

        steps.map((step) => {
          if (step.selected) {
            step.selected = false;
          }
          if (step.path === url) {
            step.selected = true;
          }
        });

        return steps;
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
        this.endDrawerSizeSource$.next(this._openDrawer);
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
      this.endDrawerSizeSource$.next(this._openDrawer);
    } else {
      portion = 100 - this._closedDrawer;
      this.portion$ = of(portion);
      this.endDrawerSizeSource$.next(this._closedDrawer);
    }
    this.openChanged.emit(this._endDrawerOpen);
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    const url = this.routerService.getUrl(path);
    this.routerService.navigate(url);
  }

  // DOM EVENTS

  onSelectStep(event: StepperSelectEvent): void {
    if (this.manuel) {
      this.stepSelect.emit(event);
    } else {
      this.navigate(event.selectedStep.path);
    }
  }

  emitEndDrawer(): void {
    this.onEndDrawerEmitted();
  }

  onAction(event: ButtonModel): void {
    this.actionChanged.emit(event);
  }
}
