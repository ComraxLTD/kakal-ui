export declare type ColumnDef<T> = keyof T | 'select' | 'actions' | string;

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
