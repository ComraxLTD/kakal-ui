import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardLobby, MenuItem } from '../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class LobbyService {
  private legal$!: BehaviorSubject<boolean>;

  private landsLobby: CardLobby[] = [
    {
      label: 'ספר נכסים',
      svgIcon: 'estate',
      path: 'estates',
    },
    {
      label: 'פיקוח',
      svgIcon: 'supervision',
      path: 'supervision',
    },
    {
      label: 'שומה',
      svgIcon: 'evaluation',
      path: 'evaluation',
    },
    {
      label: 'עסקאות',
      svgIcon: 'transactions',
      path: 'transactions',
    },
    {
      label: 'מדידות',
      svgIcon: 'measurements',
      path: 'measurements',
    },
    {
      label: 'תכנון',
      svgIcon: 'planing',
      path: 'planing',
    },
  ];

  private transactionsLobby: CardLobby[] = [
    {
      label: 'פרוטוקולים',
      svgIcon: 'protocols',
      path: 'protocols',
    },
    {
      label: 'תיקים',
      svgIcon: 'portfolio',
      path: 'cases/results',
    },
  ];

  private estatesLobby: CardLobby[] = [
    {
      label: 'דפי נכס',
      svgIcon: 'estate',
      path: 'estate/results',
    },
    {
      label: 'רשימת עו"ד',
      svgIcon: 'trail',
      path: 'lawyer',
    },
    {
      label: 'דוחות',
      svgIcon: 'reports',
      path: 'reports',
    },
  ];

  private lobbyMap: { [key: string]: CardLobby[] } = {
    lands: this.landsLobby,
    transactions: this.transactionsLobby,
    estates: this.estatesLobby
  };

  constructor() {
    this.legal$ = new BehaviorSubject<boolean>(false);
  }

  public getLobbyCards(lobby: string = 'lands'): CardLobby[] {
    return this.lobbyMap[lobby] ? this.lobbyMap[lobby] : this.lobbyMap['lands'];
  }

  private setMenusCards(menu: MenuItem[], cards: CardLobby[]) {
    cards.forEach((card: CardLobby) => {
      const item = {
        ...card,
      } as MenuItem;
      menu.push(item);
    });

    return menu;
  }

  public getMenuItems(menu: MenuItem[] = []): MenuItem[] {
    return this.setMenusCards(menu, this.getLobbyCards());
  }
}
