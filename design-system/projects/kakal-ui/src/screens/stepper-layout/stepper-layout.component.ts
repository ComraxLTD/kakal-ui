import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { map, startWith, switchMap } from 'rxjs/operators';
import { StepperLayoutService } from './stepper-layout.service';
import { RouterService } from '../../services/route.service';
import { FormControl } from '@angular/forms';

import { Observable, of } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointService } from '../../services/breakpoint.service';
import { CardStepModel } from '../../lib/cards/card-step/card-step.model';

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
  ) { }

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
                step.unactive();
              }
              if (step.path === url) {
                this.stepperLayoutService.emitChangeStep(step);
                step.active();
              }
            });

            return steps;
          })
        )
      })
    )

  }

  // private setSelectQuestion(): Observable<Question> {
  //   return this.stepperLayoutService.getStepsObs().pipe(
  //     switchMap((steps) => {
  //       return this.stepperLayoutService.getStepPrefixObs().pipe(
  //         startWith(this.routerService.getCurrentPath()),
  //         map((prefix: string) => {
  //           const options: SelectOption[] = steps.map((step) => {
  //             return {
  //               label: step.label,
  //               value: step.path,
  //             };
  //           });

  //           const question: Question = {
  //             key: 'selectMobile',
  //             controlType: 'select',
  //             value: prefix,
  //             options,
  //           };

  //           return question;
  //         })
  //       );
  //     })
  //   );
  // }

  public onChangeStep(step: CardStepModel): void {
    this.changeStep.emit(step);
  }
  public onSelectStep(control: FormControl) {
    this.selectStep.emit(control);
  }

  emitEndDrawer(): void {
    this.emitEndDrawerBtn.emit()
  }
}
