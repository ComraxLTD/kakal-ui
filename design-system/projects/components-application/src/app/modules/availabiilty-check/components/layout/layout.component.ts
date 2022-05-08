import { Component, OnInit } from '@angular/core';
import { BreakpointService, ButtonModel, CardStep, ControlBase, FormChangeEvent, FormDataSource, FormService, Question, QuestionGroupModel, RouterService, SelectOption, StepsLayoutService }from '../../../../../../../kakal-ui/src/public-api';
import { map, mergeMap, Observable, of} from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [FormDataSource, StepsLayoutService]
})
export class LayoutComponent implements OnInit {

  steps: CardStep[] = [
    {
      label: 'פרטי הזמנה',
      svgIcon: 'plant',
      path: 'search',
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

  contentPortion = { open: 10, close: 50 };
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

  questions: ControlBase[] = [
    {
      key: 'select',
      controlType: 'select',
      options: this.options,
      label: 'מרכז שדה',
    },
    {
      key: 'range',
      controlType: 'dateRange',
      label: 'תאריך הזמנה',
    }
  ]
  groupGrid!: QuestionGroupModel;
  groupFlex!: QuestionGroupModel;


  constructor(
    private breakpointsService: BreakpointService,
    private routerService: RouterService,
    private stepperLayoutService: StepsLayoutService,
    private formService: FormService
  ) { }

  ngOnInit(): void {
    //decide if drawer is open or closed on init
    // this.stepperLayoutService.emitDisplayDrawer(false);
    // form group
    // this.groupFlex = this.setGroup(this.questions, {
    //   cols: 2,
    //   variant: 'flex',
    // });
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
  formGrid= {cols:2}

  onFormChange(formEvent: FormChangeEvent) {
    console.log(formEvent);
    // this.groupFlex = this.setGroup(this.questions,{
    //   cols: 2,
    //   variant: 'flex',
    // });
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

  onQueryChanged(event: any) {
    console.log(event);
  }

  onSelectChanged(event: any) {
    console.log(event);
  }

  onOpenChanged(event: any) {
    console.log(event);
  }
}
