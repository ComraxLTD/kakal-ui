import { FilterType } from './header.types';

export interface FilterOption {
  key: string;
  label?: string;
  value?: any;
  filterType?: FilterType;
  format?: string;
}
