import { Observable } from 'rxjs';
import { HeaderCellModel } from '../components/header-cells/models/header-cell.model';
import { TableDataSource } from './table-datasource';
import { TableOptions } from './table-options';

// interface for every comp which want to use kkl-table = {
// data : array of objects to render in table
//  columns : array of ColumnsModel
// options : see TableOptions interface
// model : new instance of the data object
// }
export interface Table<T> {
  dataSource: TableDataSource<T>;
  data$: Observable<T[]>;
  columns: HeaderCellModel<T>[];
  options: TableOptions<T>;
  model: T;
}
