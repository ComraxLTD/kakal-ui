import { StepperSelectionEvent, CdkStep } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import {
  Panel,
  PageHeadlineService,
  FormService,
  MenuCard,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  show$: Observable<boolean> = of(true);
  constructor(
    private formService: FormService,
    private pageHeadlineService: PageHeadlineService
  ) {}

  // array for vertical steps layout
  public steps: Step[] = [
    { key: 'filterForm', label: 'First Step Headline' },
    { key: 'groupForm', label: 'Second Step Headline' },
  ];

  // array for panel layout
  public panels: Panel[] = [
    { key: 'filterForm', label: 'First Expand Panel Headline' },
    { key: 'groupForm', label: 'Second Expand Panel Headline' },
  ];

  cards: MenuCard[] = [
    { label: 'string', svgIcon: 'home', active: true, path: 'no' },
  ];

  ngOnInit(): void {
    this.pageHeadlineService.emitPageHeadlineItems([
      { value: 'כותרת' },
      { value: 'כותרת' },
      { value: 'כותרת' },
      { value: new Date(), format: 'date' },
      {
        value: {
          label: 'statusBars',
          authorizedBars: 3,
          totalBars: 6,
        },
        template: true,
      },
    ]);
  }

  onSelectionChanged(event: StepperSelectionEvent) {
    console.log(event);
  }

  onInteractedStream(event: CdkStep) {
    // console.log('step', event);
    console.log(event);
  }
}
