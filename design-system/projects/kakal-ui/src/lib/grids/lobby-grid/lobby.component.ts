import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { CardLobby } from '../../cards/card-lobby/card-lobby.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-lobby-grid',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  @Input() public cols: number;
  @Input() public rows: number;
  @Input() public moduleTitle: string;
  @Input() public cards: CardLobby[];

  public md$: Observable<boolean>;

  @Output() cardClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.md$ = this.breakpointService.isMobile();
    this.cols = this.cols || this.cards.length / 2;
    this.rows = this.rows || 2;
  }

  public onCardClick(card) {
    this.cardClick.emit(card.path);
  }
}
