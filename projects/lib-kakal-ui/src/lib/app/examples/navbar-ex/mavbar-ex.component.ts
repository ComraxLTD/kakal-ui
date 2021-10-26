import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CardStepModel, StepperDirection } from '../../components/cards/card-step/card-step.model';

@Component({
  selector: 'app-navbar-ex',
  templateUrl: './navbar-ex.component.html',
  styleUrls: ['./navbar-ex.component.scss'],
})
export class NavbarExComponent {
  constructor() {}

  @Input() public status: CardStepModel[];
  @Input() public direction: StepperDirection;
  @Input() public stepWidth: number;

public steps$ : Observable<CardStepModel[]>
  ngOnInit() {
    this.steps$ = of(this.status)
  }
}
