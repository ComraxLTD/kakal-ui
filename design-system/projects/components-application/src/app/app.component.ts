import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CardInfoComponent, ControlBase, FormChangeEvent, IconComponent, OpenMotionService, OptionsModel, PageHeadlineService, RowActionModel, TableBase, StatusBars, CardLobbyModel, CardStepModel, CardStatusModel, CardFilter, MenuCard, Panel, GridProps, NavbarBottomService, StepsSelectionEvent, RouterService, ButtonModel } from '../../../kakal-ui/src/public-api';
import heLocale from '@fullcalendar/core/locales/he';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // array for vertical steps layout
  public steps: Step[] = [
    { key: 'filterForm', label: 'First Step Headline' },
    { key: 'groupForm', label: 'Second Step Headline' },
    { key: 'filterForm', label: 'Third Step Headline' },
    { key: 'groupForm', label: 'Forth Step Headline' },
  ];

  // array for panel layout
  public panels: Panel[] = [
    { key: 'filterForm', label: 'First Expand Panel Headline' },
    { key: 'groupForm', label: 'Second Expand Panel Headline' },
  ];

  // whet set to false present steps ui, when set to true present accordion ui
  complete$!: BehaviorSubject<boolean>;

  // set manuel to true to disable vertical-steps self navigation
  manuel: boolean = true;

  // use selectIndex to navigate to desired step index
  selectedIndex!: number;

  // constructor() {}

  // ngOnInit(): void {
  //   this.complete$ = new BehaviorSubject<boolean>(false);
  // }

  toggleComplete() {
    const complete = this.complete$.getValue();
    this.complete$.next(!complete);
  }

  // fire when clicked on stepper-header
  onStepSelect(event: any) {
    const { selectedIndex } = event;

    // optional - write logic to validate navigation
    if ((selectedIndex + 1) % 2 === 0) {
      // set selectedIndex with the index of the step you want to navigate to
      this.selectedIndex = selectedIndex;
    }
  }


  dataSource!: any[];

  // the form group which interacts with both the advanced search and the table
  formGroup!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // inserting the data from the server into the table

    // initializing the form
    this.formGroup = new FormGroup({})
  }

  // the columns of the table
  columns: TableBase[] = [
    { key: 'id', label: 'Id', controlType: 'number'},
    { key: 'name', label: 'Name', controlType: 'text'},
    { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number'},
    { key: 'occupation', label: 'Occupation', controlType: 'text'},
    { key: 'city', label: 'עיר', controlType: 'select'},
    { key: 'dob', label: 'תאריך', controlType: 'date'}
  ];

  // much like the kkl-form, gridProps are an optional input for adjusting the layout of the advanced search
  gridProps: GridProps = {
    // make sure you add buttonCols, to add a place for the button within the advanced search
    buttonCols: 1
  }

  // the text of the button within the advanced search
  buttonLabel: string = 'שמור'

  // to be deleted next version
  tableFilters: ControlBase[] = [];

  controls: ControlBase[] = [
    // the first input of the advanced search is always visible, so it does not add a chip, but it is still interacting with the table
    { key: 'occupation', label: 'Occupation', controlType: 'text'},
    { key: 'id', label: 'Id', controlType: 'number'},
    { key: 'name', label: 'Name', controlType: 'text'},
    { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number'},
    { key: 'city', label: 'עיר', controlType: 'select'},
    { key: 'dob', label: 'תאריך', controlType: 'date'}
  ];

  options: OptionsModel[] = [
    {
      //this key should be the same
      key: 'firstQuestion',
      val: [
        { label: 'first select option1', value: 0, },
        { label: 'first select option2', value: 1, disabled: true },
        { label: 'first select option3', value: 2, },
        { label: 'first select option4', value: 3, },
      ],
    },
    {
      //this key should be the same
      key: 'secondQuestion',
      val: [
        { label: 'second select option1', value: 1 },
        { label: 'second select option2', value: 2 },
        { label: 'second select option3', value: 3 },
      ],
    },
    {
      //this key should be the same
      key: 'firstAutocomplete',
      val: [
        { label: 'A first autocomplete option1', value: 1 },
        { label: 'B first autocomplete option2', value: 2 },
        { label: 'C first autocomplete option3', value: 3 },
      ],
    },
    {
      //this key should be the same
      key: 'secondAutocomplete',
      val: [
        { label: 'A second autocomplete option1', value: 1 },
        { label: 'B second autocomplete option2', value: 2 },
        { label: 'C second autocomplete option3', value: 3 },
      ],
    },
  ];

  onOpenChanged(event: any){
    console.log('onOpenChanged');
    console.log(event);
  }

  onQueryChanged(event: any){
    console.log("onQueryChanged");
    console.log(event);
  }

  onSelectChanged(event: any){
    console.log("onSelectChanged");
    console.log(event);
  }

  onValueChanged(event: any){
    console.log("onValueChanged");
    console.log(event);
  }

  onFocusChanged(event: any){
    console.log("onFocusChanged");
    console.log(event);
  }

  onSubmitEvent(event: any){
    console.log("onSubmitEvent");
    console.log(event);
  }
}
