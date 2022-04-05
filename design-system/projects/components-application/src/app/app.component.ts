import { Component, OnInit } from '@angular/core';
import {
  CardStepModel,
  FormActions,
  FormGrid,
  FormService,
  Question,
  QuestionGroupModel,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private formService: FormService) {}

  actions = [
    { type: 'file', label: 'מסמכים' },
    { svgIcon: 'edit', label: 'Edit', type: FormActions.EDIT },
    { svgIcon: 'save', label: 'Edit', type: FormActions.SUBMIT },
  ];

  steps: CardStepModel[] = [
    {
      label: 'פרטי נכס',
      svgIcon: 'home',
      path: 'details',
    },
    {
      label: 'טיוטות והסכמים',
      svgIcon: 'portfolio',
      path: 'documents',
    },
    {
      label: 'שליחת מייל',
      svgIcon: 'mail',
      path: 'mails',
    },
  ];
  questions: Question[] = [
    {
      key: 'name',
    },
    {
      key: 'select',
      controlType: 'select',
      label: 'select',
      options: [{ label: 'test', value: 0 }],
    },
    {
      key: 'email',
      controlType: 'email',
      // offset - set to none to remove padding from the end
      gridProps: { offset: 'none' },
    },
    {
      key: 'phone',
      controlType: 'checkbox',
    },
    {
      key: 'date',
      controlType: 'date',
      // offset - set to none to remove padding from the end
      // gridProps: { offset: 'none' },
    },
    {
      key: 'upload',
      controlType: 'upload',
      // offset - set to none to remove padding from the end
      gridProps: { offset: 'none' },
    },
    {
      key: 'text',
      controlType: 'textarea',
    },
  ];
  groupFlex!: QuestionGroupModel;

  ngOnInit(): void {
    // flex form ex
    this.groupFlex = this.setGroup(this.questions, {
      cols: 3,
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
