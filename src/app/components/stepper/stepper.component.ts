import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { StepModel } from '../step/step.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {

  @Input() steps: StepModel[];

  @Input() steps$: Observable<StepModel[]>;

  @Input() direction: string;
  @Input() double: number;
  @Input() stepRef: ElementRef;

  @Output() changStep = new EventEmitter<StepModel>();

  constructor() { }

  public onStepChange(step: StepModel) {
    this.changStep.emit(step);
  }
}
