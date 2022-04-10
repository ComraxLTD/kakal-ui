import { FormControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MeiMessageService {
  constructor() {}

  // handle input error messages
  public getErrorMessage(control: FormControl, placeHolder: string): string {
    const errors = control.errors;
    const key = errors ? Object.keys(errors) : null;

    const messageMap: ValidationErrors = {
      required: () => 'שדה חובה',
      minlength: () => 'ערך קצר מידי',
      pattern: (errors, placeHolder) => `מבנה ${placeHolder} לא תקין`,
      range: (errors) => errors?.range,
      maxCurrency: (errors) => `לא יכול להיות גבוה מ ${errors.maxCurrency.max}`,
      email: () => 'האיימל לא תקין',
    };

    return key ? messageMap[key[0]](errors, placeHolder) : '';
  }
}
