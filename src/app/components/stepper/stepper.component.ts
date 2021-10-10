import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
} from '@angular/core';
import { StepModel, StepperDirection } from '../step/step.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  @Input() steps: StepModel[];

  @Input() steps$: Observable<StepModel[]>;

  @Input() direction: StepperDirection;
  @Input() stepRef: ElementRef;

  @Output() changStep = new EventEmitter<StepModel>();

  constructor() {
    
  }

  ngOnInit() {
  }

  public onStepChange(step: StepModel) {
    this.changStep.emit(step);
  }
}
