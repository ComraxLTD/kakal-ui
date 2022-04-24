import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, mergeMap } from 'rxjs';
import { BreakpointService, ButtonModel, ControlBase, FormChangeEvent, FormService, OptionsModel, Question, QuestionGroupModel, RouterService, RowActionModel, SelectOption, StepperLayoutService, TableBase } from '../../../kakal-ui/src/public-api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  contentPortion = { open: 10, close: 50 };
  actions: ButtonModel[] = [{ type: 'portion' } as ButtonModel];

  formValues = { select: '', date: ''}

  isFormFull(){
    if(this.formValues.date && this.formValues.select) this.navigate('search/results')
  }

  // form variables
  group!: QuestionGroupModel<any>;

  options:SelectOption[] = [
    {
      label: 'ציפורי',
      value: 'any',
    },
    {
      label: 'לביא',
      value: 'any',
    },
<<<<<<< HEAD
=======
  ]

  formGroup = new FormGroup({});

  questions: ControlBase[] = [
    // {
    //   key: 'first',
    //   controlType: 'select',
    //   options: 'firstQuestion',
    //   multi: true,
    //   label: 'בחירה ראשונה',
    // },
    // {
    //   key: 'second',
    //   controlType: 'select',
    //   options: 'secondQuestion',
    //   multi: false,
    //   label: ' בחירה שניה',
    //   // disabled: true
    //   //,
    // },
    {
      key: 'autocomplete',
      controlType: 'autocomplete',
      options: 'firstQuestion',
      multi: true,
      label: 'local autocomplete',
      // disabled: true
      //,
    },
    // {
    //   key: 'currency',
    //   controlType: 'currency'
    // }
  ];

  dataSource: any[] = [
>>>>>>> f830f792cea14298749d399b83eef819610055f0
    {
      label: 'נס הרים',
      value: 'any',
    },
    {
      label: 'יתיר',
      value: 'any',
    },
    {
      label: 'שוני',
      value: 'any',
    },
  ];

  questions: Question[] = [
    {
      key: 'select',
      controlType: 'select',
      options: this.options,
      label: 'מרכז שדה',
    },
    {
      key: 'range',
      controlType: 'dateRange',
      label: 'תאריך הזמנה'
    }
  ]
  groupGrid!: QuestionGroupModel;
  groupFlex!: QuestionGroupModel;


  constructor(
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepperLayoutService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    //decide if drawer is open or closed on init
    this.stepperLayoutService.emitDisplayDrawer(false);

    // form group

<<<<<<< HEAD
    this.groupFlex = this.setGroup(this.questions, {
      cols: 2,
      variant: 'flex',
    });
=======
  editData =  'ert'
  //{
    //select: { label: 'editData', value: 88 }
  //}

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.columns = [
        { key: 'committeeId', label: 'Id mm', controlType: 'number',},
        { key: 'remiTikimCount', label: 'remiTikimCount mm', controlType: 'number', button: {type: 'inlineExpand', icon: 'expand'}},
        { key: 'committeeDate', label: 'תאריך  mm', controlType: 'date', },
      ];
      console.log(this.formGroup);
      this.questions = this.questions.concat([{
        key: 'time',
        controlType: 'time'
      }])
      // this.editData = { number: 65657 };
    }, 4000);
>>>>>>> f830f792cea14298749d399b83eef819610055f0
  }

  // breakpoints
  private mergeBreakPoints() {
    return this.breakpointsService.isSmall().pipe(
      mergeMap(isSmall => this.breakpointsService.isMobile().pipe(
        map(isMobile => [isSmall, isMobile])
      ))
    );
  }

 


  // NAVIGATION EVENTS SECTION
  private navigate(path: string) {
    console.log(this.routerService.getCurrentPath(), path)
    path = `/${this.routerService.getCurrentPath()}/${path}`;
    this.routerService.navigate(path);
  }
//create form objects
  private setGroup(questions: Question[],gridProps:any) {
    return this.formService.createQuestionGroup({
      questions,
      key: 'test',
      options: { gridProps: gridProps },
    });
  }

  onFormChange(formEvent: FormChangeEvent) {
    console.log(formEvent);
    this.groupFlex = this.setGroup(this.questions,{
      cols: 2,
      variant: 'flex',
    });
  }

  // navigate from bottom-navbar - next
  public onNext() {
    console.log('הזמן');
  }

  public onPrevious(): void {
    this.routerService.goBack();
  }

  public onChangedForm(event: FormChangeEvent){
    if(event.key === 'select'){
      this.formValues.select = event.value.label
    }
    if(event.key === 'range' && event.value.end){
      this.formValues.date = event.action
    }
    this.isFormFull()
  }

  public onDrawerOpenChanged(openState: boolean) {
    console.log(openState);
  }
}
