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

  ngOnInit(): void {
    this.md$ = this.mapIsMobile();
    this.cols = this.cols || this.cards.length / 2;
    this.rows = this.rows || 2;
    
  }

  mapIsMobile() {
    return this.breakpointService.isMobile().pipe(
      map(val => { return { value: val } }),
      tap(val => {
        if(val) this.cols = 2; 
      })
    );
  }

  public onCardClick(card) {
    this.cardClick.emit(card.path);
  }
}
