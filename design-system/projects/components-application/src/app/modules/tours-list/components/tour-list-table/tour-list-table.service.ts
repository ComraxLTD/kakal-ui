import { Injectable } from '@angular/core';
import { TableBase }from '../../../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class TourListTableService {
  dataSource: any[] = [
    {
      tourId: 12,
      tourName: { schoolName: 'עירוני ח אשדוד', count: '120' },
      date: { date: '01.04.21-21.21.21', count: 2 },
      destenation: { value: 'נס הרים', svgIcon: 'check' },
      attribute: 'מעוף,',
      location: 'פנים נס הרים',
      instructors: 1,
      marketer: 'אליהו בלום',
      prePay: 450,
      status: { authorizedBars: 1, totalBars: 3, label: 'ממתין' },
    },  {
      tourId: 12,
      tourName: { schoolName: 'עירוני ח אשדוד', count: '120' },
      date: { date: '01.04.21-21.21.21', count: 2 },
      destenation: { value: 'נס הרים', svgIcon: 'check' },
      attribute: 'מעוף,',
      location: 'פנים נס הרים',
      instructors: 1,
      marketer: 'אליהו בלום',
      prePay: 450,
      status: { authorizedBars: 1, totalBars: 3, label: 'ממתין' },
    },
  ];

  columns: TableBase[] = [
    { key: 'tourId' },
    { key: 'tourName', cellTemplate: 'tourName' },
    { key: 'date', cellTemplate: 'date' },
    { key: 'destenation', cellTemplate: 'destenation' },
    { key: 'attribute' },
    { key: 'location' },
    { key: 'instructors' },
    { key: 'marketer', button: { type: 'inlineExpand', icon: 'expand' } },
    { key: 'prePay', button: { type: 'inlineExpand', icon: 'expand' } },
    { key: 'status', cellTemplate: 'status' },
  ];

  providerColumns: TableBase[] = [
    { key: 'process', label: 'בטיפול' },
    { key: 'permission', label: 'הרשאה' },
    { key: 'status', label: 'סטטוס' },
  ];



  prePayColumns:TableBase[]=[
    {key:'budjet',label:'תקצוב בקקל,'},
    {key:'fieldCharge',label:'חיו עפ מרכז שדה'},
    {key:'customerCharge',label:'חיוב לקוח'},
    {key:'prePay',label:'דמי קידמה'},
    {key:'total',label:'סהכ לחיוב'}
  ]

  constructor() {}
}
