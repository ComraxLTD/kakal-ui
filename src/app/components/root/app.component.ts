import { Component } from '@angular/core';
import { NavigationCardModel } from './../../utilities/models/nav-card-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public title : string ='קק"ל חינוך - הזמנות טיולים'

    public status: NavigationCardModel[] = [
    {
      title: 'בתהליך',
      svgUrl: 'reload',
      badgeValue: 3,
      hasBadge: true
    },
    {
      title: 'מחכה לאישור',
      svgUrl: 'report',
      badgeValue: 1,
      hasBadge: true
    },
    {
      title: 'סגור',
      svgUrl: 'flag',
      badgeValue: 20,
      hasBadge: true
    },
  ]
}
