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
    this.cols = Math.min(this.cols, Math.floor(window.innerWidth / 180));
    console.log(this.cols);
    this.rows = this.rows || 2;
    this.ui$ = this.mapIsMobile();
  }

  mapIsMobile(): Observable<LobbyGrid> {
    return this.breakpointService.isMobile().pipe(
      map((mobile) => {
        return {
          cols: this.cols,
          rows: mobile ? Math.ceil(this.cards.length / 2) : this.rows,
          size: mobile ? 16 : 18,
        };
      })
    );
  }

  onCardClick(card) {
    this.cardClick.emit(card.path);
  }
}
