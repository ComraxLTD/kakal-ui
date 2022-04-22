import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { map, Observable } from 'rxjs';
import { IconService } from '../../icon/icons.service';

export interface CardLobbyModel {
  label: string;
  path: string;
  svgIcon: string;
}

interface CardLobby {
  label: string;
  path: string;
  svgIcon: string;
  size?: number;
}

@Component({
  selector: 'kkl-card-lobby',
  templateUrl: './card-lobby.component.html',
  styleUrls: ['./card-lobby.component.scss'],
})
export class CardLobbyComponent implements OnInit {
  @Input() card: CardLobbyModel;

  card$: Observable<CardLobbyModel>;

  constructor(
    private iconService: IconService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.card$ = this.setSizeInMobile$();
    this.iconService.setIcon(this.card.svgIcon);
  }

  private setSizeInMobile$(): Observable<CardLobby> {
    return this.breakpointService.isMobile().pipe(
      map((md: boolean) => {
        const card: CardLobby = { ...this.card };
        return {
          ...card,
          size: md ? 4 : card.size || 5.5,
        } as CardLobby;
      })
    );
  }
}
