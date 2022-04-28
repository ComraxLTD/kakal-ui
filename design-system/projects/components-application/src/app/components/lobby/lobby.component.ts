import { Component, OnInit } from '@angular/core';
// import {
//   BreakpointService,
//   CardLobbyModel,
//   RouterService,
// } from '../../../../../../../../../kakal-ui/src/lib/form/formService/';
import { Observable } from 'rxjs';
import { BreakpointService, CardLobbyModel, RouterService } from '../../../../../kakal-ui/src/public-api';

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
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.md$ = this.breakpointService.isMedium();
  }

  public onCardClick(path: string) {
    const url: string = `/${path}`;
    this.routerService.navigate(url);
  }
}
