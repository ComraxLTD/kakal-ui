import { FormControl } from "@angular/forms";
import { MatListOption } from "@angular/material/list";
import { Observable } from "rxjs";
import { FormActions } from "./form.actions";
import { SelectOption } from "./question-select.model";

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
