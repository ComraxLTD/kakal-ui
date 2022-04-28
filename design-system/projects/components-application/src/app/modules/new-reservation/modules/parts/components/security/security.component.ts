import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  public dataSource: any[] = [
  ];

  columns: TableBase[] = [
    { key: 'dates', label: 'תאריכים', controlType: 'select' },
    { key: 'supplier', label: 'ספק', controlType: 'select' },
    { key: 'item', label: 'פריט', controlType: 'select' },
    { key: 'amount', label: 'כמות', controlType: 'number' },
    { key: 'participants', label: "מס' משתתפים", controlType: 'number' },
    { key: 'time', label: 'שעת התייצבות', controlType: 'time' },
    { key: 'location', label: 'מקום איסוף', controlType: 'text' },
    { key: 'dispersionLocation', label: 'מקום פיזור', controlType: 'text' },
    { key: 'name', label: 'שם מאבטח', controlType: 'text' },
    { key: 'comments', label: 'הערות', controlType: 'text' },
    { key: 'totalPrice', label: 'סה"כ לתשלום' },


  ]
  rowActions = [
    { type: 'inlineEdit', icon: 'edit', },
    { type: 'inlineDelete', icon: 'delete' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
