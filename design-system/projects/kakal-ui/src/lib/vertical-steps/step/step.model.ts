import { FormGroup } from '@angular/forms';

export interface Step<T = any> {
  key: keyof T;
  label: string;
  index?: number;
  control?: FormGroup;
  completed?: boolean;
}
