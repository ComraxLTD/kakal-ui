import { Injectable } from '@angular/core';
import { SelectOption, Question } from '../../../../../../kakal-ui/src/public-api';

export interface CommitteeDetails {

  committeeId : string
  date : Date
  observerName : SelectOption
  region : SelectOption
  uploadDaySchedule : File
  uploadCommitteeProtocol : File
}

@Injectable({
  providedIn: 'root',
})
export class CommitteeDetailsService {
  private questions: Question[] = [
    {
      key: 'committeeId',
      label: 'מס סידורי',
      controlType : 'toggle'
    },
    {
      key: 'date',
      label: 'תאריך ישיבה',
      controlType: 'date',
    },
    {
      key: 'observerName',
      label: 'שם משקיף',
      controlType: 'select',
    },
    {
      key: 'region',
      label: 'מרחב',
      controlType: 'select',
    },
    {
      key: 'uploadDaySchedule',
      label: 'לחץ להעלאת קובץ סדר יום',
      controlType: 'upload',
    },
    {
      key: 'uploadCommitteeProtocol',
      label: 'לחץ להעלאת קובץ פרוטוקל וועידה',
      controlType: 'upload',
    },
  ];

  constructor() {}

  public getFormQuestions() {
    return [...this.questions];
  }
}
