import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  public dataSource: any[] = [
  ];

  columns :TableBase[]= [
    { key: 'dates', label: 'תאריכים', controlType: 'select' },
    { key: 'site', label: 'אתר', controlType: 'select' },
    { key: 'participants', label:"מס' משתתפים" ,controlType:'number'},
    { key: 'startTime', label: 'משעה' ,controlType:'time'},
    { key: 'endTime', label: 'עד שעה' ,controlType:'time'},
    { key: 'location', label: 'כתובת' ,controlType:'text'},
    { key: 'siteLocation', label: 'כתובת אתר' ,controlType:'text'},
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
