import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';

export interface CardStep {
  label: string;
  path: string;
  svgIcon: string;
  value?: number;
  selected?: boolean;
  disabled?: boolean;
  hasSteps?: boolean;
}

export interface StepsSelectionEvent {
  /** Index of the step selected. */
  selectedIndex: number;

  /** Index of the step previously selected. */
  previouslySelectedIndex?: number;

  /** The step instance now selected. */
  selectedStep: CardStep;

  /** The step instance previously selected. */
  previouslySelectedStep?: CardStep;

  /** If this step is the last */
  last: boolean;

  /** If this step is the first */
  first: boolean;

  source?: CardStep[];
}
@Component({
  selector: 'kkl-circle-group',
  templateUrl: './circle-steps.component.html',
  styleUrls: ['./circle-steps.component.scss']
})
export class CircleStepsComponent implements OnInit {
  @Input() steps!: CardStep[];

  _selectIndex: number = 0;

  event!: StepsSelectionEvent;

  @Input() set selectedIndex(value: number) {
    this._selectIndex = value;
    this.event = this.setEvent(this._selectIndex);
  }

  @Input() templates: { [key: string]: TemplateRef<any> } = {};

  private previouslySelectedIndex!: number;

  constructor() {}

  @Output() selectStep: EventEmitter<StepsSelectionEvent> = new EventEmitter();

  ngOnInit(): void {
    console.log(this._selectIndex);
    console.log(this.steps);
    console.log(this.templates);

    
  }

  private setEvent(index: number) {

    const event = {
      selectedIndex: index,
      selectedStep: this.steps[index],

      previouslySelectedIndex: Number.isInteger(this.previouslySelectedIndex)
        ? this.previouslySelectedIndex !== index
          ? this.previouslySelectedIndex
          : this.event.previouslySelectedIndex
        : null,

      previouslySelectedStep: Number.isInteger(this.previouslySelectedIndex)
        ? this.previouslySelectedIndex !== index
          ? this.steps[this.previouslySelectedIndex]
          : this.event.previouslySelectedStep
        : null,

      last: index === this.steps.length - 1,

      first: index === 0,
    } as StepsSelectionEvent;

    this.previouslySelectedIndex = index;

    return event;
  }

  onSelectStep(index: number) {
    this.event = this.setEvent(index);
    this.previouslySelectedIndex = index;
    this._emitSelectStep();
  }

  private _emitSelectStep() {
    this.selectStep.emit(this.event);
  }
}
