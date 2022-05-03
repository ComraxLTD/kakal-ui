import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { CardLobbyModel } from '../../cards/card-lobby/card-lobby.component';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'kkl-lobby-grid',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss'],
})
export class LobbyComponent implements OnInit {
  @Input() public cols: number;
  @Input() public rows: number;
  @Input() public moduleTitle: string;
  @Input() public cards: CardLobbyModel[];

  public md$: Observable<{value:boolean}>;

  @Output() cardClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.cols = Math.min(this.cols, Math.floor(window.innerWidth/180));
    this.rows = this.rows || 2;
    this.md$ = this.mapIsMobile();
  }

  mapIsMobile() {
    return this.breakpointService.isMobile().pipe(
      map(val => { return { value: val } }),
    );
  }

  public onCardClick(card) {
    this.cardClick.emit(card.path);
  }
}
