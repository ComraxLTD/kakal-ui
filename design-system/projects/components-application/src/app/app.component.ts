import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable, of, startWith, switchMap } from 'rxjs';
import {CardStepModel} from '../../../kakal-ui/src/lib/cards/card-step/card-step.model'
import {PageHeadlineModel} from '../../../kakal-ui/src/lib/page-headline/page-headline.model'
import {StatusBarsModel} from '../../../kakal-ui/src/lib/status-bars/status-bars.model'
import {StepperLayoutService} from '../../../kakal-ui/src/screens/stepper-layout/stepper-layout.service'
import {RouterService} from '../../../kakal-ui/src/services/route.service'
import {BreakpointService} from '../../../kakal-ui/src/services/breakpoint.service'
import {PageHeadlineService} from '../../../kakal-ui/src/lib/page-headline/page-headline.service'
import {FormControl} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit { 
  title = 'components-application';
   //storybook url for comrax use
   public storybookUrl!: string;


   //steps 
   public steps$!:Observable<CardStepModel[]>
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
       svgUrl: 'notes',
       label: 'פרטי האיסוף',
       path: 'details',
       size: 2.8,
       spacer: true,
     }),
     new CardStepModel({
       svgUrl: 'location_mpk',
       label: 'מיקום האיסוף',
       path: 'location',
       size: 2.8,
       spacer: true,
     }),
     new CardStepModel({
       svgUrl: 'ready_stcok_icon',
       label: 'ניהול מלאי',
       path: 'inventory',
       size: 2.8,
       spacer: true,
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
   ) {}
 
   ngOnInit(): void {
     //storybook url for comrax use
 
     //add size to page header
     this.headlineItems = this.headlineItems.map((item, index) => ({
       ...item,
       size: index != 0 ? 1.8 : 2.9,
     }));
 
     //
     this.steps$=this.stepperLayoutService.getStepsObs()
 
     //emit new headline items
     this.pageHeadlineService.emitPageHeadlineItems(this.headlineItems);
 
     //init steps
     this.stepperLayoutService.setSteps(this.steps);
 
     //decide if drawer is open or closed on init
     this.stepperLayoutService.emitDisplayDrawer(false);
 
     //decide the portion size on mobile and desktop
     this.portion$ = this.combinedBreakPoints();
   }
 
   // NAVIGATION EVENTS SECTION
   private stepNavigate(path: string) {
     path = `/${path}`;
     this.routerService.navigate(path);
   }
 
   // navigate from stepper
   public onChangeStep(step: CardStepModel) {
     console.log(step);
   }
 
   // navigate from select - mobile
   public onSelectStep(control: FormControl) {
     this.stepNavigate(control.value);
   }
 
   // navigate from bottom-navbar - next
   public onNext(step: CardStepModel) {
     console.log(step);
   }
 
   public onPrevious(): void {
     this.routerService.goBack();
   }
 
   navigate() {
     console.log('navigate');
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
 
   combinedBreakPoints() {
     return combineLatest([
       // this.breakpointsService.isSmall(),
       this.breakpointsService.isMobile(),
     ]).pipe(
       switchMap((array: boolean[]) => {
         if (array.includes(true)) {
           this.openDrawer = 1;
           this.closedDrawer = 99;
         } else {
           this.openDrawer = 45;
           this.closedDrawer = 10;
         }
         console.log('----' + this.closedDrawer);
         this.stepperLayoutService.emitDrawerSizeChanged(this.openDrawer);
 
         return this.stepperLayoutService.getStepPrefixObs().pipe(
           startWith(this.routerService.getCurrentPath()),
           map((prefix: string) => {
             return 100 - this.openDrawer;
           })
         );
       })
     );
   }
}
