import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CardLobbyModel } from './card-lobby.model';
import { Subscription } from 'rxjs';
import { BreakpointService } from '../../../services/breakpoint.service';

@Component({
  selector: 'kkl-card-lobby',
  templateUrl: './card-lobby.component.html',
  styleUrls: ['./card-lobby.component.scss'],
})
export class CardDashboardComponent implements OnInit, OnDestroy {

  @Input() card: CardLobbyModel;
  @Output() click = new EventEmitter<CardLobbyModel>();

  private subscription: Subscription;
  constructor(private breakpointService: BreakpointService) {}

  ngOnInit(): void {
    this.subscribeToMobile();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onCardClick() {
  }

  private subscribeToMobile() {
    this.subscription = this.breakpointService
      .isMobile()
      .subscribe((md: boolean) => {
        this.card.size = md ? 4 : 5.5;
      });
  }
}
