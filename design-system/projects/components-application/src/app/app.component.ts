import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model';
import { RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataSource = [];

  columns: TableBase[] = [
    {
      controlType: 'text',
      key: 'poCodes',
        label: `PO#`,
        group: 'poCodes',
    },
    {
      controlType: 'text',
      key: 'suppliers',
        label: `Supplier`,
        group: 'poCodes',
    },
    {
      controlType: 'date',
      key: 'recordedTime',
        label: `Recorded time`,
        button:
          {
            type: 'inlineExpand',
            icon: 'expand',
          }
    },
    {
      controlType: 'text',
      key: 'status',
        label: `Status`,
        colIcon: 'add'
    },
  ];

  // constructor() {}

  // ngOnInit(): void {
  //   // this.dataSource = [
  //   //   {
  //   //     city: { label: 'Tel Aviv', value: 5 },
  //   //     dob: '2022-03-28T00:00:00Z',
  //   //     id: 1,
  //   //     name: 'Hillyer Bowkley',
  //   //     occupation: 'Physical Therapy Assistant',
  //   //     yearsOfExperience: 32,
  //   //   },
  //   // ];
  // }

  key: string = 'myDatePicker';

  status:StatusBarsModel = {
    label : "statusBars",
    authorizedBars : 3,
    totalBars : 6
    }

  description: string = ''



  control: FormControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }




}
