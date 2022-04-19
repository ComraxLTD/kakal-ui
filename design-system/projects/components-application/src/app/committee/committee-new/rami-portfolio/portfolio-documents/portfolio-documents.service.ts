import { Injectable } from '@angular/core';
import { Question } from '../../../../../../../kakal-ui/src/public-api';

export interface PortfolioDocs {
  summery: File;
  blueprint: File;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDocsService {
  private questions: Question[] = [
    {
      key: 'summery',
      label: 'טופס סיכום עסקה',
      controlType: 'upload',
    },
    {
      key: 'blueprint',
      label: 'תשריט',
      controlType: 'upload',
    },
  ];

  constructor() {}

  public getFormQuestions() {
    return [...this.questions];
  }
}
