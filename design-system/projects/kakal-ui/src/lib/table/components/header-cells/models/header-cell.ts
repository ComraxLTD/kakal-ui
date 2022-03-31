import { SortDirection } from '@angular/material/sort';
import { ColumnDef, HeaderType } from './header.types';

export interface HeaderCellModel<T = any> {
  columnDef: ColumnDef<T>;
  label?: string;
  format?: string;
  type?: HeaderType;
  selector?: string;

  flex?: number;
  center?: boolean;
  footer?: boolean;

  expendable?: boolean;

  selectable?: boolean;
  disableSelect?: boolean;

  sortDir?: SortDirection;
}
