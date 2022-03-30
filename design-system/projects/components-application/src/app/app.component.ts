import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  FormDataSource,
  FormService,
  TableBase,
  CardInfoModel,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormDataSource],
})
export class AppComponent implements OnInit {
  control = new FormControl();
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

  // public card: CardFilter = {
  //   label: 'שם הכרטיס', // label inside card
  //   value: 2, // number inside card
  //   svgIcon: 'search', // svg key
  // };

  card: CardInfoModel;

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.card = {
      svgIcon: 'home',
      label: 'first headline',
      subLabel: 'text long text liong tasd faser',
    };

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
