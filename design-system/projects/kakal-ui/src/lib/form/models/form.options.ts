import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { FormActions } from "./form.actions";

export interface FormChangeEvent {
  key?: string;
  index?: number;
  event?: FormActions;
  control?: FormControl;
  value?: any;
  query?: any;
  value$?: Observable<any>;
  query$?: Observable<any>;
}
