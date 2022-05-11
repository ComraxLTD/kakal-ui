import { Component } from '@angular/core';
import {
  CardStatus,
  MenuCard,
  PageHeadline,
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

  tabs = [
    { key: 'first', label: 'First Tab'},
    { key: 'second', label: 'Second Tab'},
    { key: 'third', label: 'Third Tab'}
  ];
  cards: MenuCard[] = [
    { path: 'as', templateName: '', svgIcon: 'edit' } as MenuCard,
  ];

  // status: CardStatus[] = [
  //   {
  //     key: 'first',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  //   {
  //     key: 'second',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  //   {
  //     key: 'third',
  //     svgIcon: 'home',
  //     label: 'working',
  //     path: '',
  //     options: [],
  //   },
  // ];

  constructor(
    private routerService: RouterService,

    
    private pageHeadlineSource: PageHeadlineService

  ) {}

  ngOnInit(): void {
    // setTimeout(() => {
      this.pageHeadlineSource.emitPageHeadlineItems([{ value: {
        label: 'כותרת נוספת',
        authorizedBars: 7,
        totalBars: 10,
      }, status: true }]);
    // }, 3000);
  }

  onLogoClicked() {
    this.routerService.navigate('/');
  }
  onStatus(event: StatusSelectionEvent) {
    console.log(event);
  }
}
