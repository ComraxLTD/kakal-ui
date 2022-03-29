import { Component, OnInit } from '@angular/core';
import {
  CardFilter,
  FormDataSource,
  FormGrid,
  FormService,
  Question,
  QuestionGroupModel,
  TableBase,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormDataSource],
})
export class AppComponent implements OnInit {
  dataSource: any[] = [];

  columns: TableBase[] = [
    { key: 'id', label: 'Id', controlType: 'number' },
    { key: 'name', label: 'Name', controlType: 'text' },
    {
      key: 'yearsOfExperience',
      label: 'YearsOfExperience',
      controlType: 'number',
    },
    { key: 'occupation', label: 'Occupation', controlType: 'text' },
    { key: 'city', label: 'עיר', controlType: 'select' },
    { key: 'dob', label: 'תאריך', controlType: 'date' },
  ];

  public card: CardFilter = {
    label: 'שם הכרטיס', // label inside card
    value: 2, // number inside card
    svgIcon: 'search', // svg key
  };

  questions: Question[] = [
    {
      key: 'name',
    },
    {
      key: 'select',
      controlType: 'select',
      options: [{ id: 0, label: 'test', value: 0 }],
    },
    {
      key: 'email',
      controlType: 'email',
    },
    {
      key: 'phone',
      controlType: 'phone',
    },
    {
      key: 'date',
    },
    {
      key: 'upload',
      controlType: 'upload',
    },
    {
      key: 'text',
      controlType: 'textarea',
    },
  ];

  groupGrid!: QuestionGroupModel;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.groupGrid = this.formService.createQuestionGroup({
      questions: this.questions,
      key: 'test',
      options: { gridProps: { cols: 1, variant: 'grid' } as FormGrid },
    });

    this.dataSource = [
      {
        city: { label: 'Tel Aviv', value: 5 },
        dob: '2022-03-28T00:00:00Z',
        id: 1,
        name: 'Hillyer Bowkley',
        occupation: 'Physical Therapy Assistant',
        yearsOfExperience: 32,
      },
    ];
  }
}
