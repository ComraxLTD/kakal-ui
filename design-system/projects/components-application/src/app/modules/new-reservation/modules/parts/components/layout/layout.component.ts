import { Component, OnInit } from '@angular/core';
import { CardFilter, RouterService } from '../../../../../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  cards  :CardFilter[] = [
    {
     label: 'הכל',
      value: 5,
      svgIcon: 'trees',
      path: 'everything'
    },
    {
      label: 'פעילות',
      value: 0,
      svgIcon: 'locations',
      path: 'activity',
      disabled : true

    },
    {
      label: 'לינה',
      value: 0,
      svgIcon: 'sleep',
      path: 'sleeping'
    },
    {
     label: 'מתקנים',
      value: 0,
      svgIcon: 'house',
      path: 'facilities'
    },
    {
     label: 'הסעים',
      value: 1,
      svgIcon: 'bus',
      path: 'transportation'
    },
    {
     label: 'אבטחה',
      value: 0,
      svgIcon: 'shield',
      path: 'security'
    },
    {
     label: 'כלכלה',
      value: 0,
      svgIcon: 'food',
      path: 'economy'
    },
    {
     label: 'אתרים',
      value: 0,
      svgIcon: 'map',
      path: 'sites'
    },
    {
     label: 'הדרכה',
      value: 0,
      svgIcon: 'hiking',
      path: 'guidance'

    },
    {
     label: 'הפעלה מוזיקלית',
      value: 0,
      svgIcon: 'music',
      path: 'musical-entertainment'
    },
  ]

  constructor(private routerService:RouterService) {}

  ngOnInit(): void {

  }

  // onCardClick(event: any) {
  //   console.log(event);
  // }

  public onCardClick(index  : number) {
    const url: string = `/reservation/parts/${this.cards[index].path}`;
    console.log(this.cards[index]);

    this.routerService.navigate(url);
  }

}
