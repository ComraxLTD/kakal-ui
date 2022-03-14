import { Component, OnInit } from '@angular/core';
import { combineLatest, map, merge, mergeMap, Observable, of, startWith, switchMap } from 'rxjs';
import { CardStepModel } from '../../../kakal-ui/src/lib/cards/card-step/card-step.model'
import { PageHeadlineModel } from '../../../kakal-ui/src/lib/page-headline/page-headline.model'
import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model'
import { StepperLayoutService } from '../../../kakal-ui/src/screens/stepper-layout/stepper-layout.service'
import { RouterService } from '../../../kakal-ui/src/services/route.service'
import { BreakpointService } from '../../../kakal-ui/src/services/breakpoint.service'
import { PageHeadlineService } from '../../../kakal-ui/src/lib/page-headline/page-headline.service'
import { FormControl } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  //storybook url for comrax use
  public storybookUrl!: string;
  //navbar bottom
  public showSave$!: Observable<boolean>;
  //steps 
  public steps$!: Observable<CardStepModel[]>
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
      label: 'פרטי ההתקשרות',
      svgUrl: 'contact',
      path: 'details',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      isActive: true
    }),
    new CardStepModel({
      label: 'בניית הצעת מחיר',
      svgUrl: 'offer',
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
    { label: 'אקליפטוס יער', type: 'default', size: 1.5, key: 'x' },
    { label: 'אקליפטוס יער', type: 'default', size: 1.5, key: 'x' },
    { label: new Date(), type: 'date', size: 1.5, key: 'x' },
    { label: 'אקליפטוס יער', type: 'custom', size: 1.5, key: 'thired' },
  ];
  //status model fot the page headline
  status: StatusBarsModel = {
    label: 'statusBars',
    authorizedBars: 3,
    totalBars: 6,
  };

  constructor(
    private pageHeadlineService: PageHeadlineService,
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService
  ) { }

  ngOnInit(): void {
    this.showSave$ = of(true);

    //add size to page header
    this.headlineItems = this.headlineItems.map((item, index) => ({
      ...item,
      size: index != 0 ? 1.8 : 2.9,
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

  private mergeBreakPoints() {
    return this.breakpointsService.isSmall().pipe(
      mergeMap(isSmall => this.breakpointsService.isMobile().pipe(
        map(isMobile => [isSmall, isMobile])
      ))
    );
  }
  
  private getBreakPoints() {
    return this.mergeBreakPoints().pipe(
      map((value: boolean[]) => {
        if (value.includes(true)) {
          this.openDrawer = 1;
          this.closedDrawer = 99;
        } else {
          this.openDrawer = 45;
          this.closedDrawer = 10;
        }
        this.stepperLayoutService.emitDrawerSizeChanged(this.openDrawer);
      }),
      switchMap(_ => {
        return this.stepperLayoutService.getStepPrefixObs().pipe(
          startWith(this.routerService.getCurrentPath()),
          map((prefix: string) => {
            return 100 - this.openDrawer;
          })
        );
      })
    );
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    path = `/${path}`;
    this.routerService.navigate(path);
  }

  // navigate from stepper
  public onChangeStep(step: CardStepModel) {
    this.navigate(step.path);
    console.log(step);
  }

  // navigate from select - mobile
  public onSelectStep(control: FormControl) {
    // this.stepNavigate(control.value);
  }

  // navigate from bottom-navbar - next
  public onNext(step: CardStepModel) {
    console.log(step);
  }

  public onPrevious(): void {
    this.routerService.goBack();
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


}
