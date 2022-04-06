import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
// import { StatusBarsModel } from '../../../kakal-ui/src/lib/status-bars/status-bars.model';
import {
  CardInfoComponent,
  CardStepModel,
  Panel,
  PageHeadlineService,
  FormActions,
  FormService,
  Question,
  QuestionGroupModel,
  IconComponent,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  control = new FormControl();
  component = CardInfoComponent;
  iconComponent = IconComponent
  iconsData = [
    {key:'search',color:'primary',size:5},
    {key:'edit',size:2},
    {key:'keyboard_arrow_down',color:'accent'},
    {key:'calendar'}
  ]
  cards = [
    {
      svgIcon: 'search',
      label: '1',
      subLabel: 'sub label',
    },
    {
      svgIcon: 'search',
      label: '2',
      subLabel: 'sub label',
    }, {
      svgIcon: 'search',
      label: '3',
      subLabel: 'sub label',
    }, {
      svgIcon: 'search',
      label: '4',
      subLabel: 'sub label',
    }, {
      svgIcon: 'search',
      label: '5',
      subLabel: 'sub label',
    },{
      svgIcon: 'search',
      label: '6',
      subLabel: 'sub label',
    },
  ]

  actions = [
    { type: 'file', action: FormActions.EDIT },
    { type: 'form', action: FormActions.EDIT },
    {
      type: 'form',
      action: FormActions.SUBMIT,
    },
  ];
  show$: Observable<boolean> = of(true);
  constructor(
    private formService: FormService,
    private pageHeadlineService: PageHeadlineService
  ) {}

  // cards: MenuCard[] = [
  //   { label: 'string', svgIcon: 'home', active: true, path: 'no' },
  // ];
  // status: StatusBarsModel = {
  //   label: 'statusBars',
  //   authorizedBars: 3,
  //   totalBars: 8,
  // };
  ngOnInit(): void {
    this.pageHeadlineService.emitPageHeadlineItems([
      { value: 'כותרת' },
      { value: 'כותרת' },
      { value: 'כותרת' },
      { value: new Date(), format: 'date' },
      {
        value: {
          label: 'statusBars',
          authorizedBars: 3,
          totalBars: 6,
        },
        template: true,
      },
    ]);
  }
}
