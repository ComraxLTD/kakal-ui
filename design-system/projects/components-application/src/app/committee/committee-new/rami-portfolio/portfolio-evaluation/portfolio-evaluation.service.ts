import { Injectable } from '@angular/core';
import { Question } from '../../../../../../../kakal-ui/src/public-api';

export interface PortfolioEvaluations {
  collecting: string;
  evaluation: number;
  accountNumber: number;
  discountRegin: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioEvaluationsService {
  private questions: Question[] = [
    {
      key: 'collecting',
      label: 'סמך גבייה',
    },
    {
      key: 'evaluation',
      label: 'ערף כספי',
      controlType: 'sum',
      icon : '₪'

    },
    {
      key: 'accountNumber',
      label: 'מספר חשבון',
    },
    {
      key: 'discountRegin',
      label: 'איזור הנחה',
      disabled  :true
    },
  ];

  constructor() {}

  public getFormQuestions() {
    return [...this.questions];
  }
}
