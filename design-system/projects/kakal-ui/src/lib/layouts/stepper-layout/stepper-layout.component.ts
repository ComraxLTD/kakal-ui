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

import { MatSidenav } from '@angular/material/sidenav';

import { RouterService, BreakpointService } from '../../../services/services';

import { CardStepModel } from '../../cards/card-step/card-step.model';

import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'kkl-stepper-layout',
  templateUrl: './stepper-layout.component.html',
  styleUrls: ['./stepper-layout.component.scss'],
})
export class StepperLayoutComponent {
  //mat split drawer
  @ViewChild('sidenav') sidenav: MatSidenav;
  @Output() emitEndDrawerBtn: EventEmitter<void> = new EventEmitter();
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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
  // ---------------------------------

  @Input() portion$: Observable<number> = of(100);
  @Input() drawerSize$: Observable<number>;
  @Input() hasTitle: boolean;
  @Input() hasDrawer: boolean;
  @Input() drawerBtn: {
    icon: string;
    label: string;
  };

  @Input() buttonLabel: ElementRef;

  // steps props
  public steps$: Observable<CardStepModel[]>;
  public showDrawer$: Observable<boolean>;
  public showEndDrawer$: Observable<boolean>;
  public mobile$: Observable<boolean>;

  constructor(
    private stepperLayoutService: StepperLayoutService,
    private routerService: RouterService,
    private breakpointService: BreakpointService
  ) {}

  @Output() changeStep: EventEmitter<CardStepModel> = new EventEmitter();
  @Output() selectStep: EventEmitter<FormControl> = new EventEmitter();

  ngOnInit(): void {
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

  public onChangeStep(step: CardStepModel): void {
    this.changeStep.emit(step);
  }
  public onSelectStep(control: FormControl) {
    this.selectStep.emit(control);
  }

  emitEndDrawer(): void {
    this.emitEndDrawerBtn.emit();
  }
}
