import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { ListItem } from '../list-item/list-item.model';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'kkl-stepper-mobile',
  templateUrl: './stepper-mobile.component.html',
  styleUrls: ['./stepper-mobile.component.scss'],
})
export class StepperMobileComponent implements OnInit {
  @Input() selectedStepIndex: number;
  @Input() steps$: Observable<CardStepModel[]>;

  end: number;
  index: number = 0;
  mapStep: any;
  stepMap$: Observable<{ [key: string]: CardStepModel }>;
  selectedStep$: Observable<ListItem<number>>;
  end$: Observable<boolean>;
  width$: Observable<number>;

  @Output() selectStep = new EventEmitter<CardStepModel>();

  constructor() {}

  ngOnInit(): void {
    this.selectedStep$ = this.setSelectedStep$();
    this.stepMap$ = this.setStepsMap();

    this.steps$.subscribe((steps: CardStepModel[]) => {
      this.mapStep = steps.map((s : CardStepModel) => {
        return s;
      });
    });
    this.end = this.mapStep.length - 1;
  }

  private setSelectedStep$(): Observable<ListItem<number>> {
    return this.steps$.pipe(
      map(
        (steps: CardStepModel[]) =>
          steps.findIndex((step: CardStepModel) => step.selected) as number
      ),
      map((index: number) => {
        const item: ListItem<number> = {
          value: index,
        };
        return item;
      })
    );
  }

  private setStepsMap() {
    return this.steps$.pipe(
      map((steps: CardStepModel[]) => {
        const map = steps.reduce((acc, step) => {
          return {
            ...acc,
            [steps.indexOf(step)]: step,
          };
        }, {} as { [key: string]: CardStepModel });
        return map;
      })
    );
  }

  public onNext(step: CardStepModel) {
    this.mapStep.map((s, i) => {
      if (s.path === step['path']) this.index = i + 1;
    });
    this.selectStep.emit(this.mapStep[this.index]);
  }

  public onPrev(step: CardStepModel) {
    this.mapStep.map((s, i) => {
      if (s.path === step['path']) this.index = i - 1;
    });
    this.selectStep.emit(this.mapStep[this.index]);
  }

  public selectStepper(step: any) {
    this.selectStep.emit(step.value);
  }
}
