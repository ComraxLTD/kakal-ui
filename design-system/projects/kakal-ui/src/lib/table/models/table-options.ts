// interface for table options : {
// key - unique key of T (ex : id)
// filters - array of T keys to not include in the table
// pagination - a PaginationInstance
// editable - rows to start in edit state
// selected - rows to start in selected state
// disabled - rows to start in disable state
// disableSelect -

import { PaginationInstance } from 'ngx-pagination';

export interface TableOptions<T> {
  key: string;
  filters?: keyof T[];
  pagination?: PaginationInstance;
  editable?: number[];
  selected?: number[];
  disabled?: number[];
  disableSelect?: boolean;
}
