import { Component, OnInit } from '@angular/core';
import {
  CardStepModel,
  FormActions,
  FormGrid,
  FormService,
  Question,
  QuestionGroupModel,
  RowActionModel,
  TableBase,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataSource = [
    {
      poCodes: 'asdasdas',
      suppliers: 'suppliers',
      status: 'status',
    }
  ];

  columns: TableBase[] = [
    { key: 'id', label: 'Id', controlType: 'number', button: {type: 'visibility', icon: ''} },
    { key: 'name', label: 'Name', controlType: 'text', },
    { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number', },
    { key: 'occupation', label: 'Occupation', controlType: 'text', },
    { key: 'city', label: 'עיר', controlType: 'select'},
    { key: 'dob', label: 'תאריך', controlType: 'date', colIcon:'tree'},
  ];


  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
      label: 'Edit'
    },
    {
      type: 'inlineDelete',
      icon: 'cancel',
      label: 'Delete'
    },
    {
      type: 'visibility',
      icon: 'visibility',
      label: 'Show'
    },
  ]

  constructor(private formService: FormService) {}

  ngOnInit(): void {
  }

  key: string = 'myDatePicker';

  description: string = ''

  editRow(event:any) {
    console.log(event);
  }

  onClick(event: string){
    console.log(event)
  }

}
