import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CardStepModel,
  RouterService,
  StepperLayoutService,
} from '../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {
  portion$!: Observable<number>;

  public steps: CardStepModel[] = [
    {
      label: 'פרטי ההתקשרות',
      svgIcon: 'contact',
      path: 'first',
      size: 3,
      variant: 'circle',
      type: 'step',
    },
    {
      label: 'בניית הצעת מחיר',
      svgIcon: 'offer',
      path: 'second',
      size: 3,
      variant: 'circle',
      type: 'step',
    },
  ];
  constructor(
    private stepperLayoutService: StepperLayoutService,
    private routerService: RouterService
  ) {}

  ngOnInit(): void {}
  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    path = `test/${path}`;
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
