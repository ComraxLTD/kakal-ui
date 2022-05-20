import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { StepsSelectionEvent } from '../groups/step-group/step-group.component';

@Component({
  selector: 'kkl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() stepsSelectionEvent: StepsSelectionEvent;
  @Input() contentTemplate: TemplateRef<any>;
  @Input() stepTemplate: TemplateRef<any>;

  private _stepsSelectionEvent: StepsSelectionEvent;

  @Output() stepSelection = new EventEmitter<StepsSelectionEvent>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.stepsSelectionEvent);
  }

  private setStepsSelectionEvent(index: number) {
    const { source } = this.stepsSelectionEvent;

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
    this._stepsSelectionEvent = this.setStepsSelectionEvent(index);
    this._emitChangeEvent();
  }

  private _emitChangeEvent() {
    this.stepSelection.emit(this._stepsSelectionEvent);
  }

  onNext(selectedIndex: number) {
    const { source } = this.stepsSelectionEvent;
    const nextIndex = ++selectedIndex;

    if (nextIndex > source.length) return;

    this.dispatchSelectionState(nextIndex);
  }

  onPrevious(selectedIndex: number) {
    const nextIndex = --selectedIndex;

    if (nextIndex < 0) return;

    this.dispatchSelectionState(nextIndex);
  }

  onSelectStep(selectedIndex: number) {
    this.dispatchSelectionState(selectedIndex);
  }
}
