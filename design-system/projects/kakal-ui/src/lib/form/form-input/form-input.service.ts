import { Injectable } from '@angular/core';
import { ValidationService } from '../services/validations.service';
import { ValidatorFn, Validators } from '@angular/forms';
import { ControlType } from '../models/question.types';

@Injectable({
  providedIn: 'root',
})
export class FormInputService {
  constructor() { }

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
            placeHolder: 'טלפון',
            blocks: [15],
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
