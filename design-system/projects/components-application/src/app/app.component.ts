import { Component, OnInit } from '@angular/core';
import { LayoutService, MenuCard, RowActionModel, TableBase } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  dataSource:any[]=[
    {provider:'שדג', providerID:5131,wasInTour:'כן',itemPrice:561,price:654,comment:'asdasd'  ,winning: { decided: true, won: false }
    ,},
    {provider:'שדג', providerID:5131,wasInTour:'כן',itemPrice:561,price:654,comment:'asdasd'  ,winning: { decided: false, won: false }
    ,}
  ]
  columns: TableBase[] = [
    {
      key: 'provider',
      label: 'ספק',
      controlType: 'text',
      button: { type: 'provider', icon: '' },
    },
    { key: 'providerID', label: 'ח"פ', controlType: 'text' },
    { key: 'wasInTour', label: 'נכח בסיור קבלנים', controlType: 'text' },
    { key: 'itemPrice', label: 'מחיר פריט', controlType: 'text' },
    {
      key: 'price',
      label: 'מחיר *',
      controlType: 'text',
      button: { type: 'price', icon: '' },
    },
    { key: 'comment', label: 'הערה', controlType: 'text' },
    {
      key: 'winning',
      label: 'זכיה',
      controlType: 'text',
    },
  ];
  rowActions: RowActionModel[] = [
    {
      type: 'inlineEdit',
      icon: 'edit',
    },
  
    { type: 'inlineExpand', icon: 'keyboard_arrow_down' },
  ];

  tabsArray: { key: string, label: string }[]=[
    {key:'winning',label:'ספק זוכה'},
    {key:'documents',label:'מסמכים'},
    {key:'contacts',label:'אנשי קשר'},
    {key:'evaluation',label:'חוות דעת'},
  ];


  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
  }

  
  onExpand(event: any) {
    console.log(event);
   
  }

}
