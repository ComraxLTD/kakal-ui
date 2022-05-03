import { Component, OnInit } from '@angular/core';
import {
  ButtonModel,
  CardStep,
  DisplayItem,
  FormActions,
  PageHeadlineService,
  RouterService,
  StatusBars,
  StepsLayoutService,
} from '../../../../../../../kakal-ui/src/public-api';
import { NewReservationService } from '../../new-reservation.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { map, Observable } from 'rxjs';

export interface DataEx {
  budget: number;
  date: Date;
  tour: string;
  status: StatusBars;
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
    { type: 'portion' },
    { type: 'file' },
    { type: 'form', action: FormActions.EDIT },
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
      disabled: true,
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
      svgIcon : 'calendar',
      type: 'icon'
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
    status: { totalBars: 5, authorizedBars: 3, label: 'התקדמות' } as StatusBars,
    progress: 40,
  };

  constructor(
    private routerService: RouterService,
    private newReservationService: NewReservationService,
    private pageHeadlineSource: PageHeadlineService
  ) {}

  ngOnInit(): void {
    this.actions$ = this.routerService.getLastPath$().pipe(
      map((path: string) => {
        const details = this.actions;
        const parts = [];
        const map = { details, parts };
        return map[path];
      })
    );

    this.pageHeadlineSource.emitPageHeadlineItems([
      { value: 'first' },
      { value: 'sec' },
      { value: 'third' },
    ]);
  }

  public onChangeStep(step: StepperSelectionEvent) {
    // this.navigate(step.selectedStep.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }

  onSave(event: string) {
    this.newReservationService.emitNewIsSaved(true);
  }
}
