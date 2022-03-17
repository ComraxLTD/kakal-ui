import { Component, OnInit } from '@angular/core';
import { StepperLayoutService } from '../../../kakal-ui/src/screens/stepper-layout/stepper-layout.service';
import { RouterService } from '../../../kakal-ui/src/services/route.service';
import { BreakpointService } from '../../../kakal-ui/src/services/breakpoint.service';
import { PageHeadlineService } from '../../../kakal-ui/src/lib/page-headline/page-headline.service';
import {
  CardDashboardModel,
  CardStepModel,
  IconModel,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  data  =  [{label:'גיל היער המחטני',value:'קבוצת גיל'},{label:'מספר שכבות יער',value:'חד שכבתי'},{label:'תצורת צומח יערנית קיימת',value:'בוסתני ומטעים'}
  ,{label:'רמת צפיפות קיימת',value:'מספר עצים לדונם'},{label:'רמת כיסוי צמרות קיימת',value:'בשכבות המטופלות ללא מינים פולשים'},{label:'מצב היער',value:'סכנה בטיחותית'},
  {label:'גיל היער המחטני',value:'קבוצת גיל'},{label:'מספר שכבות יער',value:'חד שכבתי'},{label:'תצורת צומח יערנית קיימת',value:'בוסתני ומטעים'}]

  public cards: CardDashboardModel[] = [
    new CardDashboardModel({
      label: 'התקשרות חדשה',
      svgUrl: 'group',
      path: 'create-new-contract',
      size: 2.5,
    }),
    new CardDashboardModel({
      label: 'הליכים קיימים',
      svgUrl: 'connect',
      path: 'existing-procedures',
      size: 2.5,
    }),
    new CardDashboardModel({
      label: 'בדיקת ספקים',
      svgUrl: 'evaluation',
      path: 'supplier-check',
      size: 2.5,
    }),
    new CardDashboardModel({
      label: 'דוחות',
      svgUrl: 'reports',
      path: 'reports',
      size: 2.5,
    }),
  ];

  constructor(
    private pageHeadlineService: PageHeadlineService,
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService
  ) {}
  public steps: CardStepModel[] = [
    new CardStepModel({
      label: 'פרטי ההתקשרות',
      svgUrl: 'contact',
      path: 'details',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
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
  ngOnInit(): void {
    //init steps
    this.stepperLayoutService.setSteps(this.steps);
  }

  onStepChange(args: any) {

  }

  onNext(args: any) {

  }
  onPrevious() {

  }
}
