import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss']
})
export class TransportationComponent implements OnInit {
  public dataSource: any[] = [
  ];

  columns :TableBase[]= [
    { key: 'dates', label: 'תאריכים', controlType: 'select' },
    { key: 'supplier', label: 'ספק', controlType: 'select' },
    { key: 'item', label: 'פריט', controlType: 'select' },
    { key: 'amount', label: 'כמות' ,controlType:'number'},
    { key: 'participants', label:"מס' משתתפים" ,controlType:'number'},
    { key: 'time', label: 'שעת איסוף' ,controlType:'time'},
    { key: 'location', label: 'מקום איסוף' ,controlType:'text'},
    { key: 'leavingLocation', label: 'איזור יציאה' ,controlType:'select'},
    { key: 'dispersionTime', label: 'שעת פיזור' ,controlType:'time'},
    { key: 'dispersionLocation', label: 'מקום פיזור' ,controlType:'text'},
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
