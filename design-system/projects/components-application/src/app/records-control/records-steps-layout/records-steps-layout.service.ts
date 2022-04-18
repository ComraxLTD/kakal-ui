import { Injectable } from '@angular/core';
import { CardStepModel, ButtonModel, FormActions } from '../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class RecordStepsLayoutService {
  private steps: CardStepModel[] = [
    {
      label: 'פרטי התיק',
      svgIcon: 'case_details',
      path: 'case',
    },
    {
      label: 'תשלומים',
      svgIcon: 'payments',
      path: 'payments',
    },
    {
      label: 'רישום לרשויות',
      svgIcon: 'register',
      path: 'register',
    },
  ];

  private actions: ButtonModel[] = [
    { label: 'מסמכי תיק', type: 'file', action: FormActions.VALUE_CHANGED },
  ];

  constructor() {}

  getSteps(): CardStepModel[] {
    return [...this.steps];
  }

  getActions(): ButtonModel[] {
    return [...this.actions];
  }
}
