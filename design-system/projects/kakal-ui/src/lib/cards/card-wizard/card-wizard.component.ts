import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStep } from '../card-step/card-step.model';
import { CardType } from '../card.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'kkl-card-wizard',
  templateUrl: './card-wizard.component.html',
  styleUrls: ['./card-wizard.component.scss'],
})
export class CardWizardComponent implements OnInit {
  @Input() public step: CardStep;

  public type: CardType;

  @Output() changeStep: EventEmitter<CardStep> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // this.type = this.step.type;
  }

  public onStepClick(): void {
    if (!this.step.selected) {
      this.changeStep.emit(this.step);
    }
  }
}
