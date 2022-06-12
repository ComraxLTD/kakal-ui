import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CardStatus,
  CardStep,
  KklSelectOption,
  MenuCard,
  PageHeadlineService,
  RouterService,
  RowActionEvent,
  RowActionModel,
  RowExpandEvent,
  StatusSelectionEvent,
  TableBase,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'education';
  isOpened: boolean = false;

  cards: MenuCard[] = [
    { path: 'as', templateName: '', svgIcon: 'home' } as MenuCard,
    {
      path: 'as',
      templateName: 'temp',
      svgIcon: 'tree',
      label: 'test',
    } as MenuCard,
    {
      path: 'as',
      templateName: 'test',
      svgIcon: 'connect',
      label: 'test2',
    } as MenuCard,
    {
      path: 'as',
      templateName: 'test3',
      svgIcon: 'tree',
      label: 'test3',
    } as MenuCard,
  ];

  status: CardStatus[] = [
    {
      key: 'first',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'second',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'third',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
  ];

  constructor(
    private routerService: RouterService,
    private pageHeadlineSource: PageHeadlineService
  ) {}

  dataSource: any[] = [];
  ngOnInit(): void {
    // setTimeout(() => {
    this.pageHeadlineSource.emitPageHeadlineItems([
      {
        value: {
          label: 'כותרת נוספת',
          authorizedBars: 7,
          totalBars: 10,
        },
        status: true,
      },
    ]);
    // }, 3000);

    // setTimeout(() => {
    this.dataSource = [
      {
        id: 1,

        name: 'Hillyer Bowkley',

        dob: new Date(),

        occupation: 'Physical Therapy Assistant',

        yearsOfExperience: 32,

        city: { label: 'La Mesa', value: 10 },
      },
      {
        id: 2,

        name: 'Jodie Bartholat',

        dob: new Date(),

        occupation: 'Administrative Officer',

        yearsOfExperience: 9,

        city: { label: 'Jishan', value: 1 },
      },
      {
        id: 3,

        name: 'Reeba Frandsen',

        dob: new Date(),

        occupation: 'Web Designer I',

        yearsOfExperience: 79,

        city: { label: 'Winburg', value: 10 },
      },
      {
        id: 4,

        name: 'Ricky Chettoe',

        dob: new Date(),

        occupation: 'Safety Technician IV',

        yearsOfExperience: 40,

        city: { label: 'Tsybli', value: 87 },
      },
      {
        id: 5,

        name: 'Ward Du Barry',

        dob: new Date(),

        occupation: 'Media Manager IV',

        yearsOfExperience: 16,

        city: { label: 'Greensboro', value: 32 },
      },
      {
        id: 6,

        name: 'Maximilian Spratley',

        dob: new Date(),

        occupation: 'VP Quality Control',

        yearsOfExperience: 21,

        city: { label: 'Yinla', value: 98 },
      },
      {
        id: 7,

        name: 'Hersh Cronin',

        dob: new Date(),

        occupation: 'Statistician II',

        yearsOfExperience: 43,

        city: { label: 'Kalabahi', value: 64 },
      },
      {
        id: 8,

        name: 'Paloma Althorp',

        dob: new Date(),

        occupation: 'Staff Accountant II',

        yearsOfExperience: 53,

        city: { label: 'Kilju', value: 59 },
      },
      {
        id: 9,

        name: 'Mariel Dondon',

        dob: new Date(),

        occupation: 'VP Sales',

        yearsOfExperience: 25,

        city: { label: 'San Cristóbal', value: 38 },
      },
      {
        id: 10,

        name: 'Flinn Rickeard',

        dob: new Date(),

        occupation: 'Graphic Designer',

        yearsOfExperience: 62,

        city: { label: 'Moa', value: 18 },
      },
      {
        id: 11,

        name: 'Nancie Glazebrook',

        dob: new Date(),

        occupation: 'Automation Specialist II',

        yearsOfExperience: 17,

        city: { label: 'Zengjia', value: 99 },
      },
      {
        id: 12,

        name: 'Reidar Carnihan',

        dob: new Date(),

        occupation: 'Software Engineer III',

        yearsOfExperience: 77,

        city: { label: 'Göteborg', value: 99 },
      },
      {
        id: 13,

        name: 'Ric Culpan',

        dob: new Date(),

        occupation: 'Statistician II',

        yearsOfExperience: 12,

        city: { label: 'Bayt al ‘Awābī', value: 84 },
      },
      {
        id: 14,

        name: 'Arlyne Stroulger',

        dob: new Date(),

        occupation: 'Data Coordiator',

        yearsOfExperience: 93,

        city: { label: 'Malapaubhara', value: 75 },
      },
      {
        id: 15,

        name: 'Robinia Muncer',

        dob: new Date(),

        occupation: 'Administrative Officer',

        yearsOfExperience: 74,

        city: { label: 'Sete Lagoas', value: 53 },
      },
      {
        id: 16,

        name: 'Doug Hazeup',

        dob: new Date(),

        occupation: 'Accountant II',

        yearsOfExperience: 25,

        city: { label: 'San Juan de la Maguana', value: 69 },
      },
      {
        id: 17,

        name: 'Sheppard Bovaird',

        dob: new Date(),

        occupation: 'Dental Hygienist',

        yearsOfExperience: 83,

        city: { label: 'El Monte', value: 71 },
      },
      {
        id: 18,

        name: 'Kath Dominichelli',

        dob: new Date(),

        occupation: 'VP Product Management',

        yearsOfExperience: 63,

        city: { label: 'Zizhao', value: 85 },
      },
      {
        id: 19,

        name: 'Rosamond Tzar',

        dob: new Date(),

        occupation: 'VP Sales',

        yearsOfExperience: 87,

        city: { label: 'Būlaevo', value: 65 },
      },
      {
        id: 20,

        name: 'Helsa Cork',

        dob: new Date(),

        occupation: 'Database Administrator I',

        yearsOfExperience: 4,

        city: { label: 'Iracemápolis', value: 75 },
      },
      {
        id: 21,

        name: 'Tremayne Jenkyn',

        dob: new Date(),

        occupation: 'Automation Specialist I',

        yearsOfExperience: 70,

        city: { label: 'Tanabi', value: 42 },
      },
      {
        id: 22,

        name: 'Charlena Chiene',

        dob: new Date(),

        occupation: 'Biostatistician IV',

        yearsOfExperience: 7,

        city: { label: 'Sasa', value: 48 },
      },
      {
        id: 23,

        name: 'Wit Kneeshaw',

        dob: new Date(),

        occupation: 'Nurse Practicioner',

        yearsOfExperience: 58,

        city: { label: 'Pelabuhanratu', value: 25 },
      },
      {
        id: 24,

        name: 'Galen Taber',

        dob: new Date(),

        occupation: 'Environmental Tech',

        yearsOfExperience: 10,

        city: { label: 'Neglasari', value: 69 },
      },
      {
        id: 25,

        name: 'Sutton Clemmens',

        dob: new Date(),

        occupation: 'Operator',

        yearsOfExperience: 88,

        city: { label: 'Jiangshan', value: 70 },
      },
    ];
    // }, 3000);
  }

  onLogoClicked() {
    this.routerService.navigate('/');
  }

  columns: TableBase[] = [
    {
      key: 'id',
      label: 'Id',
      controlType: 'number',
      button: { type: 'inlineNavigation' },
    },
    { key: 'name', label: 'Name', controlType: 'toggle' },
    { key: 'dob',controlType : 'date', label : 'Birth Date'},
    {
      key: 'yearsOfExperience',
      label: 'YearsOfExperience',
      controlType: 'number',
      colIcon: 'tree',
    },
    {
      key: 'occupation',
      label: 'Occupation',
      controlType: 'text',
      button: { type: 'visibility', icon: 'add' },
    },
    {
      key: 'occupation',
      label: 'Occupation',
      button: { type: 'inlineExpand', label: 'פרטים' },
    },
    { key: 'city', label: 'עיר', controlType: 'select' },
  ];

  //   // every object in the rowActions array is a button that will appear on the left side of every row of the table
  rowActions: RowActionModel[] = [
    { type: 'inlineEdit', icon: 'edit', label: 'Edit' },
    { type: 'inlineDelete', icon: 'delete', label: 'Delete' },
    { type: 'visibility', icon: 'visibility', label: 'Show' },
    { type: 'inlineExpand', icon: 'keyboard_arrow_down', label: 'Expand' },
  ];

  //   // newRowAction is the label of the button in the actions column header
  newRowAction: string = 'הוסף שורה חדשה';

  // inserting the data into dataSource2
  onExpand(event: RowExpandEvent) {
    console.log(event);
  }
}
