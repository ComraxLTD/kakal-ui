import { Component, OnInit } from '@angular/core';
import { TableBase } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.scss']
})
export class FacilitiesComponent implements OnInit {

  public dataSource: any[] = [
  ];

  columns: TableBase[] = [
    { key: 'dates', label: 'תאריכים', controlType: 'select' },
    { key: 'supplier', label: 'ספק', controlType: 'select' },
    { key: 'facility', label: 'מתקן', controlType: 'select' },
    { key: 'item', label: 'פריט', controlType: 'select' },
    { key: 'from', label: "משעה", controlType: 'time' },
    { key: 'until', label: 'עד שעה', controlType: 'time' },
    { key: 'comments', label: 'הערות', controlType: 'text' },
  ]

  rowActions = [
    { type: 'inlineEdit', icon: 'edit', },
    { type: 'inlineDelete', icon: 'delete' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
