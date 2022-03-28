import { FormGroup } from '@angular/forms';

export interface Step<T = any> {
  key: keyof T;
  label: string;
  control?: FormGroup;
}
