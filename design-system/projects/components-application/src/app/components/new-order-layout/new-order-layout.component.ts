import { Component, OnInit } from '@angular/core';
import {
  CardStepModel,
  BreakpointService,
  RouterService,
  StepperLayoutService,
} from '../../../../../kakal-ui/src/public-api';
import { map, mergeMap, Observable, of } from 'rxjs';

@Component({
  selector: 'app-new-order-layout',
  templateUrl: './new-order-layout.component.html',
  styleUrls: ['./new-order-layout.component.scss'],
})
export class NewOrderLayoutComponent implements OnInit {
  public disableNext!: Observable<boolean>;

  //decides the portion of the screen that the right side(main/static content) will have
  public portion$!: Observable<number>;

  //decides the portion of the screen that the left side(drawer) will have
  public drawerSize$!: Observable<number>;

  //end drawer opened/closed
  public endDrawerOpen: boolean = false;

  //drawer sizes
  public openDrawer!: number;
  public closedDrawer!: number;

  //stepper steps
  public steps: CardStepModel[] = [
    {
      label: 'פרטי הזמנה',
      svgIcon: 'contact',
      path: 'details',

    },
    {
      label: 'בחירת ספק',
      svgIcon: 'reports',
      path: 'select-supplier',
    
    },
    {
      label: 'ספק זוכה',
      svgIcon: 'medal',
      path: 'bid',

    },
  ];

  constructor(
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService
  ) {}

  ngOnInit(): void {
    //decide if drawer is open or closed on init
    this.stepperLayoutService.emitDisplayDrawer(false);

    //decide the portion size on mobile and desktop
    this.portion$ = this.getBreakPoints();
  }

  // breakpoints
  private mergeBreakPoints() {
    return this.breakpointsService
      .isSmall()
      .pipe(
        mergeMap((isSmall) =>
          this.breakpointsService
            .isMobile()
            .pipe(map((isMobile) => [isSmall, isMobile]))
        )
      );
  }

  private getBreakPoints() {
    return this.mergeBreakPoints().pipe(
      map((value: boolean[]) => {
        if (value.includes(true)) {
          this.openDrawer = 1;
          this.closedDrawer = 99;
        } else {
          this.openDrawer = 0;
          this.closedDrawer = 100;
        }
        this.stepperLayoutService.emitDrawerSizeChanged(this.openDrawer);
        return 100 - this.openDrawer;
      })
    );
  }

  // function called each time the left(end) drawer is closed/opened
  onEndDrawerEmitted() {
    let portion: number = 0;
    this.endDrawerOpen = !this.endDrawerOpen;
    if (!this.endDrawerOpen) {
      this.stepperLayoutService.emitDrawerSizeChanged(this.openDrawer);
      portion = 100 - this.openDrawer;
      this.portion$ = of(portion);
    } else {
      this.stepperLayoutService.emitDrawerSizeChanged(this.closedDrawer);
      portion = 100 - this.closedDrawer;
      this.portion$ = of(portion);
    }
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    console.log(path);

    path = `/new-order/create-new-order/${path}`;
    this.routerService.navigate(path);
  }

  // navigate from stepper
  public onChangeStep(step: CardStepModel) {
    this.navigate(step.path!);
  }
  // navigate from bottom-navbar - next
  public onNext(step: CardStepModel) {
    this.navigate(step.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }
}
