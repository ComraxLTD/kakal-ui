import { Component, OnInit } from '@angular/core';
import { CardStepModel, CardInfoModel } from '../../../../../../../../../kakal-ui/src/public-api';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  // cards

  cards1: CardInfoModel[] = [
    {
      svgIcon: 'house',
      label: 'בקתות 2',
      subLabel: 'לנים 36',
    },
    {
      svgIcon: 'people',
      label: 'אוהלים 4',
      subLabel: 'לנים 144',
    },
    {
      svgIcon: 'plant',
      label: 'גיחה 1',
      subLabel: 'לנים 120',
    },
    {
      svgIcon: 'tree',
      label: 'גיחה 1',
      subLabel: 'לנים 60',
    },
  ];

  cards2: CardInfoModel[] = [
    {
      svgIcon: 'bed',
      label: 'מטבח שדה',
      subLabel: 'לנים 36',
    },
    {
      svgIcon: 'house',
      label: 'מוזיאון',
      subLabel: 'עד 40 משתתפים',
    },
    {
      svgIcon: 'teacher',
      label: 'כיתה',
      subLabel: 'עד 20 משתתפים',
    },
    {
      svgIcon: 'ball',
      label: 'מגרש ספורט',
    },
    {
      svgIcon: 'plant',
      label: 'סיור במשתלה',
    },
    {
      svgIcon: 'school',
      label: 'מרכז למידה',
      subLabel: 'עד 40 משתתפים',
    },
    {
      svgIcon: 'mountain',
      label: 'תחנות הפעלה',
      subLabel: 'עד 40 משתתפים',
    },
    {
      svgIcon: 'star',
      label: 'בתי כנסת',
    },
  ];

  // steps

  activeStepIndex: number = 0;
  activeCard!: CardStepModel;
  steps$!: Observable<CardStepModel[]>;

  firstSteps$: BehaviorSubject<CardStepModel[]> = new BehaviorSubject([
    { isActive: true, label: '15.07.12', path: 'יום ראשון' } as CardStepModel,
    { isActive: false, label: '16.07.12', path: 'יום שני' } as CardStepModel,
    { isActive: false, label: '17.07.12', path: 'יום שלישי' } as CardStepModel,
    { isActive: false, label: '18.07.12', path: 'יום רביעי' } as CardStepModel,
    { isActive: false, label: '19.07.12', path: 'יום חמישי' } as CardStepModel,
  ]);

  onChangeStep(stepDetails: { step: CardStepModel; index: number }): void {
    this.activeStepIndex = stepDetails.index;

    const newSteps: CardStepModel[] = this.firstSteps$.value.map(
      (step, index) => {
        if (index === stepDetails.index) {
          this.activeCard = step;
          return { ...step, isActive: true } as CardStepModel;
        } else {
          return { ...step, isActive: false } as CardStepModel;
        }
      }
    );
    console.log('as');

    this.firstSteps$.next(newSteps);
  }

  constructor() {}

  ngOnInit(): void {
    console.log('search component');
    this.activeCard =
      this.firstSteps$.value.find((value) => value.isActive) ||
      ({ label: 's', path: 'a' } as CardStepModel);
    this.steps$ = this.firstSteps$.asObservable();
  }
  onCardClick(card:CardInfoModel):void{
    console.log(card);
    
  }
}
