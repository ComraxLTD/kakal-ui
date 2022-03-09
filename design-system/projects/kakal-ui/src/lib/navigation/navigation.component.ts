import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  TemplateRef,
} from '@angular/core';
import { CardStatusModel } from '../cards/card-status/card-status.model';
import { CardStepModel } from '../cards/card-step/card-step.model';
import { Observable, BehaviorSubject, map, switchMap } from 'rxjs';

@Component({
  selector: 'kkl-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Input() public steps$: Observable<CardStatusModel[]>;
  @Input() public activeStepIndex: number;

  @Input() slots: { content:TemplateRef<any>; step: TemplateRef<any> };

  public currentIndexSubject: BehaviorSubject<number>;
  public stepMap$: Observable<{ [key: string]: CardStepModel }>;
  public activeStep$: Observable<{ value: number }>;
  public end$: Observable<boolean>;

  @Output() changeStep: EventEmitter<{step:CardStepModel,index:number}> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.currentIndexSubject = new BehaviorSubject(this.activeStepIndex || 0);
    this.activeStep$ = this.setActiveStep$();
    this.stepMap$ = this.setStepsMap();
    this.end$ = this.setEnd$();
  }

  private setActiveStep$(): Observable<{ value: number }> {
    return this.steps$.pipe(
      map((steps) => steps.findIndex((step: CardStepModel) => step.isActive)),
      map((index: number) => {
        return {
          value: index,
        };
      })
    );
  }

  private setStepsMap() {
    return this.steps$.pipe(
      map((steps: CardStatusModel[]) => {
        const map = steps.reduce((acc, step) => {
          return {
            ...acc,
            [steps.indexOf(step)]: step,
          };
        }, {});

        return map;
      })
    );
  }

  private setEnd$(): Observable<boolean> {
    return this.steps$.pipe(
      switchMap((steps: CardStepModel[]) => {
        return this.currentIndexSubject.asObservable().pipe(
          map((current: number) => {
            return current === steps.length - 1;
          })
        );
      })
    );
  }

  public onNext(index: number, step: CardStepModel) {
    this.currentIndexSubject.next(index + 1);
    this.changeStep.emit({step:step,index:(index+1)});
  }
  public onPrev(index: number, step: CardStepModel) {
    this.currentIndexSubject.next(index - 1);
    this.changeStep.emit({step:step,index:(index-1)});
  }
}
