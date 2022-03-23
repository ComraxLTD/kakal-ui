import { Component, Input, OnInit } from '@angular/core';
import { NavbarService } from '../../navbar/navbar.service';
import { CardStatusModel } from './card-status.model';

@Component({
  selector: 'kkl-card-status',
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.scss'],
})
export class CardStatusComponent implements OnInit {
  @Input() public status: CardStatusModel;

  constructor(private navbarService: NavbarService) {}

  ngOnInit(): void {}

  // method to fire option value when select
  public onStatusCLick(): void {
    this.navbarService.emitSelectStatus(this.status);
  }
}
