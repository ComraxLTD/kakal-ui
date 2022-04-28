import { Component, Inject, OnInit } from '@angular/core';
import { CardLobby, RouterService, ROOT_PREFIX, MODULE_PREFIX } from '../../../../../kakal-ui/src/public-api';

import { LobbyService } from './lobby.service';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LandsLobbyComponent implements OnInit {
  cards!: CardLobby[];
  cols!: number;

  constructor(
    private lobbyService: LobbyService,
    private routerService: RouterService,
    @Inject(ROOT_PREFIX) public rootPrefix: string,
    @Inject(MODULE_PREFIX) public modulePrefix: string
  ) {}

  ngOnInit(): void {
    this.cards = this.lobbyService.getLobbyCards(this.modulePrefix);
    this.cols = this.setCols();
  }

  private setCols() {
    const colsMap: { [key: string]: number } = { transactions: 2, estates: 3 };
    return colsMap[this.modulePrefix];
  }

  onCardClick(path: string) {

    const rootPath = `${this.rootPrefix}/${path}`;
    const modulePath = `${this.rootPrefix}/${this.modulePrefix}/${path}`;

    const url = this.rootPrefix === this.modulePrefix ? rootPath : modulePath;

    this.routerService.navigate('estates');
  }
}
