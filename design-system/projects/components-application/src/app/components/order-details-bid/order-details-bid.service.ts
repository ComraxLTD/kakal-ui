import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import {
  Question,
  ValidationService,
  FormService,
  QuestionUploadModel,
} from '../../../../../kakal-ui/src/public-api';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsBidService {
  private questions: Question[] = [
    {
      key: 'finalDate',
      controlType: 'date',
      label: 'תאריך אחרון להגשת הצעה',
      icon: 'calendar',
      validations: [Validators.required],
    },
    {
      key: 'orderPhoneNum',
      label: 'מספר טלפון ליצירת קשר',
      icon: 'phone',
      validations: [ValidationService.regex('phone'), Validators.required],
      controlType: 'phone',
      cleave: { blocks: [3, 3, 4], delimiter: '-' },
    },

    {
      key: 'orderEmailAddress',
      controlType: 'email',
      label: 'כתובת מייל לבירורים נוספים',
      // onOptionSelect: (value) => this.updateControlValue(value),
      icon: 'email',
      validations: [ValidationService.regex('email'), Validators.required],
    },

    {
      key: 'replyEmailAddress',
      controlType: 'email',
      label: 'כתובת מייל להחזרת ההצעה',
      icon: 'email',
      validations: [ValidationService.regex('email'), Validators.required],
    },
    {
      key: 'upload',
      controlType: 'upload',
      label: 'לחץ להעלאת קובץ',
      multi: true,
      validations: [Validators.required],
    },
    {
      key: 'supplierContent',
      controlType: 'texteditor',
    },
    {
      key: 'priceGroup',
      controlType: 'checkboxGroup',
      options: [
        {
          value: false,
          label: 'מחיר לפריט בודד',
        },
        {
          value: false,
          label: 'סה"כ',
        },
      ],
    },
  ];

  constructor(private formService: FormService) {}

  public getBidQuestions() {
    return [...this.questions];
  }

  public getUploadQuestion(): QuestionUploadModel {
    const question: QuestionUploadModel = new QuestionUploadModel({
      key: 'upload',
      label: 'לחץ להעלאת קובץ',
      multi: true,
      validations: [Validators.required],
    });

    return question;
  }
}
