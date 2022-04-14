import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StatusBars, Question, DisplayData } from '../../../../../kakal-ui/src/public-api';

export interface RecordCateDetails {
  signDate: Date;
  lawyer: string;
  phone: string;
  email: string;
  signStatus: StatusBars | null;
}

@Injectable({
  providedIn: 'root',
})
export class RecordCaseDetailsService {
  private recordDetailsQuestions: Question[] = [
    { key: 'signDate', format: { type: 'date' }, label: 'ת.חתימה' },
    { key: 'lawyer', label: 'שם עו"ד בא כוחו' },
    { key: 'phone', label: 'מספר טלפון' },
    { key: 'email', label: 'מייל' },
    { key: 'signStatus', label: 'חיתום דגיטלי' },
  ];

  constructor() {}

  // imitate server response
  getRecordCaseDetailsInfo() {
    const caseEstateDetails: RecordCateDetails = {
      signDate: new Date(),
      lawyer: 'דוד שלם',
      phone: '043-4389465',
      email: 'sds@ewew.com',
      signStatus: null,
    };

    return of(caseEstateDetails);
  }

  getInfoRecordTemplate(): DisplayData<RecordCateDetails>[] {
    const template = [...this.recordDetailsQuestions].map((q: Question) => {
      return {
        key: q.key,
        label: q.label,
        format: q.format,
      } as DisplayData<RecordCateDetails>;
    });

    return template;
  }

}
