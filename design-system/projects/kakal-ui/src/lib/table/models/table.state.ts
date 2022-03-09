import { TableColumnModel } from '../../columns/models/column.model';
import { ColumnActions, TableActions } from '../models/table-actions';
import { SortDirection } from '@angular/material/sort';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { FormActions } from '../../form/models/form.actions';
import { PaginationInstance } from 'ngx-pagination';
import { Observable } from 'rxjs';
import { KKLSelectOption } from '../../form/models/form.types';

export interface TableState {
  selected?: { [key: string]: boolean };
  editing?: number[];
  extended?: number[];
  disabled?: number[];
  activeColumns?: string[];
  pagination?: PaginationInstance;
  forms?: { [key: string]: QuestionGroupModel };
  event?: FormActions | TableActions;
  filters?: FilterState;
  sort?: SortState;
}

export interface FetchState {
  itemsPerPage: number;
  next: number;
  sorting: string;
  sortBy: SortDirection;
  filters: any;
}

export interface SortState {
  sorting: string;
  sortBy: SortDirection;
}
export declare type FilterState = { [key: string]: any };

export interface RowState<T = any> {
  item?: T;
  key?: string;
  event?: FormActions | TableActions;
  itemIndex?: number;
  column?: TableColumnModel<T>;
  group?: QuestionGroupModel<T>;
  // options?: { panel?: MatExpansionPanel; item?: T; selected?: number[], key? : string, validations? : any[] };
}

// interface for update select and filter options

export type ColumnState<T = any> = {
  event: ColumnActions;
  key?: keyof T;
  options?: KKLSelectOption[];
  dir?: SortDirection;
};

export interface ActionState {
  show: boolean;
  disabled: boolean;
  valid?: boolean;
  event?: FormActions;
}
