import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { map, Observable } from 'rxjs';

export interface CardLobbyModel {
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

  public card$: Observable<CardLobbyModel>;

  @Output() click = new EventEmitter<CardLobbyModel>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.card$ = this.setSizeInMobile$();
  }
  public onCardClick() {}

  private setSizeInMobile$(): Observable<CardLobbyModel> {
    return this.breakpointService.isMobile().pipe(
      map((md: boolean) => {
        const card = { ...this.card };
        return {
          ...card,
          size: md ? 4 : card.size || 5.5,
        } as CardLobbyModel;
      })
    );
  }
}
