import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormGrid } from '../../../../../../../../../kakal-ui/src/lib/form/models/question.types';
import { ControlBase, FormService, Question, QuestionGroupModel, SelectOption } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {

  data = [
    {
      label: 'תקציב',
      value: '125,980',
      icon: 'tree'
    },
    {
      label: 'סוג תקצוב',
      value: 'מעוף',
    },
    {
      label: 'תקצוב קק"ל',
      value: '0 $',
    },
    {
      label: 'עלות ללקוח',
      value: '3204 $',
    },
    {
      label: 'ביצוע',
      value: '1520 $',
    },
    {
      label: 'יתרה פיננסית',
      value: '167,520 $',
    },
  ]

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

  checked:boolean=true



  questions: ControlBase[] = [
     {
       key: 'description',
       controlType: 'text',
       label: 'אפיון'
     },
    {
      key: 'budgeting',
      label: 'תקצוב',
      controlType: 'text'
    },
    {
      key: 'activityType',
      label: 'סוג פעילות',
      controlType: 'text',
    },
    {
      key: 'department',
      controlType: 'text',
      label: 'מחלקה'
    },
    {
      key: 'country',
      label: 'מדינה',
      controlType: 'text'
    },
    // {
    //   key: 'costumerCharge',
    //   label: 'חיוב לקוח',
    //   controlType: 'checkbox',
    // checkbox is not working yet
    // },
    {
      key: 'location',
      controlType: 'text',
      label: 'ישוב'
    },
    {
      key: 'revenueBudgetSub-item',
      label: 'תת סעיף תקציבי הכנסות',
      controlType: 'text',
    },
    {
      key: 'expenditureBudgetSub-item',
      label: 'תת סעיף תקציבי הוצאות',
      controlType: 'text',

    }
  ];
  groupFlex!: QuestionGroupModel;


  constructor(
    private formService: FormService,
  ) { }

 
  ngOnInit(): void {
   

  }

  private setGroup(questions: Question[], grid: FormGrid) {
    return this.formService.createQuestionGroup({
      questions,
      key: 'test',
      options: { gridProps: grid },
    });
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
