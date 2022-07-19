import { Component, Inject, OnInit } from '@angular/core';

import { DetailsService } from '../costumer-details.service';
import { Observable, of, pluck } from 'rxjs';
import {
  FormChangeEvent,
  FormDataSource,
  FormService,
  PageHeadlineService,
  Question,
  RowActionModel,
  TableBase,
} from '../../../../../../../../../kakal-ui/src/public-api';
import { FormGrid } from '../../../../../../../../../kakal-ui/src/lib/form/models/question.types';
@Component({
  selector: 'app-costumer-details',
  templateUrl: './costumer-details.component.html',
  styleUrls: ['./costumer-details.component.scss'],
  providers: [FormDataSource],
})
export class CostumerDetailsComponent implements OnInit {
  // TABLE PROPS

  columns: TableBase[] = [
    // in the first column, there is an additional 'button' property, which makes the cells in that column into buttons
    // the 'button' property correlates with the RowActionModel, accept for the 'label', which has no effect on the UI
    { key: 'id', label: 'Id', controlType: 'number', button: { type: 'inlineNavigation' } },
    { key: 'name', label: 'Name', controlType: 'toggle'},
    // in yearsOfExperience column, we can see the 'colIcon' which is used for adding an icon to all cells in that column
    { key: 'yearsOfExperience', label: 'YearsOfExperience', controlType: 'number', colIcon: 'tree',  },
    { key: 'occupation', label: 'Occupation', controlType: 'text', button: { type: 'visibility', icon: 'add' } },
    { key: 'city', label: 'עיר', controlType: 'select' },
    // { key: 'dob', label: 'תאריך', controlType: 'date' },
    // { key: 'id1', label: 'Id', controlType: 'number', button: { type: 'inlineNavigation' } },
    // { key: 'name1', label: 'Name', controlType: 'text', notEditable: true},
    // // in yearsOfExperience column, we can see the 'colIcon' which is used for adding an icon to all cells in that column
    // { key: 'yearsOfExperience1', label: 'YearsOfExperience', controlType: 'number', colIcon: 'tree' },
    // { key: 'occupation1', label: 'Occupation', controlType: 'text', button: { type: 'visibility', icon: 'add' } },
    // { key: 'city1', label: 'עיר', controlType: 'select' },
    // { key: 'dob1', label: 'תאריך', controlType: 'date' },
    // { key: 'id2', label: 'Id', controlType: 'number', button: { type: 'inlineNavigation' } },
    // { key: 'name2', label: 'Name', controlType: 'text', notEditable: true},
    // // in yearsOfExperience column, we can see the 'colIcon' which is used for adding an icon to all cells in that column
    // { key: 'yearsOfExperience2', label: 'YearsOfExperience', controlType: 'number', colIcon: 'tree' },
    // { key: 'occupation2', label: 'Occupation', controlType: 'text', button: { type: 'visibility', icon: 'add' } },
    // { key: 'city2', label: 'עיר', controlType: 'select' },
    // { key: 'dob2', label: 'תאריך', controlType: 'date' },
  ];

  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
      button: false,
    },
    {
      type: 'deleteEdit',
      icon: 'delete',
      button: false,
    },
  ];

  dataSource1 = [{

    "id": 1,

    "name": "Hillyer Bowkley",

    "DOB": "2022-06-05T11:40:04Z",

    "occupation": "Physical Therapy Assistant",

    "yearsOfExperience": 32,

    "city": {"label":"La Mesa","value":10}

  }, {

    "id": 2,

    "name": "Jodie Bartholat",

    "DOB": "2022-09-07T04:32:27Z",

    "occupation": "Administrative Officer",

    "yearsOfExperience": 9,

    "city": {"label":"Jishan","value":1}

  }, {

    "id": 3,

    "name": "Reeba Frandsen",

    "DOB": "2022-06-09T10:56:22Z",

    "occupation": "Web Designer I",

    "yearsOfExperience": 79,

    "city": {"label":"Winburg","value":10}

  }, {

    "id": 4,

    "name": "Ricky Chettoe",

    "DOB": "2022-01-11T12:52:15Z",

    "occupation": "Safety Technician IV",

    "yearsOfExperience": 40,

    "city": {"label":"Tsybli","value":87}

  }, {

    "id": 5,

    "name": "Ward Du Barry",

    "DOB": "2021-12-19T09:05:38Z",

    "occupation": "Media Manager IV",

    "yearsOfExperience": 16,

    "city": {"label":"Greensboro","value":32}

  }, {

    "id": 6,

    "name": "Maximilian Spratley",

    "DOB": "2022-07-15T04:59:57Z",

    "occupation": "VP Quality Control",

    "yearsOfExperience": 21,

    "city": {"label":"Yinla","value":98}

  }, {

    "id": 7,

    "name": "Hersh Cronin",

    "DOB": "2022-05-02T02:11:21Z",

    "occupation": "Statistician II",

    "yearsOfExperience": 43,

    "city": {"label":"Kalabahi","value":64}

  }, {

    "id": 8,

    "name": "Paloma Althorp",

    "DOB": "2022-04-01T23:21:52Z",

    "occupation": "Staff Accountant II",

    "yearsOfExperience": 53,

    "city": {"label":"Kilju","value":59}

  }, {

    "id": 9,

    "name": "Mariel Dondon",

    "DOB": "2022-05-16T20:03:30Z",

    "occupation": "VP Sales",

    "yearsOfExperience": 25,

    "city": {"label":"San Cristóbal","value":38}

  }, {

    "id": 10,

    "name": "Flinn Rickeard",

    "DOB": "2021-05-29T19:53:40Z",

    "occupation": "Graphic Designer",

    "yearsOfExperience": 62,

    "city": {"label":"Moa","value":18}

  }, {

    "id": 11,

    "name": "Nancie Glazebrook",

    "DOB": "2022-06-12T22:41:49Z",

    "occupation": "Automation Specialist II",

    "yearsOfExperience": 17,

    "city": {"label":"Zengjia","value":99}

  }, {

    "id": 12,

    "name": "Reidar Carnihan",

    "DOB": "2021-04-21T19:08:27Z",

    "occupation": "Software Engineer III",

    "yearsOfExperience": 77,

    "city": {"label":"Göteborg","value":99}

  }, {

    "id": 13,

    "name": "Ric Culpan",

    "DOB": "2021-12-05T22:56:40Z",

    "occupation": "Statistician II",

    "yearsOfExperience": 12,

    "city": {"label":"Bayt al ‘Awābī","value":84}

  }, {

    "id": 14,

    "name": "Arlyne Stroulger",

    "DOB": "2022-02-26T08:25:09Z",

    "occupation": "Data Coordiator",

    "yearsOfExperience": 93,

    "city": {"label":"Malapaubhara","value":75}

  }, {

    "id": 15,

    "name": "Robinia Muncer",

    "DOB": "2022-07-16T13:19:05Z",

    "occupation": "Administrative Officer",

    "yearsOfExperience": 74,

    "city": {"label":"Sete Lagoas","value":53}

  }, {

    "id": 16,

    "name": "Doug Hazeup",

    "DOB": "2022-09-17T02:55:51Z",

    "occupation": "Accountant II",

    "yearsOfExperience": 25,

    "city": {"label":"San Juan de la Maguana","value":69}

  }, {

    "id": 17,

    "name": "Sheppard Bovaird",

    "DOB": "2022-01-19T11:02:21Z",

    "occupation": "Dental Hygienist",

    "yearsOfExperience": 83,

    "city": {"label":"El Monte","value":71}

  }, {

    "id": 18,

    "name": "Kath Dominichelli",

    "DOB": "2022-01-19T00:50:50Z",

    "occupation": "VP Product Management",

    "yearsOfExperience": 63,

    "city": {"label":"Zizhao","value":85}

  }, {

    "id": 19,

    "name": "Rosamond Tzar",

    "DOB": "2021-07-08T01:07:10Z",

    "occupation": "VP Sales",

    "yearsOfExperience": 87,

    "city": {"label":"Būlaevo","value":65}

  }, {

    "id": 20,

    "name": "Helsa Cork",

    "DOB": "2021-08-24T23:51:47Z",

    "occupation": "Database Administrator I",

    "yearsOfExperience": 4,

    "city": {"label":"Iracemápolis","value":75}

  }, {

    "id": 21,

    "name": "Tremayne Jenkyn",

    "DOB": "2021-11-05T06:59:06Z",

    "occupation": "Automation Specialist I",

    "yearsOfExperience": 70,

    "city": {"label":"Tanabi","value":42}

  }, {

    "id": 22,

    "name": "Charlena Chiene",

    "DOB": "2021-06-30T12:54:41Z",

    "occupation": "Biostatistician IV",

    "yearsOfExperience": 7,

    "city": {"label":"Sasa","value":48}

  }, {

    "id": 23,

    "name": "Wit Kneeshaw",

    "DOB": "2021-07-21T19:35:38Z",

    "occupation": "Nurse Practicioner",

    "yearsOfExperience": 58,

    "city": {"label":"Pelabuhanratu","value":25}

  }, {

    "id": 24,

    "name": "Galen Taber",

    "DOB": "2022-01-11T01:03:45Z",

    "occupation": "Environmental Tech",

    "yearsOfExperience": 10,

    "city": {"label":"Neglasari","value":69}

  }, {

    "id": 25,

    "name": "Sutton Clemmens",

    "DOB": "2021-06-13T00:54:22Z",

    "occupation": "Operator",

    "yearsOfExperience": 88,

    "city": {"label":"Jiangshan","value":70}

  }];
  //  FORM PROPS

  // set questions array for the advanced form
  public questions: Question[] = [
    // first object for the general search
    // key must be search!
    {
      key: 'search',
      label: 'חפש',
      controlType: 'autocomplete',
    },
    {
      key: 'city',
      label: 'עיר',
      controlType: 'text',
    },
    {
      key: 'calendar',
      label: 'סוג לקוח',
      controlType: 'text',
    },
  ];

  dataSource = [
    {
      costumerName: 'costumerName',
      costumerType: 'costumerType',
      contactName: 'contactName',
      cellPhone: 'cellPhone',
      email: 'email',
      address: 'address',
      payingCostumer: 'payingCostumer',
    },
  ];

  formGrid!: FormGrid;
  searchKey: string = 'search';
  constructor(
    private formDataSource: FormDataSource,
    private pageHeadlineService: PageHeadlineService
  ) {}

  ngOnInit(): void {
    // this.questions = this.detailsService.getFormQuestions();
    this.formGrid = { cols: 2 };
    this.pageHeadlineService.emitPageHeadlineItems([
      { value: 'הוספת הbbbbזמנה חדשה'},
      { value: 'הוספת הזמנה חדשה', button: true, icon: 'tree' },
      { value: 'הוספת הbbbbbbbbbזמנה חדשה'},
    ]);
    this.pageHeadlineService.listenToHeadlineClick().subscribe(a => {
      console.log(a);

    })
  }

  // DOM EVENTS SECTION
  onCreateNewCommittee() {
    console.log('onCreateNewCommittee');
  }

  // listen to formChanged events
  onFormChanged(event: FormChangeEvent) {
    this.formDataSource.dispatch(event);
  }
}
