import { Component, OnInit } from '@angular/core';
import {
  ButtonModel,
  CardStep,
  DisplayItem,
  FormActions,
  LayoutService,
  NavbarBottomService,
  PageHeadlineService,
  RouterService,
  StatusProgress,
  StepsLayoutService,
} from '../../../../../../../kakal-ui/src/public-api';
import { NewReservationService } from '../../new-reservation.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { map, Observable } from 'rxjs';

export interface DataEx {
  budget: number;
  date: Date;
  tour: string;
  status: StatusProgress;
  progress: number;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [StepsLayoutService],
})
export class LayoutComponent implements OnInit {
  actions: ButtonModel[] = [
    { type: 'file' },
    { type: 'estate', svgIcon: 'estate', label: 'הוסף' },
    { type: 'add', matIcon: 'add', label: 'הוסף' },
  ];
  actions$: Observable<ButtonModel[]>;

  steps: CardStep[] = [
    {
      label: 'פרטי הזמנה',
      svgIcon: 'plant',
      path: 'details',
    },
    {
      label: 'מרכיבי הזמנה',
      svgIcon: 'tree',
      path: 'parts',
    },
    {
      label: 'סיכום הזמנה',
      svgIcon: 'list',
      path: 'summary',
    },
  ];

  displayData: DisplayItem<DataEx>[] = [
    {
      key: 'budget',
      format: { type: 'currency' },
      label: 'תקציב',
    },
    {
      key: 'date',
      format: { type: 'date' },
      label: 'תאריך יציאה',
      svgIcon: 'calendar',
      type: 'icon',
    },
    {
      key: 'tour',
      label: 'טיול',
    },
    {
      key: 'status',
      type: 'status',
      label: 'טיול',
    },
    {
      key: 'progress',
      label: '',
      type: 'template',
    },
  ];

  data: DataEx = {
    budget: 100,
    date: new Date(),
    tour: 'בית ספר נחלים',
    status: {
      totalBars: 5,
      authorizedBars: 3,
      label: 'התקדמות',
    } as StatusProgress,
    progress: 40,
  };

  constructor(
    private pageHeadlineSource: PageHeadlineService,
    private navbarBottomService: NavbarBottomService,
    private layoutService: LayoutService,
    private stepsLayoutService: StepsLayoutService
  ) {}

  ngOnInit(): void {
    this.pageHeadlineSource.emitPageHeadlineItems([
      { value: 'first' },
      { value: 'sec' },
      { value: 'third' },
    ]);

    // this.layoutService.emitDrawerPortion({
    //   open: 50,
    //   close: 5,
    //   hasButton: true,
    // });

    this.navbarBottomService.setShowNext(true);

    // this.stepsLayoutService
    //   .listenToActionButtons(['estate'])
    //   .subscribe((button) => {
    //     alert(button.type);
    //   });
  }

  ngOnDestroy() {
    this.layoutService.destroyDrawer();
  }
}
