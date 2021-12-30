import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  CardStepModel,
  StepperDirection,
} from '../../components/cards/card-step/card-step.model';
import { NavbarService } from '../../components/navbar/navbar.service';

@Component({
  selector: 'app-navbar-ex',
  templateUrl: './navbar-ex.component.html',
  styleUrls: ['./navbar-ex.component.scss'],
})
export class NavbarExComponent {

  private headers = { lands: 'מקרקעין', neches: 'מנהלת ספר נכסים' };

  constructor(private navbarService: NavbarService) {}

  @Input() public status: CardStepModel[];
  @Input() public direction: StepperDirection;
  @Input() public stepWidth: number;

  public steps$: Observable<CardStepModel[]>;
  ngOnInit() {
    this.steps$ = of(this.status);
    this.navbarService.setHeaders(this.headers);
    this.navbarService.setHeadersObs(of('lands'));
  }
}
