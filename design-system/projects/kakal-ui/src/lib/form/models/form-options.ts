import { FormControl } from "@angular/forms";
import { MatListOption } from "@angular/material/list";
import { Observable } from "rxjs";
import { FormEvents } from "./form-events";
import { SelectOption } from "./question-select.model";

export interface FormOption {
  key?: string;
  index?: number;
  event?: FormEvents;
  control?: FormControl;
  option?: SelectOption;
  multi?: boolean;
  options?: SelectOption[] | MatListOption[];
  value?: any;
  query?: any;
  value$?: Observable<any>;
  query$?: Observable<any>;
}
