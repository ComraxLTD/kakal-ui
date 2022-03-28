import { FormGroup } from '@angular/forms';

export interface Step {
  key: string | number;
  label: string;
  control?: FormGroup;
}
