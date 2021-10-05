import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointService } from 'src/app/utilities/services/breakpoint.service';
import { CardDashboardModel } from './card-dashboard.model';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {

  
  @Input() card: CardDashboardModel;
  @Output() onClick = new EventEmitter<CardDashboardModel>();

  private subscription: Subscription;
  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.subscribeToTablet();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onCardClick() {
    this.onClick.emit(this.card);
  }

  private subscribeToTablet() {
    this.subscription = this.breakpointService
      .isTablet()
      .subscribe((table: boolean) => {
        this.card.size = table ? 6 : 8;
      });
  }
}
