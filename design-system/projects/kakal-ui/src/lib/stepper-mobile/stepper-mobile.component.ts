import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { StepsSelectionEvent } from '../stepper/stepper.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kkl-stepper-mobile',
  templateUrl: './stepper-mobile.component.html',
  styleUrls: ['./stepper-mobile.component.scss'],
})
export class StepperMobileComponent implements OnInit {
  @Input() steps: CardStepModel[];

  private stepsSelectionSource$: BehaviorSubject<StepsSelectionEvent> =
    new BehaviorSubject(null);
  stepsSelection$: Observable<StepsSelectionEvent>;

  @Input() set stepsSelectionEvent(value: StepsSelectionEvent) {
    this.stepsSelectionSource$.next(value);
  }

  @Output() selectStep = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {
    this.stepsSelection$ = this.stepsSelectionSource$.asObservable();
  }

  private setStepsSelectionEvent(index: number) {
    const event: StepsSelectionEvent = {
      selectedStep: this.steps[index],
      selectedIndex: index,
      last: index === this.steps.length - 1,
      first: index === 0,
      source: this.steps,
    };
    return event;
  }

  private dispatchSelectionState(index: number) {
    const event = this.setStepsSelectionEvent(index);
    this.stepsSelectionSource$.next(event);
    this._emitChangeEvent();
  }

  private _emitChangeEvent() {
    const event = this.stepsSelectionSource$.getValue();
    this.selectStep.emit(event);
  }

  onNext(selectedIndex: number) {
    const nextIndex = ++selectedIndex;

    if (nextIndex > this.steps.length) {
      return;
    }
    this.dispatchSelectionState(nextIndex);
  }

  onPrevious(selectedIndex: number) {
    const nextIndex = --selectedIndex;

    if (nextIndex < 0) {
      return;
    }

    this.dispatchSelectionState(nextIndex);
  }

  onStepSelect(step: any) {
    this._emitChangeEvent();
  }
}
