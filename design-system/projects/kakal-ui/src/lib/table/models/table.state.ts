import { Observable } from "rxjs";
import { SelectOption } from "../../form/models/question-select.model";
import { ColumnModel} from '../../columns/column.model'
import { TableEvent } from "./table-events";
import { SortDirection } from "@angular/material/sort";
import { TableRowModel } from "./table-row.model";

export interface RowsState<T> {
  event?: TableEvent;
  row?: TableRowModel<T>;
  column?: ColumnModel<T>;
  options?: any;
  // options?: { panel?: MatExpansionPanel; item?: T; selected?: number[], key? : string, validations? : any[] };
}

// interface for update select and filter options

export type ColumnState<T> = {
  event?: TableEvent;
  key?: keyof T;
  options$?: Observable<SelectOption[]>;
  // multiOptions$?: Observable<FilterMap>;
  // valueMap$?: Observable<{ [key: string]: ListItem<T> }>;
  type?: 'filter' | 'select';
  dir?: SortDirection;
};
