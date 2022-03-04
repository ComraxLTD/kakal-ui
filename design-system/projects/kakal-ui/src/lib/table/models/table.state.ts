import { Observable } from 'rxjs';
import { SelectOption } from '../../form/models/question-select.model';
import { TableColumnModel } from '../../columns/models/column.model';
import { TableEvent } from '../models/table.events';
import { SortDirection } from '@angular/material/sort';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { FormEvents } from '../../form/models/form-events';

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


// interface for custom button action state
export interface TableActionState {
  showDelete?: number[];
  disableDelete?: number[];
  showEdit?: number[];
  disableEdit?: number[];
}

export interface ActionState {
  show: boolean;
  disabled: boolean;
  valid?: boolean;
  event?: FormEvents;
}
