import { Component, OnInit } from '@angular/core';
import { FormGrid } from '../../../../../../../../../kakal-ui/src/lib/form/models/question.types';
import { FormService, Question, QuestionGroupModel, TableBase } from '../../../../../../../../../kakal-ui/src/public-api';
@Component({
  selector: 'app-sleeping',
  templateUrl: './sleeping.component.html',
  styleUrls: ['./sleeping.component.scss'],
})
export class SleepingComponent implements OnInit {
  constructor(private formService: FormService) { }
  
  // TABLE PROPS
  columns: TableBase[] = [
    { key: 'supplier', label: 'ספק', controlType: 'select' },
    { key: 'groupComposition', label: 'הרכב קבוצה', controlType: 'select' },
    { key: 'sleepingCount', label: 'מס לנים', controlType: 'number' },
    { key: 'facility', label: 'מתקן', controlType: 'select' },
    { key: 'dates', label: 'תאריכים', controlType: 'dateRange' },
    { key: 'item', label: 'פריט', controlType: 'select' },
    { key: 'itemCount', label: 'כמות', controlType: 'text' },
    { key: 'comments', label: 'הערות', controlType: 'text' },
  ];

  rowActions: any[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
    },
    {
      type: 'deleteEdit',
      icon: 'delete',
    },
  ];

  // insert data for the table here
  dataSource = []

  // form
  form!: QuestionGroupModel;
  questions: Question[] = [
    { key: 'name', controlType: 'select', label: 'בקתה' },
    { key: 'dates', controlType: 'dateRange', label: 'תאריכים' },

  ];

  private setGroup(questions: Question[], grid: FormGrid, key: string) {
    return this.formService.createQuestionGroup({
      questions,
      key: key,
      options: { gridProps: grid },
    });
  }

  // checkbox
  checked!:boolean;
  
  ngOnInit(): void {
    this.form = this.setGroup(this.questions, { cols: 2, variant: 'flex' }, 'form');
  }

}
