import { Component, OnInit } from '@angular/core';
import {
  ButtonModel,
  CardStep,
  FormActions,
  RouterService,
  StepsLayoutService,
} from '../../../../../../../kakal-ui/src/public-api';
import { CustomerDetailsLayoutService } from '../../modules/details/components/customer-details-layout.service';
import { NewReservationService } from '../../new-reservation.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { DrawerLayoutService } from '../../../../../../../kakal-ui/src/lib/layouts/drawer-layout/drawer-layout.service';
import { map, Observable } from 'rxjs';

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
    },
    {
      label: 'סיכום הזמנה',
      svgIcon: 'list',
      path: 'summary',
    },
  ];

  constructor(
    private routerService: RouterService,
    private customerDetailsLayoutService: CustomerDetailsLayoutService,
    private newReservationService: NewReservationService
  ) {}

  ngOnInit(): void {
    this.actions$ = this.routerService.getLastPath$().pipe(
      map((path: string) => {
        const details = this.actions;
        const parts = [];

        const map = { details, parts };

        console.log(path);

        return map[path];
      })
    );
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

  onSave(event: string) {
    this.newReservationService.emitNewIsSaved(true);
  }
}
