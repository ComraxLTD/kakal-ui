import { CardAddComponent } from '../../../kakal-ui/src/lib/cards/card-add/card-add.component';
import { I } from '@angular/cdk/keycodes';
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
  StepSelectEvent,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  //calendar 
  arr = [
    {
      backgroundColor: "#F0F6FE",
      start: "2022-04-07T08:00",
      end: "2022-04-07T09:00",
      editable: true,
      svg: "football",
      textColor: "black",
      title: "מגרש ספורט",
      type: "facility"
    }
  ]

  //
  component = CardAddComponent;
  cards = [
    { title: '1', content: 'test' },
    { title: '2', content: 'test' },
    { title: '3', content: 'test' },
    { title: '4', content: 'test' },
    { title: '5', content: 'test' },
    { title: '6', content: 'test' },
    { title: '7', content: 'test' },
    { title: '8', content: 'test' },

  ]
  public card = {
    label: 'שם הכרטיס', // label inside card
    value: 2, // number inside card
    svgIcon: 'search', // svg key
  };

  show$: Observable<boolean> = of(true);
  constructor(
    private formService: FormService,
    private pageHeadlineService: PageHeadlineService
  ) { }

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


  ngOnInit(): void { }

  onSelectionChanged(event: StepSelectEvent) {
    const { selectedIndex, selectedStep } = event;
    if (selectedStep.key === 'groupForm') {
      this.selectedIndex = selectedIndex;
    }
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
