import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { CardLobbyModel } from '../../cards/card-lobby/card-lobby.component';
import { map, Observable } from 'rxjs';

interface LobbyGrid {
  cols: number;
  rows: number;
  size: number;
}

@Component({
  selector: 'kkl-lobby-grid',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  @Input() cols: number;
  @Input() rows: number;
  @Input() moduleTitle: string;
  @Input() cards: CardLobbyModel[];

  ui$: Observable<LobbyGrid>;

  md$: Observable<{ value: boolean }>;

  @Output() cardClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.ui$ = this.mapIsMobile();
  }

  private setRows(mobile: boolean): number {
    return mobile ? Math.ceil(this.cards.length / 2) : this.rows || 2;
  }
  private setCols(): number {
    return Math.min(this.cols, Math.floor(window.innerWidth / 100));
  }

  mapIsMobile(): Observable<LobbyGrid> {
    return this.breakpointService.isMobile().pipe(
      map((mobile) => {
        return {
          cols: this.setCols(),
          rows: this.setRows(mobile),
          size: mobile ? 16 : 18,
        };
      })
    );
  }

  onCardClick(card) {
    this.cardClick.emit(card.path);
  }
}
