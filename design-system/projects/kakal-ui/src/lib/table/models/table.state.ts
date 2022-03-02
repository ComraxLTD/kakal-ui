import { Observable } from 'rxjs';
import { SelectOption } from '../../form/models/question-select.model';
import { TableColumnModel } from '../../columns/models/column.model';
import { TableEvent } from './table-event';
import { SortDirection } from '@angular/material/sort';
import { ButtonActionState } from '../table-actions/table-actions.component';
import { QuestionGroupModel } from '../../form/models/question-group.model';

export interface TableState {
  selected: { [key: string]: boolean };
  editing: number[];
  extended: number[];
  disabled: number[];
  activeColumns: string[];
  form: QuestionGroupModel;
  event: TableEvent;
}

export interface RowsState<T = any> {
  item?: T;
  key?: string;
  event?: TableEvent;
  itemIndex?: number;
  column?: TableColumnModel<T>;
  options?: any;
  // options?: { panel?: MatExpansionPanel; item?: T; selected?: number[], key? : string, validations? : any[] };
}

// interface for update select and filter options

export type ColumnState<T> = {
  event?: TableEvent;
  key?: keyof T;
  options$?: Observable<SelectOption[]>;
  type?: 'filter' | 'select';
  dir?: SortDirection;
};

export declare type TableActionStatenMap = {
  [key: number]: Observable<ButtonActionState>;
};
