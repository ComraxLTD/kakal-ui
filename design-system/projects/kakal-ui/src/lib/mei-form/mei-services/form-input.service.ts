import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';
import { ControlType } from '../models/question.types';

@Injectable({
  providedIn: 'root',
})
export class FormInputService {
  constructor() {}
  getInputProps(type: string): {
    icon?: string;
    validation?: ValidatorFn;
    placeHolder?: string;
    cleave?: {};
    controlType?: ControlType;
  } {
    switch (type) {
      case 'email':
        return {
          icon: 'email',
          validation: Validators.email,
          placeHolder: 'דוא"ל',
        };
      case 'phone':
        return {
          icon: 'phone',
          cleave: {
            blocks: [3, 3, 4],
            placeHolder: 'טלפון',
            delimiter: '-',
            numericOnly: true,
          },
          controlType: 'cleave',
        };
      case 'time':
        return {
          icon: 'time',
          cleave: { time: true, timePattern: ['h', 'm'] },
          controlType: 'cleave',
        };
      case 'sum':
        return {
          controlType: 'cleave',
          cleave: { numeral: true, numericOnly: true },
        };
    }
  }
}
