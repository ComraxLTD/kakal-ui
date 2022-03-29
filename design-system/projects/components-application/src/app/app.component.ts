import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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

  constructor() {}

  ngOnInit(): void {
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
