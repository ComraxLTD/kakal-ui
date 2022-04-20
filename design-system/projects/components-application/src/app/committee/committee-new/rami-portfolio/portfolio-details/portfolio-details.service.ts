import { Injectable } from '@angular/core';
import { SelectOption, Question } from '../../../../../../../kakal-ui/src/public-api';

export interface PortfolioDetails {
  portfolioId: string;
  division: SelectOption;
  region: SelectOption;
  reginalCouncil: SelectOption;
  action: SelectOption;
  target: SelectOption;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDetailsService {
  private questions: Question[] = [
    {
      key: 'portfolioId',
      label: 'מספר תיק',
    },
    {
      key: 'division',
      label: 'אגף',
      controlType: 'select',
    },
    {
      key: 'region',
      label: 'יישוב',
      controlType: 'select',
    },
    {
      key: 'reginalCouncil',
      label: 'מועצה אזורית',
    },
    {
      key: 'action',
      label: 'סוג הקצאה',
      controlType: 'select',
    },
    {
      key: 'target',
      label: 'מטרה',
      controlType: 'select',
    },
  ];

  constructor() {}

  public getFormQuestions() {
    return [...this.questions];
  }
}
