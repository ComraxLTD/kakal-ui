import { Component } from '@angular/core';
import {
  CardStatus,
  MenuCard,
  PageHeadline,
  PageHeadlineService,
  RouterService,
  StatusBars,
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
    private pageHeadlineService: PageHeadlineService,
    private pageHeadlineSource: PageHeadlineService
  ) {}

  

  status: StatusBars = {
    label: 'Label',
    authorizedBars: 3,
    totalBars: 6,
  };

  headlineItems: PageHeadline[] = [
    { value: 'big Headline' },
    { value: 'small headline ' },
    { value: new Date(), format: 'date' },
    { value: this.status, status: true },
  ];
  ngOnInit(): void {
    this.pageHeadlineService.emitPageHeadlineItems(this.headlineItems);

  }

  onLogoClicked() {
    this.routerService.navigate('/');
  }
}
