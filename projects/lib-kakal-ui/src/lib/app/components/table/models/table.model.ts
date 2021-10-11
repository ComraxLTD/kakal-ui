import { PaginationInstance } from 'ngx-pagination';
import { Observable } from 'rxjs';
import { ColumnModel } from './column.model';
import { RowModel } from './row.model';

export class TableModel<T> {
  public $data: Observable<RowModel<T>[]>;
  public columns: ColumnModel[];

  public columnDefs: string[];
  public pagination: PaginationInstance;

  public rows: RowModel<T>[];

  constructor(options: {
    data: T[];
    type: T;
    columns: ColumnModel[];
    pagination?: PaginationInstance;
    filters?: string[];
  }) {
    this.columns = options.columns || [];
    this.pagination = options?.pagination
  }

}
