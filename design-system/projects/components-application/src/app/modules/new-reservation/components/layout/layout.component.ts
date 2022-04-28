import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ButtonModel, CardStepModel, RouterService, StepsLayoutService } from '../../../../../../../kakal-ui/src/public-api';
import { NewReservationService } from '../../new-reservation.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
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
  steps$: Observable<CardStepModel[]> = of([]);

  constructor(
    private routerService: RouterService,
    private stepperLayoutService: StepsLayoutService,
    private newReservationService: NewReservationService
  ) {}

  ngOnInit(): void {
    // this.stepperLayoutService.setSteps(this.firstSteps);
    // this.steps$ = this.stepperLayoutService.getStepsObs();
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

  public onChangeStep(step: StepperSelectionEvent) {
    // this.navigate(step.selectedStep.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }
}
