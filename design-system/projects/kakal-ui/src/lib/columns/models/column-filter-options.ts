import { Observable } from "rxjs";
import { SelectOption } from "../../form/models/question-select.model";
import { TableColumnModel } from "./column.model";

export interface ColumnFilterOption<T> {
  column?: TableColumnModel<T>;
  option?: SelectOption;
  label?: string;
  value$?: Observable<string>;
  value?: any;
  type?: 'amount' | 'date' | 'text';
  multi?: boolean;
}

