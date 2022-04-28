import { Component, OnInit } from '@angular/core';
import { CardStep, Panel, RouterService, StepsSelectionEvent } from '../../../../../../../../../kakal-ui/src/public-api';
import { Observable } from 'rxjs';
import { NewReservationService } from '../../../../new-reservation.service';
import { Step } from '../../../../../../../../../kakal-ui/src/lib/vertical-steps/step/step.model';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public steps: Step[] = [
    { key: 'costumerDetails', label: 'פרטי לקוח' },
    { key: 'propertiesBudget', label: 'מאפיינים ותקציב' },
    { key: 'reservationDetails', label: 'פרטי הזמנה' },
  ];

  public panels: Panel[] = [
    { key: 'costumerDetails', label: 'פרטי לקוח' },
    { key: 'propertiesBudget', label: 'מאפיינים ותקציב' },
    { key: 'reservationDetails', label: 'פרטי הזמנה' },
  ];
  currentIndex: number = 0;

  complete$!: Observable<boolean>;

  circleSteps: CardStep[] = [
    { svgIcon: '', label: '1', path: '2', selected: true },
    { svgIcon: '', label: '2', path: '2' },
    { svgIcon: '', label: '3', path: '2' },
  ];
  constructor(
    private newReservationService: NewReservationService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {
    this.complete$ = this.newReservationService.getIsSavedAsObs();
  }

  onSave(value: any) {
    this.newReservationService.emitNewIsSaved(true);
  }
  private navigate(path: string) {
    console.log(this.routerService.getCurrentPath());
    path = `/${this.routerService.getCurrentPath()}/${path}`;
    this.routerService.navigate(path);
  }
  public onNext(step: CardStep) {
    this.navigate(step.path!);
  }

  public onChangeStep(step: CardStep) {
    this.navigate(step.path!);
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }

  onStepEmit(step: StepsSelectionEvent) {
    this.circleSteps = this.circleSteps.map((item, index) => {
      return index === step.selectedIndex
        ? { ...item, selected: true }
        : { ...item, selected: false };
    });
    this.currentIndex = this.circleSteps.findIndex((item) => item.selected);
  }

  changeStep() {
    console.log(this.currentIndex);

    let newIndex = this.circleSteps.findIndex((item) => item.selected);
    this.currentIndex = ++newIndex;
    this.currentIndex =
      this.currentIndex >= this.circleSteps.length ? 0 : this.currentIndex;
    this.circleSteps = this.circleSteps.map((item, index) => {
      return index === this.currentIndex
        ? { ...item, selected: true }
        : { ...item, selected: false };
    });
    this.currentIndex === (this.circleSteps.length - 1)
      ? this.newReservationService.emitNewShowNext(true)
      : this.newReservationService.emitNewShowNext(false);
  }
}
