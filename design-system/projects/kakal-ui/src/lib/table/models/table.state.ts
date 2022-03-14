import { SortDirection } from '@angular/material/sort';
import {
  ColumnActions,
  FetchActions,
  TableActions,
} from '../models/table-actions';
import { QuestionGroupModel } from '../../form/models/question-group.model';
import { FormActions } from '../../form/models/form.actions';
import { PaginationInstance } from 'ngx-pagination';
import { KKLSelectOption } from '../../form/models/form.types';
import { ColumnDef, FilterChangeEvent } from '../components/header-cells/models/header.types';
import { HeaderCellModel } from '../components/header-cells/models/header-cell.model';

export interface TableState {
  selected?: { [key: string]: boolean };
  editing?: number[];
  extended?: number[];
  disabled?: number[];
  activeColumns?: ColumnDef[];
  pagination?: PageState;
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
export declare type FilterState = { [key: string]: FilterChangeEvent | null };

export interface RowState<T = any> {
  item?: T;
  key?: string;
  event?: FormActions | TableActions;
  itemIndex?: number;
  column?: HeaderCellModel<T>;
  group?: QuestionGroupModel<T>;
  // options?: { panel?: MatExpansionPanel; item?: T; selected?: number[], key? : string, validations? : any[] };
}

// interface for update select and filter options

export type HeaderState<T = any> = {
  action: ColumnActions;
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

export interface PageState extends PaginationInstance {
  currentPage: number;
  itemsPerPage: number;
  pages?: number[];
  next?: number;
  totalItems?: number;
}
