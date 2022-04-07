import { StepperSelectionEvent, CdkStep } from '@angular/cdk/stepper';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import {
  Panel,
  PageHeadlineService,
  FormService,
  MenuCard,
  AccordionStepsComponent,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('accordionSteps')
  accordionSteps: AccordionStepsComponent;

  show$: Observable<boolean> = of(true);
  constructor(
    private formService: FormService,
    private pageHeadlineService: PageHeadlineService
  ) {}

  selectedIndex: number = 1;

  formGroup: FormGroup = new FormGroup({});

  // array for vertical steps layout
  public steps: Step[] = [
    {
      key: 'filterForm',
      label: 'First Step Headline',
      control: new FormGroup({}),
    },
    {
      key: 'groupForm',
      label: 'Second Step Headline',
      control: new FormGroup({}),
    },
    {
      key: 'filterForm',
      label: 'Third Step Headline',
      control: new FormGroup({}),
    },
    {
      key: 'groupForm',
      label: 'Forth Step Headline',
      control: new FormGroup({}),
    },
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

  }

  onSelectionChanged(event: StepperSelectionEvent) {
    const { selectedIndex } = event;
    console.log(selectedIndex)
    this.accordionSteps.setSelectedIndex(selectedIndex + 1);
    // if (selectedIndex === 1) {
    // } else {
    //   this.accordionSteps.setSelectedIndex(selectedIndex);
    // }
  }

  onInteractedStream(event: CdkStep) {
    // console.log('step', event);
    // console.log(event);
  }

  next() {
    const steps = [...this.steps];
    steps[this.selectedIndex] = {
      ...steps[this.selectedIndex],
      completed: true,
    } as Step;
    this.steps = [...steps];
  }
}
