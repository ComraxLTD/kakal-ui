import { Component, OnInit } from '@angular/core';
import { map, mergeMap, Observable, of } from 'rxjs';
import { StatusBarsModel } from '../../../../../kakal-ui/src/lib/status-bars/status-bars.model';
import {
  CardStepModel,
  PageHeadlineModel,
  PageHeadlineService,
  BreakpointService,
  RouterService,
  StepperLayoutService,
} from '../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-new-order-layout',
  templateUrl: './new-order-layout.component.html',
  styleUrls: ['./new-order-layout.component.scss'],
})
export class NewOrderLayoutComponent implements OnInit {
  public disableNext!: Observable<boolean>;

  //steps
  public steps$!: Observable<CardStepModel[]>;
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
    new CardStepModel({
      label: 'פרטי הזמנה',
      svgIcon: 'contact',
      path: 'details',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
    }),
    new CardStepModel({
      label: 'בחירת ספק',
      svgIcon: 'reports',
      path: 'select-supplier',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      stroke: true,
    }),
    new CardStepModel({
      label: 'ספק זוכה',
      svgIcon: 'medal',
      path: 'bid',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      stroke: true,
    }),
  ];

  //page headline items
  headlineItems: PageHeadlineModel[] = [
    { label: 'הזמנה חדשה', type: 'template', key: 'headline' },
    { label: 'מפ/1234/22', key: 'x', format: 'date' },
    { label: 'ה כיבוד', key: 'x' },
    { label: 'אקליפטוס יער', type: 'template', key: 'statusBar' },
  ];
  //status model fot the page headline
  status: StatusBarsModel = {
    label: 'חדש',
    authorizedBars: 1,
    totalBars: 7,
  };

  constructor(
    private pageHeadlineService: PageHeadlineService,
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService
  ) {}

  ngOnInit(): void {
    //add size to page header
    this.headlineItems = this.headlineItems.map((item, index) => ({
      ...item,
    }));
    //
    this.steps$ = this.stepperLayoutService.getStepsObs();

    //emit new headline items
    this.pageHeadlineService.emitPageHeadlineItems(this.headlineItems);

    //init steps
    this.stepperLayoutService.setSteps(this.steps);

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
