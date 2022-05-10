import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BreakpointService, RouterService } from '../../../services/services';
import { ButtonModel } from '../../button/models/button.types';
import { CardStep } from '../../cards/card-step/card-step.component';
import { FormActions } from '../../form/models/form.actions';
import { StepsLayoutService } from './steps-layout.service';
import { StepsSelectionEvent } from '../../groups/step-group/step-group.component';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'kkl-steps-layout',
  templateUrl: './steps-layout.component.html',
  styleUrls: ['./steps-layout.component.scss'],
})
export class StepsLayoutComponent implements OnInit, OnDestroy {
  destroySubject$: Subject<void> = new Subject();

  @Input() steps: CardStep[];

  // rowActionSource$: BehaviorSubject<ButtonModel[]> = new BehaviorSubject([]);
  // rowActions$!: Observable<ButtonModel[]>;
  rowActions!: ButtonModel[];

  @Input() set actions(value: ButtonModel[]) {
    if (value?.length) {
      this.setActions(value);

      // this.rowActionSource$.next(this.rowActions);
    } else {
      this.rowActions = [];
    }
  }

  drawerAction: ButtonModel;

  stepsSelectionEvent$: Observable<StepsSelectionEvent>;
  private _stepsSelectionEvent: StepsSelectionEvent;

  mobile$: Observable<boolean>;

  disabled: { [key: string]: boolean };

  // @Output() stepSelect: EventEmitter<StepsSelectionEvent> = new EventEmitter();
  // @Output() actionChanged: EventEmitter<ButtonModel> = new EventEmitter();

  constructor(
    private stepsLayoutService: StepsLayoutService,
    private routerService: RouterService,
    private breakpointService: BreakpointService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();

    this.stepsLayoutService
      .getButtonAction()
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((c) => {
        switch (c.action) {
          case 'disable':
            this.disabled[c.key] = true;
            break;
          case 'enable':
            this.disabled[c.key] = false;
            break;
          case 'add':
            this.rowActions = this.rowActions.concat(c.buttons);
            break;
          case 'remove':
            this.rowActions = this.rowActions.filter((v) => v.label !== c.key);
            break;
          case 'removeAll':
            this.rowActions = [];
          default:
            break;
        }
      });

    this.stepsSelectionEvent$ = this.setStepsSelectionEventFromRoute();
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
    this.stepsLayoutService.hideDrawer();
  }

  private findIndex(
    steps: CardStep[],
    key: keyof CardStep,
    value: any
  ): number {
    const index = steps.findIndex((s: CardStep) => s[key] === value);
    return index;
  }

  private setStepsSelectionEvent(
    currentPath: string,
    steps: CardStep[]
  ): StepsSelectionEvent {
    const previouslySelectedIndex = this.findIndex(steps, 'selected', true);
    const selectedIndex = this.findIndex(steps, 'path', currentPath);

    steps.forEach((s, i) => (s.selected = selectedIndex === i));

    return {
      selectedIndex,
      previouslySelectedIndex,
      source: steps,
      selectedStep: steps[selectedIndex],
      previouslySelectedStep: steps[previouslySelectedIndex],
      last: selectedIndex === this.steps.length - 1,
      first: selectedIndex === 0,
    } as StepsSelectionEvent;
  }

  private setStepsSelectionEventFromRoute(): Observable<StepsSelectionEvent> {
    return this.routerService.getLastPath$().pipe(
      map((path: string) => {
        this._stepsSelectionEvent = this.setStepsSelectionEvent(path, [
          ...this.steps,
        ]);

        this._emitChanged();

        return this._stepsSelectionEvent;
      })
    );
  }

  // ACTIONS SECTION
  private setDrawerAction(actions: ButtonModel[]): ButtonModel {
    const iconMap = {
      file: 'file',
      notes: 'bell',
    };
    const action = actions.find(
      (action: ButtonModel) => action.type === 'file' || action.type === 'notes'
    );

    return action ? { ...action, svgIcon: iconMap[action.type] } : null;
  }

  private setActions(actions: ButtonModel[]) {
    this.rowActions = this.setRowActions(actions);
    this.drawerAction = this.setDrawerAction(actions);

    if (this.drawerAction) {
      this.stepsLayoutService.showDrawer();
    }
  }

  private setRowActions(actions: ButtonModel[]) {
    const iconLabelMap = {
      [FormActions.EDIT]: { svgIcon: 'edit', label: 'עריכה' },
      [FormActions.VALUE_CHANGED]: { svgIcon: 'print', label: 'הדפס' },
    };

    return actions
      .filter((action: ButtonModel) => action.type === 'form')
      .map((action: ButtonModel) => {
        return {
          ...action,
          ...iconLabelMap[action.action],
        };
      });
  }

  // NAVIGATION EVENTS SECTION
  private navigate(nextPath: string) {
    // const url = this.routerService.getUrl(path);
    // this.routerService.navigate(url);

    const currentPath = this.routerService.getCurrentPath();
    const url = this.router.url.replace(currentPath, nextPath);
    this.router.navigateByUrl(url);
  }

  onSelectStep(event: StepsSelectionEvent): void {
    this.navigate(event.selectedStep.path);
  }

  onAction(event: ButtonModel): void {
    this.stepsLayoutService.setButtonClicked(event);
  }

  private _emitChanged() {
    this.stepsLayoutService.setStepsSelection(this._stepsSelectionEvent);
  }
}
