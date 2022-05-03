import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable } from 'rxjs';
import { BreakpointService, CardLobbyModel, KklSelectOption, RouterService } from '../../../../../kakal-ui/src/public-api';

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

  groupControl = new FormGroup({
    sum: new FormControl(),
    currency: new FormControl()
  })

  options: KklSelectOption[] = [
    {
      label: '$',
      value: 'USD',
    },
    {
      label: '₪',
      value: 'ILS',
    },
    {
      label: '€',
      value: 'EUR',
    },
    {
      label: '£',
      value: 'GBP',
    },
  ]

  ngOnInit(): void {
    this.md$ = this.breakpointService.isMedium();
  }

  public onCardClick(path: string) {
    const url: string = `/${path}`;
    this.routerService.navigate(url);
  }
}
