import { SelectOption } from '../form/form-select/question-select.model';
import { Range } from '../form/form-range/question-range.model';

export declare type FilterState = { [key: string]: FilterChangeEvent | null };
export declare type FilterLookups = { [key: string]: FilterValue };

export enum FilterType {
  SEARCH = 'search',
  SELECT = 'select',
  RANGE = 'range',
  MULTI_SELECT = 'multiSelect',
  DATE_RANGE = 'dateRange',
  NUMBER_RANGE = 'numberRange',
}

export declare type FilterValue =
  | string
  | SelectOption
  | SelectOption[]
  | Range<Date>
  | Range<Number>;

export interface FilterRange<T = any> {
  start?: T;
  end?: T;
}

export interface FilterChangeEvent<T = FilterType> {
  key: string;
  label?: string;
  value?: any;
  filterType?: T;
  format?: { type: string; args: any };
}
