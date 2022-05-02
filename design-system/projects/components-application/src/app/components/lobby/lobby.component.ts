import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { BreakpointService, CardLobbyModel, NavbarBottomService, PageHeadline, PageHeadlineService, RouterService, StatusBars } from '../../../../../kakal-ui/src/public-api';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  public md$!: Observable<boolean>;
  public cards: CardLobbyModel[] = [
    {
      label: 'בדיקת זמינות',
      svgIcon: 'calendar',
      path: 'availability-check',
    },
    {
      label: 'בדיקת זמינות',
      svgIcon: 'calendar',
      path: 'availability-check',
    },
    {
      label: 'בדיקת זמינות',
      svgIcon: 'calendar',
      path: 'availability-check',
    },
    {
      label: 'הזמנה חדשה',
      svgIcon: 'connect',
      path: 'reservation',
    },
    {
      label: 'רשימת טיולים',
      svgIcon: 'evaluation',
      path: 'tours-list',
    },
    {
      label: 'דוחות',
      svgIcon: 'reports',
      path: 'reports',
    },
    {
      label: 'משווקים',
      svgIcon: 'search',
      path: 'marketers',
    },
  ];

  constructor(
    private routerService: RouterService,
    private breakpointService: BreakpointService,
    private pageHeadlineService: PageHeadlineService,
    private footerService:NavbarBottomService
  ) {}

  status: StatusBars = {
    label: 'Label',
    authorizedBars: 3,
    totalBars: 6,
  };
  headlineItems: PageHeadline[] = [
    { value: 'big Headline' },
    { value: 'אקליפטוס ' },
    { value: this.status, status: true },
    { value: new Date(), format: 'date' },
  ];

  ngOnInit(): void {
    this.md$ = this.breakpointService.isMedium();
    this.pageHeadlineService.emitPageHeadlineItems(this.headlineItems);
    this.footerService.setShowNext(true);
    this.footerService.setShowSave(true);
  }

  public onCardClick(path: string) {
    const url: string = `/${path}`;
    this.routerService.navigate(url);
  }
}
