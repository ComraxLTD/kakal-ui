import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CardInfoModel,
  CardStep,
} from '../../../../../../../kakal-ui/src/public-api';

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
  activeCard!: CardStep;
  steps$!: Observable<CardStep[]>;

  firstSteps$: CardStep[] = [
    { label: '15.07.12', path: 'יום ראשון' } as CardStep,
    { label: '16.07.12', path: 'יום שני' } as CardStep,
    { label: '17.07.12', path: 'יום שלישי' } as CardStep,
    { label: '18.07.12', path: 'יום רביעי' } as CardStep,
    { label: '19.07.12', path: 'יום חמישי' } as CardStep,
  ];

  onChangeStep(stepDetails: { step: CardStep; index: number }): void {
    // this.activeStepIndex = stepDetails.index;
    // const newSteps: CardStep[] = this.firstSteps$.value.map(
    //   (step, index) => {
    //     if (index === stepDetails.index) {
    //       this.activeCard = step;
    //       return { ...step, isActive: true } as CardStep;
    //     } else {
    //       return { ...step, isActive: false } as CardStep;
    //     }
    //   }
    // );
    // console.log('as');
    // this.firstSteps$.next(newSteps);
  }

  constructor() {}

  ngOnInit(): void {
    //   console.log('search component');
    //   this.activeCard =
    //     this.firstSteps$.value.find((value) => value.isActive) ||
    //     ({ label: 's', path: 'a' } as CardStep);
    //   this.steps$ = this.firstSteps$.asObservable();
  }
  onCardClick(card: CardInfoModel): void {
    console.log(card);
  }
}
