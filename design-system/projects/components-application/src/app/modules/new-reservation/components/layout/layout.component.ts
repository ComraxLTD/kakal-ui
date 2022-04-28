import { Component, OnInit } from '@angular/core';
import {
  ButtonModel,
  CardStepModel,
  RouterService,
  StepperLayoutService,
  StepperSelectEvent,
} from '../../../../../../../../../kakal-ui/src/public-api';
import { Observable, of } from 'rxjs';
import { NewReservationService } from '../../new-reservation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [StepperLayoutService],
})
export class LayoutComponent implements OnInit {
  actions: ButtonModel[] = [{ type: 'portion' } as ButtonModel];

  showSave$: Observable<boolean> = of(true);
  showNext$: Observable<{ value: boolean }> = of({ value: false });

  onSave(event: string) {
    console.log(event);
    this.newReservationService.emitNewIsSaved(true);
    console.log(event);
  }

  firstSteps: CardStepModel[] = [
    {
      label: 'פרטי הזמנה',
      svgIcon: 'plant',
      path: 'details',
      size: 3,
      variant: 'circle',
      type: 'step',
    },
    {
      label: 'מרכיבי הזמנה',
      svgIcon: 'tree',
      path: 'parts',
      size: 3,
      variant: 'circle',
      type: 'step',
    },
    {
      label: 'סיכום הזמנה',
      svgIcon: 'list',
      path: 'summary',
      size: 3,
      variant: 'circle',
      type: 'step',
    },
  ];
  steps$: Observable<CardStepModel[]> = of([]);

  constructor(
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService,
    private newReservationService: NewReservationService
  ) {}

  ngOnInit(): void {
    this.stepperLayoutService.setSteps(this.firstSteps);
    this.steps$ = this.stepperLayoutService.getStepsObs();
    this.showSave$ = of(true);
    this.showNext$ = this.newReservationService.getShowNextAsObs();
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    console.log(this.routerService.getCurrentPath());
    path = `/reservation/${path}`;
    this.routerService.navigate(path);
  }

  public onNext(step: CardStepModel) {
    console.log(step);
    
    this.navigate(step.path!);
  }

  public onChangeStep(step: StepperSelectEvent) {
    this.navigate(step.selectedStep.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }
}
