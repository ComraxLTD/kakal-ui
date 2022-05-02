import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BreakpointService } from '../../../services/breakpoint.service';
import { CardLobbyModel } from '../../cards/card-lobby/card-lobby.component';
import { map, Observable, tap } from 'rxjs';

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

  constructor(private breakpointService: BreakpointService) { }

  desktopCols:number;

  ngOnInit(): void {
    this.cols = this.cols || this.cards.length / 2;
    this.rows = this.rows || 2;
    this.desktopCols = this.cols;
    this.md$ = this.mapIsMobile();
  }

  mapIsMobile() {
    return this.breakpointService.isMobile().pipe(
      map(val => { return { value: val } }),
      tap(obs => {
        if(obs.value && this.cols > 2) this.cols = 2;
        else this.cols = this.desktopCols;        
      })
    );
  }

  public onCardClick(card) {
    this.cardClick.emit(card.path);
  }
}
