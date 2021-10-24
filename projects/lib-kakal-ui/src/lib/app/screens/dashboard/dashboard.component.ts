import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CardDashboardModel } from '../../components/cards/card-dashboard/card-dashboard.model';
import { BreakpointService } from '../../utilities/services/breakpoint.service';

@Component({
  selector: 'kkl-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() public prefix: string;
  @Input() public cols: number;
  @Input() public rows: number;
  @Input() public moduleTitle: string;
  @Input() public cards: CardDashboardModel[];

  public md$: Observable<boolean>;

  @Output() cardClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    this.md$ = this.breakpointService.isTablet();
    this.cols = this.cols ||  this.cards.length /2
    this.rows = this.rows || 2
  }

  public onCardClick(card) {
    this.cardClick.emit(card.path)
  }
}
