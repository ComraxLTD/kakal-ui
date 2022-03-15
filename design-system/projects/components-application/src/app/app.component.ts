import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CardStepModel } from '../../../kakal-ui/src/lib/cards/card-step/card-step.model'
import { StepperLayoutService } from '../../../kakal-ui/src/screens/stepper-layout/stepper-layout.service'
import { RouterService } from '../../../kakal-ui/src/services/route.service'
import { BreakpointService } from '../../../kakal-ui/src/services/breakpoint.service'
import { PageHeadlineService } from '../../../kakal-ui/src/lib/page-headline/page-headline.service'
import { IconModel } from '../../../kakal-ui/src/public-api';
import { MenuModel } from '../../../kakal-ui/src/lib/menu/menu.model';
import { StepperDirection } from '../../../kakal-ui/src/lib/cards/card-step/card-step.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'components-application';
  // NAVBAR SECTION
  private headers = { contracts: 'התקשרויות' };
  public openIcon$: Observable<string>;
  public logos: IconModel[];
  public showStatusPath: string[] = ['home'];

  // WIZARD SECTION
  public steps$: Observable<CardStepModel[]>;
  public direction: StepperDirection = 'column';
  public hideWizardPath: string[] = ['home'];

  public wizardCards: number;

  // MENU SECTION
  public menu$: Observable<MenuModel[]>;
  public path$: Observable<string>;


  constructor(
    private pageHeadlineService: PageHeadlineService,
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService
  ) { }

  ngOnInit(): void {
    this.wizardCards = 4;
  }

}
