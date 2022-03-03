import { Observable } from 'rxjs';
import { SelectOption } from '../../form/models/question-select.model';
import { TableColumnModel } from '../../columns/models/column.model';
import { TableEvent } from '../table.events';
import { SortDirection } from '@angular/material/sort';
import { ButtonActionState } from '../table-actions/table-actions.component';
import { QuestionGroupModel } from '../../form/models/question-group.model';

export interface TableState {
  selected: { [key: string]: boolean };
  editing: number[];
  extended: number[];
  disabled: number[];
  activeColumns: string[];
  forms: { [key: string]: QuestionGroupModel };
  event: TableEvent;
}

export interface RowsState<T = any> {
  item?: T;
  key?: string;
  event?: TableEvent;
  rowIndex?: number;
  column?: TableColumnModel<T>;
  group?: QuestionGroupModel<T>;
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
