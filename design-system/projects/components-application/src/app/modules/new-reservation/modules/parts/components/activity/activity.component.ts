import { Component, Input, OnInit } from '@angular/core';
import {  Question, RowActionModel, TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  @Input() showSearch!: Boolean

  // TABLE PROPS
  columns: TableBase[] = [
    { key: 'dates', label: 'תאריכים', controlType: 'date' },
    { key: 'activities', label: 'פעילויות', controlType: 'autocomplete' },
    { key: 'startingTime', label: 'משעה', controlType: 'autocomplete' },
    { key: 'endingTime', label: 'עד שעה', controlType: 'autocomplete' },
    { key: 'comments', label: 'הערות', controlType: 'autocomplete' },
  ];

  // table actions
  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
    },
    {
      type: 'deleteEdit',
      icon: 'delete' ,
    },
  ];

  // label for the add button
  buttonLabel = 'הוספת פעילות חדשה'

  // insert data for the table here ***needs adjusting***
  dataSource = [
    {
      dates: {
        key: 'dates',
        label: 'בחר יום',
        controlType: 'select',
        multi: true,
        options:[{label:'יום 1',value:'option1',id:1},{label:'יום 2',value:'option2',id:2}, {label:'יום 3',value:'option3',id:3}]
      },
      activities: {
        key: 'activities',
        label: 'פעילות',
        controlType: 'select',
        multi: true,
        options:[{label:'ניווט יערני במחנה',value:'ניווט יערני במחנה',id:1},{label:'משחק קוביות ביער',value:'משחק קוביות ביער',id:2}, {label:'איסוף זבל בחוף הים',value:'איסוף זבל בחוף הים',id:3}]
      },
      startingTime: '10:00',
      endingTime: '13:00',
      comments: ''
    },
    {
      dates: {
        key: 'dates',
        label: 'בחר יום',
        controlType: 'select',
        multi: true,
        options:[{label:'יום 1',value:'option1',id:1},{label:'יום 2',value:'option2',id:2}, {label:'יום 3',value:'option3',id:3}]
      },
      activities: {
        key: 'activities',
        label: 'פעילות',
        controlType: 'select',
        multi: true,
        options:[{label:'ניווט יערני במחנה',value:'ניווט יערני במחנה',id:1},{label:'משחק קוביות ביער',value:'משחק קוביות ביער',id:2}, {label:'איסוף זבל בחוף הים',value:'איסוף זבל בחוף הים',id:3}]
      },
      startingTime: '10:00',
      endingTime: '13:00',
      comments: ''
    }
  ]

  // advanced search questions grid
 

  // set questions array for the advanced form
  questions: Question[] = [
    // first object for the general search
    // key must be search!
    {
      key: 'search',
      controlType: 'autocomplete',
    },
    {
      key: 'activity',
      label: 'סוג פעילות',
      controlType: 'select',
      options:[{label:'אופציה ראשונה',value:'option1'},{label:'אופציה שנייה',value:'option2'}]
    },
    {
      key: 'area',
      label: 'אזור',
      controlType: 'select',
      options:[{label:'אופציה ראשונה',value:'option1'},{label:'אופציה שנייה',value:'option2'}]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    
    this.showSearch = this.showSearch || true
  }

}
