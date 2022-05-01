import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss']
})
export class EconomyComponent implements OnInit {
  public dataSource: any[] = [
  ];

  columns :TableBase[]= [
    { key: 'dates', label: 'תאריכים', controlType: 'select' },
    { key: 'item', label: 'פריט', controlType: 'select' },
    { key: 'amount', label: 'כמות' ,controlType:'number'},
    { key: 'participants', label:"מס' משתתפים" ,controlType:'number'},
    { key: 'startTime', label: 'משעה' ,controlType:'time'},
    { key: 'endTime', label: 'עד שעה' ,controlType:'time'},
    { key: 'location', label: 'מיקום' ,controlType:'text'},
    { key: 'regularFood', label: 'מנות רגילות' ,controlType:'number'},
    { key: 'vegetarianFood', label: 'מנות צמחוניות' ,controlType:'number'},
    { key: 'VeganFood', label: 'מנות טבעוניות' ,controlType:'number'},
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
