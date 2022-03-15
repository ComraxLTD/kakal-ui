import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardStepModel } from '../../../kakal-ui/src/lib/cards/card-step/card-step.model'
import { StepperLayoutService } from '../../../kakal-ui/src/screens/stepper-layout/stepper-layout.service'
import { RouterService } from '../../../kakal-ui/src/services/route.service'
import { BreakpointService } from '../../../kakal-ui/src/services/breakpoint.service'
import { PageHeadlineService } from '../../../kakal-ui/src/lib/page-headline/page-headline.service'
import { CardDashboardModel, IconModel } from '../../../kakal-ui/src/public-api';
import { MenuModel } from '../../../kakal-ui/src/lib/menu/menu.model';
import { StepperDirection } from '../../../kakal-ui/src/lib/cards/card-step/card-step.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';

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
  ) { }

  ngOnInit(): void {
  }

}
