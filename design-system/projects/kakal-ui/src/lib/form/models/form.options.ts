import { FormControl } from "@angular/forms";
import { MatListOption } from "@angular/material/list";
import { Observable } from "rxjs";
import { FormActions } from "./form.actions";
import { SelectOption } from "./question-select.model";

export interface FormOption {
  key?: string;
  index?: number;
  event?: FormActions;
  control?: FormControl;
  option?: SelectOption;
  multi?: boolean;
  options?: SelectOption[] | MatListOption[];
  value?: any;
  query?: any;
  value$?: Observable<any>;
  query$?: Observable<any>;
}
