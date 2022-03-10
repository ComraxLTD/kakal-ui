import { TableColumnModel } from '../../columns/models/column.model';
import { ColumnActions, FetchActions, TableActions } from '../models/table-actions';
import { SortDirection } from '@angular/material/sort';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { FormActions } from '../../form/models/form.actions';
import { PaginationInstance } from 'ngx-pagination';
import { KKLSelectOption } from '../../form/models/form.types';
import { FilterOption } from '../components/header-cells/components/filter-header-cell/filter-header-cell.component';

export interface TableState {
  selected?: { [key: string]: boolean };
  editing?: number[];
  extended?: number[];
  disabled?: number[];
  activeColumns?: string[];
  pagination?: PaginationInstance;
  forms?: { [key: string]: QuestionGroupModel };
  action?: FormActions | TableActions | FetchActions;
  filters?: FilterState;
  sort?: SortState;
}

export interface FetchState {
  itemsPerPage: number;
  next: number;
  sort?: SortState;
  filters?: FilterState;
}

export interface SortState {
  sorting: string;
  sortBy: SortDirection;
}
export declare type FilterState = { [key: string]: FilterOption };

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
