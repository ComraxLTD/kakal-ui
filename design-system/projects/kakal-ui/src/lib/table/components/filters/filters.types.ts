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

export interface FilterChangeEvent<T = any> {
  key: string;
  label?: string;
  value?: T;
  filterType?: FilterType;
  format?: string;
}
