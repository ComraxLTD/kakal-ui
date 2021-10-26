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
  @Input() public width: number;
  @Input() public moduleTitle: string;
  @Input() public cards: CardDashboardModel[];
  
  public md$: Observable<boolean>;
  public cols: number;

  @Output() cardClick: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private breakpointService: BreakpointService,
  ) { }

  ngOnInit(): void {
    this.md$ = this.breakpointService.isTablet();
    this.setCols()
  }

  private setCols() {
    this.cols =  (this.cards.length)  <= 3 ? this.cards.length : (this.cards.length / 2)
  }

  public onCardClick(card) {
    if (this.prefix) {
      const path: string = `${this.prefix}/${card.path}`;
      this.cardClick.emit(path)
    }
  }
}
