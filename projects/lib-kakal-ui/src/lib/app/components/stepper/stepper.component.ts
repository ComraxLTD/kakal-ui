import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CardStepModel } from '../cards/card-step/card-step.model';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {

  @Input() steps: CardStepModel[];

  @Input() steps$: Observable<CardStepModel[]>;

  @Input() direction: string;
  @Input() stepRef: ElementRef;

  @Output() changStep = new EventEmitter<CardStepModel>();

  constructor() { }

  public onStepChange(step: CardStepModel) {
    this.changStep.emit(step);
  }
}
