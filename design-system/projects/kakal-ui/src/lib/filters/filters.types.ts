export declare type FilterState = { [key: string]: FilterChangeEvent | null };

export enum FilterType {
  SEARCH = 'search',
  SELECT = 'select',
  RANGE = 'range',
  MULTI_SELECT = 'multiSelect',
  DATE_RANGE = 'dateRange',
  NUMBER_RANGE = 'numberRange',
}

export interface FilterRange<T = any> {
  start?: T;
  end?: T;
  type?: FilterType;
}

export interface FilterChangeEvent<T = FilterType> {
  key: string;
  label?: string;
  value?: any;
  filterType?: T;
  format?: string;
}
