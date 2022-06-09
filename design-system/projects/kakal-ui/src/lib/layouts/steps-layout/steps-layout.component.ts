import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
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
  @Input() manuel: boolean = false;

  rowActions!: ButtonModel[];

  @Input() set actions(value: ButtonModel[]) {
    if (value?.length) {
      this.setActions(value);
    } else {
      this.rowActions = [];
    }
  }

  @Input() baseUrl: string;

  drawerAction: ButtonModel;

  _stepsSelectionEvent: StepsSelectionEvent;
  stepsSelectionEvent$: Observable<StepsSelectionEvent>;

  mobile$: Observable<boolean>;

  disabled: { [key: string]: boolean };

  @Output() stepChanged: EventEmitter<StepsSelectionEvent> = new EventEmitter();

  constructor(
    private stepsLayoutService: StepsLayoutService,
    private routerService: RouterService,
    private breakpointService: BreakpointService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();

    if (!this.baseUrl) {
      this.baseUrl = this.routerService.getParentPath();
    }

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

    this._emitChanged();
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

  private setStepsSelectionEventFromRoute(): Observable<StepsSelectionEvent> {
    return this.routerService.getLastPath$().pipe(
      map((path: string) => {
        const steps = [...this.steps];

        const previouslySelectedIndex = this.findIndex(steps, 'selected', true);
        const pathMap = this.routerService.getUrlAsMap(this.router.url);
        const index = this.steps.findIndex((step) => pathMap[step.path]);
        const selectedIndex = index !== -1 ? index : 0;

        return this.selectionRouteHandler(
          selectedIndex,
          steps,
          previouslySelectedIndex
        );
      })
    );
  }

  selectionRouteHandler(
    selectedIndex: number,
    steps,
    previouslySelectedIndex: number
  ) {
    steps.forEach((s, i) => (s.selected = selectedIndex === i));

    this._stepsSelectionEvent = {
      selectedIndex,
      previouslySelectedIndex,
      source: steps,
      selectedStep: steps[selectedIndex],
      previouslySelectedStep: steps[previouslySelectedIndex],
      last: selectedIndex === this.steps.length - 1,
      first: selectedIndex === 0,
    } as StepsSelectionEvent;

    return this._stepsSelectionEvent;
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

  private setRowActions(actions: ButtonModel[]) {
    const iconLabelMap = {
      [FormActions.EDIT]: { matIcon: 'edit', label: 'עריכה', type: 'edit' },
      [FormActions.VALUE_CHANGED]: {
        svgIcon: 'print',
        label: 'הדפס',
        type: 'print',
      },
    };

    return actions
      .filter(
        (action: ButtonModel) =>
          action.type !== 'file' && action.type !== 'notes'
      )
      .map((action: ButtonModel) => {
        return {
          ...action,
          ...iconLabelMap[action.action],
        };
      });
  }

  private setActions(actions: ButtonModel[]) {
    this.rowActions = this.setRowActions(actions);
    this.drawerAction = this.setDrawerAction(actions);

    if (this.drawerAction) {
      this.stepsLayoutService.showDrawer();
    }
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    const url = this.routerService.getUrlFromBase(path, this.baseUrl);
    this.routerService.navigate(url);
  }

  onSelectStep(event: StepsSelectionEvent): void {
    if (!this.manuel) {
      this.navigate(event.selectedStep.path);
    }
    this.stepChanged.emit(event);
  }

  onActionClicked(event: ButtonModel): void {
    this.stepsLayoutService.emitActionButton(event);
  }

  private _emitChanged() {
    this.stepsLayoutService.setStepsSelection(this._stepsSelectionEvent);
  }
}
