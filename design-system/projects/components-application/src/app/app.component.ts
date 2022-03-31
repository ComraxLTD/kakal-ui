import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { Step } from '../../../kakal-ui/src/lib/vertical-steps/step/step.model';
import {
  FormDataSource,
  FormService,
  TableBase,
  CardInfoModel,
  CardStepModel,
  Panel,
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

  public steps: Step[] = [
    { key: 'filterForm', label: 'working' },
    { key: 'groupForm', label: 'working2' },
  ];

  // array for panel layout
  public panels: Panel[] = [
    { key: 'filterForm', label: 'working' },
    { key: 'groupForm', label: 'working2' },
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

  on(event: any) {
    console.log(event);
  }
}
