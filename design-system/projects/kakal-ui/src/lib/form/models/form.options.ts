import { FormControl } from "@angular/forms";
import { FormActions } from "./form.actions";
import { Observable } from "rxjs";

export interface FormChangeEvent<T = any> {
  key: string;
  index?: number;
  control?: FormControl;
  value?: T;
  query?: any;
  value$?: Observable<any>;
  query$?: Observable<any>;
  action : FormActions;
}
