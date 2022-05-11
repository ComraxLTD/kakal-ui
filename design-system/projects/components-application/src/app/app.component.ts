import { Component } from '@angular/core';
import {
  CardStatus,
  DialogAlertComponent,
  DialogService,
  MenuCard,
  PageHeadlineService,
  RouterService,
  RowActionEvent,
  RowActionModel,
  RowExpandEvent,
  StatusSelectionEvent,
  TableBase,
} from '../../../kakal-ui/src/public-api';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomDialogComponent } from '../../../kakal-ui/src/lib/custom-dialog/custom-dialog.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  // the dataSource is the content of the table
  dataSource = [
    {
      city: {label: 'Tel Aviv', value: 5},
      dob: "2022-06-05T11:40:04Z",
      id: 1,
      name: "Hillyer Bowkley",
      occupation: "Physical Therapy Assistant",
      yearsOfExperience: 32,
    },
    {
      city: {label: 'Tel Aviv', value: 5},
      dob: "2022-06-05T11:40:04Z",
      id: 4,
      name: "Hillyer Bowkley",
      occupation: "Physical Therapy Assistant",
      yearsOfExperience: 32,
    },
    {
      city: {label: 'Tel Aviv', value: 5},
      dob: "2022-06-05T11:40:04Z",
      id: 3,
      name: "Hillyer Bowkley",
      occupation: "Physical Therapy Assistant",
      yearsOfExperience: 32,
    },
    {
      city: {label: 'Tel Aviv', value: 5},
      dob: "2022-06-05T11:40:04Z",
      id: 2,
      name: "Hillyer Bowkley",
      occupation: "Physical Therapy Assistant",
      yearsOfExperience: 32,
    },
  ]

  dataSource2 = this.dataSource

  constructor() { }

  ngOnInit(): void {
    // ComraxTablesService inserting data into dataSource
    // this.comraxTablesService.getTableObjects().subscribe(res => this.dataSource = res)
  }

  // columns of the tables, according to the data coming from ComraxTablesService
  // the columns for the outer table
  columns: TableBase[] = [
    { key: 'id', label: 'Id', controlType: 'number', },
    { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number' },
    { key: 'dob', label: 'תאריך', controlType: 'date', },
    { key: 'name', label: 'name', controlType: 'text', button: {label: 'label' , type: 'customExpand', icon: 'keyboard_arrow_down'} },
  ];

  // the columns for the inner table
  columns2: TableBase[] = [
    { key: 'occupation', label: 'Occupation', controlType: 'text', noFilter: true},
    { key: 'name', label: 'Name', controlType: 'text', noFilter: true},
    { key: 'city', label: 'עיר', controlType: 'select', noFilter: true},
  ]

  // every object in the rowActions array is a button that will appear on the left side of every row of the table
  rowActions: RowActionModel[] = [
    { type: 'inlineEdit', icon: 'edit', label: 'Edit' },
    { type: 'inlineDelete', icon: 'delete', label: 'Delete' },
    { type: 'visibility', icon: 'visibility', label: 'Show' },
    { type: 'inlineExpand', icon: 'keyboard_arrow_down', label: 'Expand' },
  ]

  // inserting the data into dataSource2
  onExpand(event: RowExpandEvent) {
    // this.dataSource2 = this.dataSource
    console.log(event);
  }

  onClicked(event: RowActionEvent){
    console.log(event);
  }



  // title = 'education';

  // cards: MenuCard[] = [
  //   { path: 'as', templateName: '', svgIcon: 'edit' } as MenuCard,
  // ];

  // status: CardStatus[] = [
  //   {
  //     key: 'first',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  //   {
  //     key: 'second',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  //   {
  //     key: 'third',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  // ];

  // constructor(
  //   private routerService: RouterService,
  //   private pageHeadlineSource: PageHeadlineService,
  // ) {}

  // ngOnInit(): void {}

  // onLogoClicked() {
  //   this.routerService.navigate('/');
  // }
  // onStatus(event: StatusSelectionEvent) {
  //   console.log(event);
  // }
}
