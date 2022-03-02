import { Observable } from 'rxjs';
import { TableColumnModel } from '../../columns/models/column.model';
import { FormEvent } from '../../form/models/form-data-source.model';
import { TableDataSource } from './table-datasource';
import { TableOptions } from './table-options';

export declare type TableEvent =
  | FormEvent
  | 'expand'
  | 'close'
  | 'cancel'
  | 'form'
  | 'selected'
  | 'reset'
  | 'selectRows'
  | 'addOptions'
  | 'updateOptions'
  | 'updateSortDir'
  | 'updateOptionsSelected'
  | 'updateMulti';

export declare type TableActions =
  | 'expand'
  | 'close'
  | 'cancel'
  | 'form'
  | 'selected'
  | 'reset';

// interface for every comp which want to use kkl-table = {
// data : array of objects to render in table
//  columns : array of ColumnsModel
// options : see TableOptions interface
// model : new instance of the data object
// }
export interface Table<T> {
  dataSource: TableDataSource<T>;
  data$: Observable<T[]>;
  columns: TableColumnModel<T>[];
  options: TableOptions<T>;
  model: T;
}
