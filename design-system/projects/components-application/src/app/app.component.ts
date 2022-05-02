import { Component } from '@angular/core';
import { CardStatus, RouterService } from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'education';

  status: CardStatus[] = [
    {
      key: 'first',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'second',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
    {
      key: 'third',
      svgIcon: 'home',
      label: 'working',
      path: '',
      options: [],
    },
  ];

  constructor(private routerService: RouterService) {}

  onLogoClicked() {
    this.routerService.navigate('/');
  }
}
