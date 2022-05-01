import { Component, OnInit } from '@angular/core';
import {
  ButtonModel,
  CardStep,
  RouterService,
  StepsLayoutService,
}from '../../../../../../../kakal-ui/src/public-api';
import { combineLatest, map, Observable, of } from 'rxjs';
import { CustomerDetailsLayoutService } from '../../modules/details/components/customer-details-layout.service';
import { NewReservationService } from '../../new-reservation.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  actions: ButtonModel[] = [{ type: 'portion' } as ButtonModel];
  showMiddleNext$!: Observable<boolean>;
  showSave$: Observable<boolean> = of(true);
  showNext$: Observable<{ value: boolean }> = of({ value: false });
  label$!: Observable<string>;
  onSave(event: string) {
    console.log(event);
    this.newReservationService.emitNewIsSaved(true);
    console.log(event);
  }

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
  steps$: Observable<CardStep[]> = of([]);

  constructor(
    private routerService: RouterService,
    private customerDetailsLayoutService:CustomerDetailsLayoutService,
    private stepperLayoutService: StepsLayoutService,
    private newReservationService: NewReservationService
  ) {}

  ngOnInit(): void {
    this.showSave$ = of(true);
    this.showNext$ = this.newReservationService.getShowNextAsObs();

    this.showMiddleNext$ = this.setShowMiddleNext$();

    this.label$ = this.setLabel$();
  }
  private setLabel$() {
    return this.customerDetailsLayoutService
      .listenSelectIndex()
      .pipe(
        map((_) =>
          this.customerDetailsLayoutService.isLastStep() ? 'שמור' : 'המשך'
        )
      );
  
      }
      private setShowMiddleNext$() {
        // const showFromRoute$ = this.routerService.getLastPathObs(this.steps).pipe(
          // map((path: string) => {
          //   return path === 'details';
          // })
        // );
    
        const showFormComplete$ = this.customerDetailsLayoutService
          .listenComplete()
          .pipe(map((complete) => !complete));
    
        return combineLatest([ showFormComplete$]).pipe(
          map(([path]) => {
            return path ;
          })
        );
      }
  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    console.log(this.routerService.getCurrentPath());
    path = `/reservation/${path}`;
    this.routerService.navigate(path);
  }

  public onNext(step: CardStep) {
    console.log(step);
    
    // this.navigate(step.path!);
  }

  public onChangeStep(step: StepperSelectionEvent) {
    // this.navigate(step.selectedStep.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }

  onMiddleNext() {
    const isLastStep = this.customerDetailsLayoutService.isLastStep();
    const isComplete = this.customerDetailsLayoutService.isComplete();
    if (!isLastStep) {
      this.customerDetailsLayoutService.next();
    } else if (!isComplete) {
      this.customerDetailsLayoutService.complete();
    }
  }

}
