import { Injectable } from '@angular/core';
import {
  ButtonModel,
  ControlBase,
  FormActions,
  OptionsModel,
  TableBase,
} from '../../../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class MarketersTourListService {
  private actions: ButtonModel[] = [
    { label: 'מסמכי תיק', type: 'file', action: FormActions.VALUE_CHANGED },
    { type: 'form', action: FormActions.EDIT },
    { type: 'form', action: FormActions.SUBMIT },
  ];

  selectOptions: OptionsModel[] = [
    {
      //this key should be the same
      key: 'tourOptions',
      val: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1, disabled: true },
      ],
    },
  ];

  select: ControlBase[] = [
    {
      key: 'tourOptions',
      controlType: 'select',
      options: 'tourOptions',
      multi: false,
      label: 'בחר טיול',
    },
  ];

  dataSource: any[] = [
    {
      tourId: '1234',
      customer: 'בית ספר סוסיא',
      tourName: 'שם הטיול',
      destination: 'הר גלבוע',
      tourDates: '12.07.13-15.07.14',
      status: { label: 'סטטוס', authorizedBars: 5, totalBars: 9 },
      activities: 'שלח תזכורת',
    },
    {
      tourId: '1234',
      customer: 'בית ספר סוסיא',
      tourName: 'שם הטיול',
      destination: 'הר גלבוע',
      tourDates: '12.07.13-15.07.14',
      status: { label: 'סטטוס', authorizedBars: 5, totalBars: 9 },
      activities: 'שלח תזכורת',
    },
  ];

  columns: TableBase[] = [
    {
      key: 'tourId',
      label: "מס' טיול ",
      button: { type: 'inlineExpand', icon: '' },
    },
    { key: 'customer', label: 'לקוח' },
    { key: 'tourName', label: 'שם הטיול' },
    { key: 'destination', label: 'יעד' },
    { key: 'tourDates', label: 'תאריכי הטיול' },
    { key: 'status', label: 'סטאטוס', cellTemplate: 'status' },
    { key: 'activities', label: 'פעולות' },
  ];

  autoComplete: ControlBase[] = [
    {
      key: 'autocomplete',
      controlType: 'autocomplete',
      options: [
        { label: 'test', value: 0 },
        { label: 'test1', value: 1 },
        { label: 'test2', value: 2 },
        { label: 'test3', value: 3 },
      ],
      label: 'הקלד מס/שם הטיול',
    },
  ];
  data = [
    { key: 'Providers', label: 'ספקים' },
    { key: 'Charged', label: 'חיוב לקוח' },
    { key: 'LastTransactions', label: 'תנועות אחרונות' },
  ];

  constructor() {}

  getActions(): ButtonModel[] {
    return [...this.actions];
  }

  getColumns(): TableBase[] {
    return [...this.columns];
  }
  getDataSource(): any[] {
    return [...this.dataSource];
  }
  getSelectOptions(): OptionsModel[] {
    return [...this.selectOptions];
  }
  getSelect(): ControlBase[] {
    return [...this.select];
  }
  getData(): ControlBase[] {
    return [...this.data];
  }
}
