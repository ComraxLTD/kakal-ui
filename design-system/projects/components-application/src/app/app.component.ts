import { Component } from '@angular/core';
import {
  CardStatus,
  MenuCard,
  PageHeadlineService,
  RouterService,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'education';

cards:MenuCard[]=[
  {path:'as',templateName:"",svgIcon:'edit'}as MenuCard 
]

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

  constructor(
    private routerService: RouterService,
    private pageHeadlineSource: PageHeadlineService
  ) {}

  ngOnInit(): void {
;
  }

  onLogoClicked() {
    this.routerService.navigate('/');
  }
}
