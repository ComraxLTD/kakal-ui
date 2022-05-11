import { Component } from '@angular/core';
import {
  CardStatus,
  MenuCard,
  PageHeadlineService,
  RouterService,
  StatusSelectionEvent,
} from '../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'education';
  isOpened: boolean = false;
  cards: MenuCard[] = [
    { path: 'as', templateName: 'temp', svgIcon: 'tree', label: 'test' } as MenuCard,
    { path: 'as', templateName: 'test', svgIcon: 'connect', label: 'test2' } as MenuCard,
    { path: 'as', templateName: 'test3', svgIcon: 'tree', label: 'test3' } as MenuCard,
  ];
  cards2: MenuCard[] = [
    { path: 'as', templateName: 'new', label: 'test',isChildren:true } as MenuCard,
    { path: 'as', templateName: 'test', label: 'test2', isChildren: true } as MenuCard,
    { path: 'as', templateName: 'newTest', label: 'test3',isChildren:true } as MenuCard,
  ];
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
  ) { }

  ngOnInit(): void { }

  onLogoClicked() {
    this.routerService.navigate('/');
  }
  onStatus(event: StatusSelectionEvent) {
    console.log(event);
  }
}
