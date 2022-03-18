import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { FormActions } from "./form.actions";

export interface FormChangeEvent<T = any> {
  key?: string;
  index?: number;
  event?: FormActions;
  control?: FormControl;
  value?: T;
  query?: any;
  value$?: Observable<any>;
  query$?: Observable<any>;
}
