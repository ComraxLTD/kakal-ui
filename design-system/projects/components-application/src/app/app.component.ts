import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  FormDataSource,
  FormService,
  TableBase,
  CardInfoModel,
  CardStepModel,
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

  public steps$!: Observable<CardStepModel[]>;

  private steps: CardStepModel[] = [
    new CardStepModel({
      label: 'פרטי ההתקשרות',
      svgIcon: 'contact',
      path: 'details',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      isActive: true,
    }),
    new CardStepModel({
      label: 'בניית הצעת מחיר',
      svgIcon: 'offer',
      path: 'bid',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
      stroke: true,
    }),
    new CardStepModel({
      label: 'בחירת ספקים',
      svgIcon: 'send_mail',
      path: 'supplier',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
    }),
    new CardStepModel({
      label: 'ספק זוכה',
      svgIcon: 'medal',
      path: 'winning',
      size: 3,
      variant: 'circle',
      type: 'step',
      spacer: true,
    }),
  ];

  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.steps$ = of(this.steps);

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
