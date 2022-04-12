import { Component, OnInit } from '@angular/core';
import {
  RadioOption,
  ControlBase,
  OptionsModel,
  RowActionModel,
  TableBase,
  Question,
  FormService,
  QuestionGroupModel,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataSource!: any[];

  dataSource2!: any[];

  description: string = '';

  group: QuestionGroupModel;

  constructor(private formService: FormService) {} // private comraxTablesService: ComraxTablesService,

  ngOnInit(): void {
    this.group = this.formService.createQuestionGroup({
      questions: this.questions,
      options: { gridProps: { variant: 'flex', cols: 1 } },
    });

    // this.group.formGroup.disable()

  }

  columns: TableBase[] = [
    { key: 'committeeId', label: 'Id', controlType: 'number' },
    {
      key: 'remiTikimCount',
      label: 'remiTikimCount',
      controlType: 'number',
      button: { type: 'inlineExpand', icon: 'expand' },
    },
    { key: 'committeeDate', label: 'תאריך', controlType: 'date' },
  ];

  columns2: TableBase[] = [
    { key: 'key', label: 'label', controlType: 'text' },
    { key: 'monetaryValue', label: 'MonetaryValue', controlType: 'number' },
    { key: 'nechasimCount', label: 'NechasimCount', controlType: 'number' },
  ];

  rowActions: RowActionModel[] = [{ type: 'inlineExpand', icon: 'expand' }];

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

  questions: Question[] = [
    {
      key: 'contact',
      controlType: 'radio',
      options: [
        {
          label: 'מייל לעו"ד בא כוחו',
          checked: true,
          value: 'attorney',
        } as RadioOption,
        {
          label: 'מייל למנהלת ספר נכסים',
          value: 'administrator',
        } as RadioOption,
      ],
    },
    { key: 'topic', label: 'נושא' },
    {
      key: 'content',
      controlType: 'texteditor',
      label: 'תוכן הפנייה לעורך דין',
      value: '',
      gridProps: { rows: 4 },
    },
    { key: 'file', label: 'לחץ להוספץת מסמך', controlType: 'upload' },
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
    console.log(event);
  }
}
