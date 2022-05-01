import { Component, OnInit } from '@angular/core';
import { ControlBase, FormChangeEvent, FormService, Question, QuestionGroupModel } from '../../../../../../../kakal-ui/src/public-api';
import { MarketersReportsService } from './marketers-reports.service';

@Component({
  selector: 'app-marketers-reports',
  templateUrl: './marketers-reports.component.html',
  styleUrls: ['./marketers-reports.component.scss']
})
export class MarketersReportsComponent implements OnInit {
  tabs!:{value:string,label:string}[]
  quesions!:ControlBase[]

  questionsTemp:Question[]=[
    {
      key: 'period',
      label: 'תקופה',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'year',
      label: 'שנה',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'quater',
      label: 'רבעון',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'startingSum',
      label: 'מסכום',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'endingSum',
      label: 'עד סכום',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'winningProvider',
      label: 'ספק זוכה',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'exemption',
      label: 'פטורים',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'classification',
      label: 'סיווג ראשוני',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'secondaryClassification',
      label: 'סיווג משני',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'unit',
      label: 'חטיבה',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
    {
      key: 'requestingUnit',
      label: 'יחדיה מבקשת',
      controlType: 'select',
      options: this.marketersReportsService.options,
    },
  ]

  groupFlex!: QuestionGroupModel;

  constructor(private marketersReportsService:MarketersReportsService,
    private formService: FormService
    ) { }

  ngOnInit(): void {
    this.tabs=this.marketersReportsService.getTabs()
    
    this.quesions=this.marketersReportsService.getQuestions()


        // form group
        this.groupFlex = this.setGroup(this.questionsTemp, {
          cols: 6,
          variant: 'flex',
        });
  }
//create form objects
private setGroup(questions: Question[],gridProps:any) {
  return this.formService.createQuestionGroup({
    questions,
    key: 'test',
    options: { gridProps: gridProps },
  });
}
public onChangedForm(event: FormChangeEvent){

}

}
