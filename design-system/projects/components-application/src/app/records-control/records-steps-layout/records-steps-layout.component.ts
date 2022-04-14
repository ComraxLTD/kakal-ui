import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardStepModel, ButtonModel, RouterService, StepperSelectEvent } from '../../../../../kakal-ui/src/public-api';

import { RecordStepsLayoutService } from './records-steps-layout.service';

@Component({
  selector: 'app-records-steps-layout',
  templateUrl: './records-steps-layout.component.html',
  styleUrls: ['./records-steps-layout.component.scss'],
})
export class RecordsStepsLayoutComponent implements OnInit {
  steps!: CardStepModel[];

   actions!: ButtonModel[]

     contentPortion = { open: 10, close: 50 };


  constructor(
    private recordStepsLayoutService: RecordStepsLayoutService,
    private routerService: RouterService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.steps = this.recordStepsLayoutService.getSteps();
    this.actions = this.recordStepsLayoutService.getActions()
  }

  private getUrl(path: string) {
    const routes = this.router.url.split('/');
    routes.unshift();
    routes.pop();
    routes.push(path);
    return routes.join('/');
  }

  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    const url = this.getUrl(path);
    this.routerService.navigate(url);
  }

  // navigate from stepper
  onStepSelect(event: StepperSelectEvent) {
    this.navigate(event.selectedStep.path);
  }
  // navigate from bottom-navbar - next
  onNext(event: StepperSelectEvent) {
    console.log(event);
    // this.navigate(event.selectedStep.path);
  }

  onPrevious(): void {
    this.routerService.goBack();
  }
}
