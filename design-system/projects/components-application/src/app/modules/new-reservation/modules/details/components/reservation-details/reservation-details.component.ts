import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGrid } from '../../../../../../../../../kakal-ui/src/lib/form/models/question.types';
import { FormService, Question, QuestionGroupModel } from '../../../../../../../../../kakal-ui/src/public-api';


interface CounterType {
  key: string;
  icon: string;
  label: string;
  control: FormControl
}
@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.scss'],
})
export class ReservationDetailsComponent implements OnInit {

  groupFlex!: QuestionGroupModel;

  // form questions
  questions: Question[] = [
    {
      key: 'description',
      controlType: 'text',
      label: 'שם/תיאור ההזמנה',
    },
    {
      key: 'budgeting',
      label: 'מרכז שדה',
      controlType: 'text',
    },
    {
      key: 'activityType',
      label: 'תאריך ההזמנה',
      controlType: 'text',
    },
    {
      key: 'department',
      controlType: 'text',
      label: 'אזור',
    },
    {
      key: 'location',
      controlType: 'text',
      label: 'פנים/חוץ מרכז שדה',
    },
    {
      key: 'revenueBudgetSub-item',
      label: 'קבוצת גיל',
      controlType: 'text',
      gridProps: { cols:1},
    },
    {
      key: 'country',
      label: 'מגדר',
      controlType: 'text',
      gridProps: { cols:1 },
    },
    {
      key: 'NotesToReservationCenter',
      label: 'הערות למרכז הזמנות',
      controlType: 'text',
      gridProps: { cols: 3 },

    },
  ];

  // counters
  counters: CounterType[] = [
    {
      key: 'participants',
      icon: 'tree',
      label: 'משתתפים',
      control: new FormControl()
    },
    {
      key: 'escorts',
      icon: 'tree',
      label: 'מלווים',
      control: new FormControl()
    },
    {
      key: 'guides',
      icon: 'tree',
      label: 'מדריכים',
      control: new FormControl()
    },
    {
      key: 'drivers',
      icon: 'tree',
      label: 'נהגים',
      control: new FormControl()
    },
    {
      key: 'babies',
      icon: 'tree',
      label: 'מתחת לגיל 2',
      control: new FormControl()
    },
    {
      key: 'total',
      icon: 'tree',
      label: 'סה"כ משתתפים',
      control: new FormControl()
    },
  ];

  constructor(private formService: FormService,) {}

  ngOnInit(): void {

    this.groupFlex = this.setGroup(this.questions, {
      cols: 5,
      variant: 'flex',
    });
  }

  private setGroup(questions: Question[], grid: FormGrid) {
    return this.formService.createQuestionGroup({
      questions,
      key: 'test',
      options: { gridProps: grid },
    });
  }
}
