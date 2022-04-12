import { Component, OnInit } from '@angular/core';
import { RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CardAddComponent } from '../../../kakal-ui/src/lib/cards/card-add/card-add.component';
import { ControlBase, OptionsModel } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  dataSource!: any[];

  dataSource2! : any[]

  description: string = '';

  constructor() {} // private comraxTablesService: ComraxTablesService,

  ngOnInit(): void {
    // this.comraxTablesService.getTableObjects().subscribe(res => { this.dataSource = res })
    this.description = 'Actions Table';
    this.dataSource = [
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      },
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      },
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      },
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      },
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      }
    ]

    this.dataSource2 = [
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      },
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      },
      {
        key: 'key',
        label: 'label',
        controlType: 'text',
      },
    ]

  }

  columns: TableBase[] = [
    { key: 'committeeId', label: 'Id', controlType: 'number',},
    { key: 'remiTikimCount', label: 'remiTikimCount', controlType: 'number', button: {type: 'inlineExpand', icon: 'expand'}},
    { key: 'committeeDate', label: 'תאריך', controlType: 'date', },
  ];

  columns2: TableBase[] = [
    { key: 'key', label: 'label', controlType: 'text',},
    { key: 'monetaryValue', label: 'MonetaryValue', controlType: 'number',},
    { key: 'nechasimCount', label: 'NechasimCount', controlType: 'number',},
  ]

  rowActions: RowActionModel[] = [
    { type: 'inlineExpand', icon: 'expand' }
  ]

  onExpand(event: any) {
    console.log(event);
    // this.dataSource2 = event.remiTikim
  }

  options: OptionsModel[] = [
    {
      //this key should be the same
      key: 'firstQuestion',
      val: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1, disabled: true },
        { label: 'test3', value: 2 },
        { label: 'test2', value: 3 },
      ],
    },
    {
      //this key should be the same
      key: 'secondQuestion',
      val: [
        { label: 'test1', value: 1, disabled: true },
        { label: 'test3', value: 2, selected: true },
        { label: 'test2', value: 3, disabled: true },
      ],
    },
    {
      //this key should be the same
      key: 'autocomplete',
      val: [
        { label: 'test1', value: 1, disabled: true },
        { label: 'test3', value: 2, selected: true },
        { label: 'test2', value: 3, disabled: true },
      ],
    },
  ];

  questions: ControlBase[] = [
    {
      key: 'autocomplete',
      controlType: 'autocomplete',
      options: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1 },
        { label: 'test2', value: 2 },
        { label: 'test3', value: 3 },
      ],
      // multi: true,
      label: 'local autocomplete',
      // disabled: true
      //,
    },
    {
      key: 'email',
      controlType: 'email',
    },
    {
      controlType: 'calendar',
      key: 'calendar',
    },
    {
      controlType: 'counter',
      key: 'counter',
      icon: 'tree',
    },
  ];

  cards = {
    1: {
      id: 1,
      svgIcon: 'home',
      category: 'הסכם חליפין',
    },
    2: {
      id: 2,
      svgIcon: 'home',
      category: 'הסכם רכישה',
    },
    3: {
      id: 3,
      svgIcon: 'home',
      category: 'הסכם מכר',
    },
  };

  onGrigChanged(event) {
    console.log(event)
  }
}
