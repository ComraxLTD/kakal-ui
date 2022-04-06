import { Component, OnInit } from '@angular/core';
import {
  CardStepModel,
  PageHeadlineModel,
  RouterService,
  StepperLayoutService,
} from '../../../../../kakal-ui/src/public-api';
import { Observable } from 'rxjs';
import { StatusBarsModel } from '../../../../../kakal-ui/src/lib/status-bars/status-bars.model';

@Component({
  selector: 'app-new-order-layout',
  templateUrl: './new-order-layout.component.html',
  styleUrls: ['./new-order-layout.component.scss'],
})
export class NewOrderLayoutComponent implements OnInit {
  public disableNext!: Observable<boolean>;

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

  //page headline items
  headlineItems: PageHeadlineModel[] = [
    { value: 'הזמנה חדשה', template: true },
    { value: 'מפ/1234/22', format: 'date' },
    { value: 'ה כיבוד' },
    { value: 'אקליפטוס יער', template: true },
  ];
  //status model fot the page headline
  status: StatusBarsModel = {
    label: 'חדש',
    authorizedBars: 1,
    totalBars: 7,
  };

  constructor(
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService
  ) {}

  ngOnInit(): void {
    //decide if drawer is open or closed on init
    this.stepperLayoutService.emitDisplayDrawer(false);
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
