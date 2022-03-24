import { Component, OnInit } from '@angular/core';
import { CardLobbyModel } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public cards: CardLobbyModel[] = [
    {
      label: 'ספר נכסים',
      svgUrl: 'estate',
      path: 'estate',
    },
    {
      label: 'בקרת רישום',
      svgUrl: 'evaluation',
      path: 'evaluation',
    },
    {
      label: 'בקרת הכנסות',
      svgUrl: 'incoming',
      path: 'incoming',
      
    },
    {
      label: 'בקרת הוצאות',
      svgUrl: 'expense',
      path: 'expense',
      
    },
    {
      label: 'משקיפים',
      svgUrl: 'committee',
      path: 'spectator',
    },
    {
      label: 'בקרה תכנונית',
      svgUrl: 'planing',
      path: 'planing',
    },
  ];
  title = 'components-application';
  constructor() { }
  data = [{key:'First',label:'בדיקה'},{key:'Second',label:'test'},{key:'Third',label:'עמוד 3'}];

  ngOnInit(): void {}
}
