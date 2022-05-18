import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { CardStep } from '../cards/card-step/card-step.component';
import { StepsSelectionEvent } from '../groups/step-group/step-group.component';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'kkl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() template: TemplateRef<any>;

  private stepsSelectionSource$: BehaviorSubject<StepsSelectionEvent> =
    new BehaviorSubject(null);

  stepsSelection$: Observable<StepsSelectionEvent>;

  @Input() set stepsSelectionEvent(value: StepsSelectionEvent) {
    this.stepsSelectionSource$.next(value);
  }

  @Output() stepSelection = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {
    this.stepsSelection$ = this.stepsSelectionSource$.asObservable();
  }

  private setStepsSelectionEvent(index: number) {
    const { source } = this.stepsSelectionSource$.getValue();

    const event: StepsSelectionEvent = {
      selectedStep: source[index],
      selectedIndex: index,
      last: index === source.length - 1,
      first: index === 0,
      source: source,
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
    this.stepSelection.emit(event);
  }

  onNext(selectedIndex: number) {
    const { source } = this.stepsSelectionSource$.getValue();
    const nextIndex = ++selectedIndex;

    if (nextIndex > source.length) {
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

  onStepSelect(step: number) {
    this.dispatchSelectionState(step);
  }
}
