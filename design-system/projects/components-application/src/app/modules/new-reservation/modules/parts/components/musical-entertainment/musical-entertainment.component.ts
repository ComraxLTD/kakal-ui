import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-musical-entertainment',
  templateUrl: './musical-entertainment.component.html',
  styleUrls: ['./musical-entertainment.component.scss']
})
export class MusicalEntertainmentComponent implements OnInit {
  public dataSource: any[] = [
  ];

  columns :TableBase[]= [
    { key: 'dates', label: 'תאריכים', controlType: 'select' },
    { key: 'supplier', label: 'ספק', controlType: 'select' },
    { key: 'item', label: 'פריט', controlType: 'select' },
    { key: 'amount', label: 'כמות' ,controlType:'number'},
    { key: 'participants', label:"מס' משתתפים" ,controlType:'number'},
    { key: 'startTime', label: 'שעת התחלה' ,controlType:'time'},
    { key: 'endTime', label: 'שעת סיום' ,controlType:'time'},
    { key: 'totalTime', label: 'סה"כ שעות' ,controlType:'number'},
    { key: 'comments', label: 'הערות' ,controlType:'text'},
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
