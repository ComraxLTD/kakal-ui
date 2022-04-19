import { Injectable } from '@angular/core';
import { Question } from '../../../../../../../kakal-ui/src/public-api';

export interface PortfolioEstates {
  owner: string;
  region: string;
  division: string;
  filed: string;
  tabaNum: number;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioEstatesService {
  private questions: Question[] = [
    {
      key: 'owner',
      label: 'מספר תיק',
      controlType: 'select',
    },
    {
      key: 'region',
      label: 'גוש',
    },
    {
      key: 'division',
      label: 'חלקה',
    },
    {
      key: 'filed',
      label: 'מגרש',
    },
    {
      key: 'tabaNum',
      label: 'מספר תב"ע',
    },
  ];

  constructor() {}

  public getFormQuestions() {
    return [...this.questions];
  }
}
