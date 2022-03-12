export declare type ColumnDef<T = any> = keyof T | 'select' | 'actions' | string;

export declare type HeaderType =
  | 'default'
  | 'custom'
  | 'actions'
  | 'select'
  | 'expend';

export enum FilterType {
  SEARCH = 'search',
  SELECTED = 'select',
  MULTI_SELECTED = 'multiSelect',
  DATE_RANGE = 'dateRange',
  NUMBER_RANGE = 'numberRange',
}

export interface FilterRange<T = any> {
  start?: T;
  end?: T;
  type?: FilterType;
}

export interface FilterOption<T = any> {
  key: string;
  label?: string;
  value?: T;
  filterType?: FilterType;
  format?: string;
}
