import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { BreakpointService, RouterService } from '../../../services/services';
import { ButtonModel } from '../../button/models/button.types';
import { CardStep } from '../../cards/card-step/card-step.model';
import { FormActions } from '../../form/models/form.actions';
import { StepsSelectionEvent } from '../../stepper/stepper.component';
import { StepsLayoutService } from './steps-layout.service';

@Component({
  selector: 'kkl-steps-layout',
  templateUrl: './steps-layout.component.html',
  styleUrls: ['./steps-layout.component.scss'],
})
export class StepsLayoutComponent {
  destroySubject$: Subject<void> = new Subject();


  @Input() steps: CardStep[];

  rowActions!: ButtonModel[];
  @Input() set actions(val: ButtonModel[]) {
    if (val?.length) {
      this.rowActions = val;
    } else {
      this.rowActions = [];
    }
  }

  // stepsSelectionEvent: StepsSelectionEvent;

  mobile$: Observable<boolean>;

  disabled: {[key: string]: boolean};

  // @Output() openChanged: EventEmitter<boolean> = new EventEmitter();
  // @Output() stepSelect: EventEmitter<StepsSelectionEvent> = new EventEmitter();
  // @Output() actionChanged: EventEmitter<ButtonModel> = new EventEmitter();

  constructor(
    private routerService: RouterService,
    private breakpointService: BreakpointService,
    private stepsLayoutService: StepsLayoutService
  ) {}

  ngOnInit(): void {
    this.mobile$ = this.breakpointService.isMobile();
    this.stepsLayoutService.getButtonAction().pipe(takeUntil(this.destroySubject$)).subscribe(c => {
      switch (c.action) {
        case 'disable':
          this.disabled[c.key] = true;
          break;
        case 'enable':
          this.disabled[c.key] = false;
          break;
        case 'add':
          this.rowActions = this.rowActions.concat(c.butt);
          break;
        case 'remove':
          this.rowActions = this.rowActions.filter(v => v.label !== c.key);
          break;
        case 'removeAll':
          this.rowActions = [];
        default:
          break;
      }
    })
  }



  // private setRowActions(actions: ButtonModel[]) {
  //   const iconLabelMap = {
  //     [FormActions.EDIT]: { svgIcon: 'edit', label: 'עריכה' },
  //     [FormActions.SUBMIT]: { svgIcon: 'save', label: 'שמירה' },
  //   };

  //   return actions
  //     .filter((action: ButtonModel) => action.type === 'form')
  //     .map((action: ButtonModel) => {
  //       return {
  //         ...action,
  //         ...iconLabelMap[action.action],
  //       };
  //     });
  // }


  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    const url = this.routerService.getUrl(path);
    this.routerService.navigate(url);
  }

  onSelectStep(event: StepsSelectionEvent): void {
    this.navigate(event.selectedStep.path);
  }

  onAction(event: ButtonModel): void {
    this.stepsLayoutService.setButtonClicked(event);
  }

  ngOnDestroy() {
    this.destroySubject$.next();
    this.destroySubject$.complete();
  }
}
