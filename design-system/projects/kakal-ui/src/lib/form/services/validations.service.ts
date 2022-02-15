import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export interface KKL_REGEX {
  name: RegExp;
  email: RegExp;
  phone: RegExp;
  positive: RegExp;
  password: RegExp;
}

function setSumAsNumber(sum: string): number {
  if (typeof sum === 'string' && sum.includes(',')) {
    sum = sum.split(',').reduce((acc, val) => acc + val);
  }
  return Number(sum);
}

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor() {}

  public static isEmptyInputValue(value: any): boolean {
    return value === null || value?.length === 0;
  }

  public static regex(key: keyof KKL_REGEX): ValidatorFn {
    const regex: KKL_REGEX = {
      name: /^[a-zA-Z ]{3,25}$/,
      email: /^([a-zA-Z0-9_\\.]+)@([a-zA-Z0-9_\\.]+)\.([a-zA-Z]{2,5})$/,
      phone: /^\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
      positive: /^[1-9]+[0-9]*$/,
      password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
    };

    return Validators.pattern(regex[key]);
  }

  public static range(
    from: string,
    to: string,
    labels?: { from: string; to: string }
  ) {
    return (group: FormGroup): ValidationErrors | null => {
      const f = group.controls[from] as FormControl;
      const t = group.controls[to] as FormControl;

      if (
        ValidationService.isEmptyInputValue(f.value) ||
        ValidationService.isEmptyInputValue(from)
      ) {
        return null;
      }

      const fromValue = f.value;

      if (fromValue && ValidationService.isEmptyInputValue(t.value)) {
        t.enable({
          onlySelf: true,
          emitEvent: false,
        });
        return null;
      }

      const toValue = t.value;

      if (fromValue > toValue) {
        // emit error state

        const error = `שדה ${labels.from} קטן משדה ${labels.to}`;

        t.setErrors({ range: error || true });

        return {
          range: error || true,
        };
      }
      return null;
    };
  }

  public static maxCurrency(max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (
        ValidationService.isEmptyInputValue(control.value) ||
        ValidationService.isEmptyInputValue(max)
      ) {
        return null; // don't validate empty values to allow optional controls
      }
      const value = setSumAsNumber(control.value);
      return !isNaN(value) && value > max
        ? { maxCurrency: { max, actual: control.value } }
        : null;
    };
  }
}
