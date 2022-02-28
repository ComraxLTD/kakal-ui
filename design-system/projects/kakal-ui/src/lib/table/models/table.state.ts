import { Observable } from "rxjs";
import { SelectOption } from "../../form/models/question-select.model";
import { TableColumnModel} from '../../columns/column.model'
import { TableEvent } from "./table-event";
import { SortDirection } from "@angular/material/sort";
import { TableRowModel } from "./table-row.model";
import { ButtonActionState } from "../table-actions/table-actions.component";

export interface RowsState<T> {
  event?: TableEvent;
  row?: TableRowModel<T>;
  column?: TableColumnModel<T>;
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

export declare type TableActionStatenMap = {
  [key: number]: Observable<ButtonActionState>;
};

